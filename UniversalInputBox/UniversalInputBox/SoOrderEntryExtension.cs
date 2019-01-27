using System;
using System.Collections.Generic;
using System.Linq;
using PX.Data;
using PX.Objects.AR;
using PX.Objects.Common.Abstractions;
using PX.Objects.IN;
using PX.Objects.SO;

namespace UniversalInputBox
{
    public class SoOrderEntryExtension : PXGraphExtension<SOOrderEntry>
    {
        private static readonly IEnumerable<string> FieldsDelimiters = new List<string>
        {
            " ",
            Environment.NewLine
        };

        private static readonly IEnumerable<string> QuantityAndUnitPriceDelimiters = new List<string>
        {
            ";"
        };

        public PXFilter<SalesOrderFilter> SearchRequestFilter;

        public PXAction<SOOrder> search;

        [PXButton(CommitChanges = true)]
        [PXUIField(DisplayName = "Go")]
        public virtual void Search()
        {
            var salesOrder = Base.Document.Current;
            if (IsExistingOrderSelected(salesOrder))
            {
                Base.Document.Current = null;
                salesOrder = Base.Document.Insert();
            }
            var salesOrderModel = GetSalesOrderModel();
            FillSalesOrder(salesOrderModel, salesOrder);
            CreateSalesOrderLines(salesOrderModel);
            Base.Document.Current = salesOrder;
            Base.Document.Cache.IsDirty = true;
        }

        private void CreateSalesOrderLines(SalesOrderModel salesOrderModel)
        {
            foreach (var lineItem in salesOrderModel.LineItems)
            {
                var transaction = Base.Transactions.Insert();
                transaction.InventoryID = GetInventoryId(lineItem.InventoryItemCd);
                var quantityAndUnitPrice = lineItem.QuantityAndUnitPrice
                    .Split(QuantityAndUnitPriceDelimiters.ToArray(), StringSplitOptions.RemoveEmptyEntries);
                transaction.OrderQty = decimal.Parse(quantityAndUnitPrice.First());
                transaction.CuryUnitPrice = decimal.Parse(quantityAndUnitPrice.Last());
            }
        }

        private int? GetInventoryId(string inventoryItemCd)
        {
            var inventoryItem = new PXSelect<InventoryItem,
                    Where<InventoryItem.inventoryCD, Equal<Required<InventoryItem.inventoryCD>>>>(Base)
                .SelectSingle(inventoryItemCd);
            return inventoryItem.InventoryID;
        }

        private void FillSalesOrder(SalesOrderModel salesOrderModel, SOOrder salesOrder)
        {
            salesOrder.OrderDesc = "Team Alpha";
            salesOrder.CustomerID = GetCustomerId(salesOrderModel.CustomerCd);
            salesOrder.RequestDate = GetRequestDate(salesOrderModel.RequestDate);
            salesOrder.ShipVia = salesOrderModel.ShipVia;
        }

        private bool IsExistingOrderSelected(IDocumentKey salesOrder)
        {
            return Base.Document.Cache.GetStatus(salesOrder) != PXEntryStatus.Inserted;
        }

        private int? GetCustomerId(string customerCd)
        {
            var customer = new PXSelect<Customer,
                Where<Customer.acctCD, Equal<Required<Customer.acctCD>>>>(Base).SelectSingle(customerCd);
            return customer.BAccountID;
        }

        private DateTime? GetRequestDate(string requestedOn)
        {
            switch (requestedOn)
            {
                case "today":
                    return Base.Accessinfo.BusinessDate;
                case "tomorrow":
                    return Base.Accessinfo.BusinessDate.GetValueOrDefault().AddDays(1);
                default:
                    return DateTime.Parse(requestedOn);
            }
        }

        private SalesOrderModel GetSalesOrderModel()
        {
            var request = SearchRequestFilter.Current.SearchRequest;
            var fields = request.Split(FieldsDelimiters.ToArray(), StringSplitOptions.RemoveEmptyEntries);
            var model = new SalesOrderModel
            {
                CustomerCd = fields[0],
                RequestDate = fields[1],
                ShipVia = fields[2]
            };
            var lineItems = fields.Skip(3).ToList().Chunk(2);
            foreach (var lineItem in lineItems)
            {
                model.LineItems.Add(new SalesOrderLineModel
                {
                    InventoryItemCd = lineItem.First(),
                    QuantityAndUnitPrice = lineItem.Last()
                });
            }
            return model;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using PX.Data;
using PX.Objects.AR;
using PX.Objects.Common.Abstractions;
using PX.Objects.SO;

namespace UniversalInputBox
{
    public class SoOrderEntryExtension : PXGraphExtension<SOOrderEntry>
    {
        private static readonly IEnumerable<string> Delimiters = new List<string>
        {
            " ",
            Environment.NewLine
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
            Base.Document.Current = salesOrder;
        }

        private void FillSalesOrder(SalesOrderModel salesOrderModel, SOOrder salesOrder)
        {
            salesOrder.OrderDesc = "Team Alpha";
            salesOrder.CustomerID = GetCustomerId(salesOrderModel.CustomerCd);
            salesOrder.RequestDate = GetRequestDate(salesOrderModel.RequestDate);
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
            var fields = request.Split(Delimiters.ToArray(), StringSplitOptions.RemoveEmptyEntries);
            return new SalesOrderModel
            {
                CustomerCd = fields[0],
                RequestDate = fields[1]
            };
        }
    }
}
using PX.Data;
using PX.Objects.SO;

namespace UniversalInputBox
{
    public class SoOrderEntryExtension : PXGraphExtension<SOOrderEntry>
    {
        public PXFilter<SalesOrderFilter> SearchRequestFilter;

        public PXAction<SOOrder> search;

        [PXButton(CommitChanges = true)]
        [PXUIField(DisplayName = "Go")]
        public virtual void Search()
        {
            var searchRequest = SearchRequestFilter.Current.SearchRequest;
            CreateSalesOrderPrototype(searchRequest);
        }

        private void CreateSalesOrderPrototype(string searchRequest)
        {
            var salesOrder = Base.Document.Insert();
            salesOrder.OrderDesc = searchRequest;
            Base.Document.Current = salesOrder;
        }
    }
}
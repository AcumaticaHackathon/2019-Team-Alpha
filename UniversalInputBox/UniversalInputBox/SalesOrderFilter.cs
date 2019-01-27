using PX.Data;

namespace UniversalInputBox
{
    public class SalesOrderFilter : IBqlTable
    {
        [PXString]
        [PXUIField(DisplayName = "Search")]
        public virtual string SearchRequest
        {
            get;
            set;
        }
    }
}
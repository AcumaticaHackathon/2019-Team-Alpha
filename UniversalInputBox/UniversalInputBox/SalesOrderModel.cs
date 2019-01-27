using System.Collections.Generic;

namespace UniversalInputBox
{
    public class SalesOrderModel
    {
        public string CustomerCd
        {
            get;
            set;
        }

        public string RequestDate
        {
            get;
            set;
        }

        public string ShipVia
        {
            get;
            set;
        }

        public List<SalesOrderLineModel> LineItems
        {
            get;
            set;
        } = new List<SalesOrderLineModel>();
    }
}
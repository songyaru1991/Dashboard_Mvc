//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dashboard_Mvc.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class RC_WORKING_HOURS
    {
        public long WH_HEADER_ID { get; set; }
        public string ORG_CODE { get; set; }
        public Nullable<System.DateTime> PROD_DATE { get; set; }
        public string RC_NO { get; set; }
        public string RC_STATUS { get; set; }
        public decimal PROD_QTY { get; set; }
        public string DEPARTMENT_CODE { get; set; }
        public string DEPARTMENT_NAME { get; set; }
        public string PROD_LINE_CODE { get; set; }
        public string SHIFT_NAME { get; set; }
        public long OPERATION_NUM { get; set; }
        public string BOM_RESOURCE_CODE { get; set; }
        public string RESOURCE_TYPE { get; set; }
        public string BOM_RESOURCE_NAME { get; set; }
        public Nullable<decimal> PROD_TIME { get; set; }
        public Nullable<decimal> SCHEDULE_HOURS { get; set; }
        public Nullable<decimal> ATTEND_HOURS { get; set; }
        public Nullable<decimal> LOSS_HOURS { get; set; }
        public Nullable<decimal> RC_GOOD_MOVE_QTY { get; set; }
        public Nullable<decimal> RC_NG_MOVE_QTY { get; set; }
        public string WH_DESC { get; set; }
        public string WIP_ENTITY_NAME { get; set; }
        public string JOB_TYPE_MEANING { get; set; }
        public string STATUS_TYPE_DISP { get; set; }
        public Nullable<System.DateTime> DATE_RELEASED { get; set; }
        public Nullable<System.DateTime> DATE_CLOSED { get; set; }
        public string PRIMARY_ITEM { get; set; }
        public string PRIMARY_ITEM_DESC { get; set; }
        public string PRIMARY_UOM_CODE { get; set; }
        public string PRIMARY_ITEM_PROJECT_CODE { get; set; }
        public decimal START_QUANTITY { get; set; }
        public decimal QUANTITY_COMPLETED { get; set; }
        public Nullable<decimal> JOB_GOOD_QTY { get; set; }
        public Nullable<decimal> JOB_NG_QTY { get; set; }
        public Nullable<decimal> JOB_UNKNOW_QTY { get; set; }
        public string COMPLETION_SUBINVENTORY { get; set; }
        public string RESOURCE_NAME { get; set; }
        public string DAILY_REPORT_STATUS { get; set; }
        public Nullable<decimal> STD_USAGE_RATE { get; set; }
        public long RC_HEADER_ID { get; set; }
        public long RC_LINE_ID { get; set; }
        public Nullable<long> RC_RESOURCE_ID { get; set; }
        public long WIP_ENTITY_ID { get; set; }
        public decimal RESOURCE_ID { get; set; }
        public System.DateTime CREATION_DATE { get; set; }
        public System.DateTime LAST_UPDATE_DATE { get; set; }
        public long ORGANIZATION_ID { get; set; }
    }
}
﻿//# sourceURL=Excalibur_SMT_Total_Product.js

var getSMTTotalCapacityUrl = "../FoxlinkSfc/getSMTTotalCapacity", modelNO = "Excalibur", isTotalCapacity = true;
if (timeInterval == "1Week") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'Excalibur SMT近七天總產量';
    SMTTotalProductChart.yAxisTitle = 'Excalibur SMT近七天總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近七天總產量"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近七天總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'Excalibur SMT近七天總產量良率';
    SMTProductRateChart.yAxisTitle = 'Excalibur SMT近七天總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近七天總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'Excalibur SMT近两周總產量';
    SMTTotalProductChart.yAxisTitle = 'Excalibur SMT近两周總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近两周總產量"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近两周總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'Excalibur SMT近两周總產量良率';
    SMTProductRateChart.yAxisTitle = 'Excalibur SMT近两周總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近两周總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'Excalibur SMT近一个月總產量';
    SMTTotalProductChart.yAxisTitle = 'Excalibur SMT近一个月總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近一个月總產量"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近一个月總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'Excalibur SMT近一个月總產量良率';
    SMTProductRateChart.yAxisTitle = 'Excalibur SMT近一个月總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近一个月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "4Month") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'Excalibur SMT近四月總產量';
    SMTTotalProductChart.yAxisTitle = 'Excalibur SMT近四月總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近四月總產量"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近四月總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'Excalibur SMT近四月總產量良率';
    SMTProductRateChart.yAxisTitle = 'Excalibur SMT近四月總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}

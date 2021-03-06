﻿//# sourceURL=Taurus(LK)_By_NIStation.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "Taurus", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(LK)近七天通過各NI站總數量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近七天通過各NI站總數量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近七天通過各NI站總數量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近七天通過各NI站總數量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近七天通過各NI站';
    productRateChart.yAxisTitle = 'Taurus(LK)近七天通過各NI站良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近七天通過各NI站良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(LK)近兩周通過各NI站總數量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近兩周通過各NI站總數量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近兩周通過各NI站總數量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近兩周通過各NI站總數量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近兩周通過各NI站';
    productRateChart.yAxisTitle = 'Taurus(LK)近兩周通過各NI站良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近兩周通過各NI站良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(LK)近一個月通過各NI站總數量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近一個月通過各NI站總數量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近一個月通過各NI站總數量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近一個月通過各NI站總數量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近一個月通過各NI站';
    productRateChart.yAxisTitle = 'Taurus(LK)近一個月通過各NI站良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近一個月通過各NI站良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
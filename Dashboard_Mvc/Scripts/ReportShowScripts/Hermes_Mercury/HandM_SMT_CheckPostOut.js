﻿//# sourceURL=HandM_SMT_CheckPostOut.js

var getSMTPostOutUrl = "../FoxlinkSfc/getSMTTotalProduction", modelNO = "H/M";
if (timeInterval == "1Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'H/M SMT近七天檢測站總過帳量';
    postOutChart.yAxisTitle = 'H/M SMT近七天檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M SMT近七天檢測站總過帳量"
    },
            {
                type: 'line',
                name: "H/M SMT近七天檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var getSMTPostOutUrl = "../FoxlinkSfc/getSMTTotalProduction", modelNO = "H/M", timeInterval = "2Week";
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'H/M SMT近兩周檢測站總過帳量';
    postOutChart.yAxisTitle = 'H/M SMT近兩周檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M SMT近兩周檢測站總過帳量"
    },
            {
                type: 'line',
                name: "H/M SMT近兩周檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'H/M SMT近一個月檢測站總過帳量';
    postOutChart.yAxisTitle = 'H/M SMT近一個月檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M SMT近一個月檢測站總過帳量"
    },
            {
                type: 'line',
                name: "H/M SMT近一個月檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
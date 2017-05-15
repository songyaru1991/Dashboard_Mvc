﻿//# sourceURL=Excalibur_SMT_LineNum.js

var getSMTLineNumUrl = "../FoxlinkSfc/getSMTLineInfos", modelNO = "Excalibur";
if (timeInterval == "1Week") {
    var SMTLineNumChart = new Object();
    SMTLineNumChart.RenderTO = 'divProductArea';
    SMTLineNumChart.Title = 'Excalibur SMT近七天線體數';
    SMTLineNumChart.yAxisTitle = 'Excalibur SMT近七天線體數';
    SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近七天線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur SMT近七天線體數",
                                color: '#89A54E'
                            }
    ];
    SMTLineNumChart.series = chartSeries;
    var LineNumChart = setColumnAndTrendCharts(SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, LineNumChart, SMTLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var SMTLineNumChart = new Object();
    SMTLineNumChart.RenderTO = 'divProductArea';
    SMTLineNumChart.Title = 'Excalibur SMT近兩周線體數';
    SMTLineNumChart.yAxisTitle = 'Excalibur SMT近兩周線體數';
    SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近兩周線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur SMT近兩周線體數",
                                color: '#89A54E'
                            }
    ];
    SMTLineNumChart.series = chartSeries;
    var LineNumChart = setColumnAndTrendCharts(SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, LineNumChart, SMTLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var SMTLineNumChart = new Object();
    SMTLineNumChart.RenderTO = 'divProductArea';
    SMTLineNumChart.Title = 'Excalibur SMT近一個月線體數';
    SMTLineNumChart.yAxisTitle = 'Excalibur SMT近一個月線體數';
    SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近一個月線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur SMT近一個月線體數",
                                color: '#89A54E'
                            }
    ];
    SMTLineNumChart.series = chartSeries;
    var LineNumChart = setColumnAndTrendCharts(SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, LineNumChart, SMTLineNumChart.xtext, modelNO, timeInterval);
}
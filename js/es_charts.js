var xAxis = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
var chart_width = 500;
var chart_height = 300;

// function createOptions(chartDiv, style, title, yAxisText, dataSeries){
//     return {
//         chart: {
//             renderTo: chartDiv,
//             defaultSeriesType: style,
//             style: {
//                 fontFamily: 'Lato, sans-serif'
//             }
//         },
//         credits: {
//             enabled: false
//         },
//         title: {
//             text: title
//         },
//         xAxis: {
//             categories: xAxis
//         },
//         yAxis: {
//             title: {
//                 text: yAxisText
//             }
//         },
//         series: dataSeries
//     }
// }
//
// //
//
// function createChart(attributes, fieldName, targetName, chartDiv, style, targetType, title, displayName, yAxisText, dataColor, targetColor) {
//     var data = [];
//     var dataSeries = [];
//     var options;
//     if (attributes[fieldName]) {
//         attributes[fieldName].split(',').forEach(function (d) {
//             data.push(parseFloat(d));
//         })
//         dataSeries.push({
//             name: displayName,
//             data: data,
//             color: dataColor
//         });
//         if (attributes[targetName]) {
//             var target = [];
//             xAxis.forEach(function () {
//                 target.push(parseFloat(attributes[targetName]));
//             });
//             dataSeries.push(
//                 {
//                     type: targetType,
//                     name: 'Target',
//                     data: target,
//                     color: targetColor
//
//                 });
//         }
//         options = createOptions(chartDiv, style, title, yAxisText, dataSeries)
//     }
//     else {
//         data = null;
//         options = createOptions(chartDiv, style, title + " (Not Available)", yAxisText, null)
//     }
//     new Highcharts.Chart(options);
// }

// function BA_ES(filename){
//     this.watershed = {
//         name: name,
//         TPloading: {
//             name: 'Annual TP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         DRPloading: {
//             name: 'Annual DRP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         TPFWMC: {
//             name: 'Annual TP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         DRPFWMC: {
//             name: 'Annual DRP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         discharge:{
//             name: 'Annual Discharge',
//             unit: 'Million Cubic Meters',
//             series: []
//         },
//         TPloading_S: {
//             name: 'Spring TP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         DRPloading_S: {
//             name: 'Spring DRP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         TPFWMC_S: {
//             name: 'Spring TP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         DRPFWMC_S: {
//             name: 'Spring DRP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         discharge_S:{
//             name: 'Spring Discharge',
//             unit: 'Million Cubic Meters',
//             series: []
//         },
//     };
//
//     this.addToFraction = function(name, year, val){
//         switch (name){
//             case this.watershed.TPloading.name:
//                 this.watershed.TPloading.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.DRPloading.name:
//                 this.watershed.DRPloading.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.TPFWMC.name:
//                 this.watershed.TPFWMC.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.DRPFWMC.name:
//                 this.watershed.DRPFWMC.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.discharge.name:
//                 this.watershed.discharge.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.TPloading_S.name:
//                 this.watershed.TPloading_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.DRPloading_S.name:
//                 this.watershed.DRPloading_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.TPFWMC_S.name:
//                 this.watershed.TPFWMC_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.DRPFWMC_S.name:
//                 this.watershed.DRPFWMC_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.discharge_S.name:
//                 this.watershed.discharge_S.series.splice(year - 2008, 0, val);
//                 break;
//             default:
//                 alert(name + ' ' + year + ' ' + val);
//         }
//     };
//
//     this.test = function (in_file, watershed) {
//         in_file.forEach(function (obj) {
//             addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//         });
//
//     d3.csv(filename, function (in_file) {
//         test(in_file)
//     }
//         in_file.forEach(function (obj) {
//             addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//         });
//     });
//     // this.prototype.my_test2 = function (){
//     //
//     // };
//
//     // this.prototype.createWatershedChart = function (eleID, name, filename, fraction, chartType, target, startingVal){
//     //     var watershed = {
//     //         name: name,
//     //         TPloading: {
//     //             name: 'Annual TP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         DRPloading: {
//     //             name: 'Annual DRP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         TPFWMC: {
//     //             name: 'Annual TP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         DRPFWMC: {
//     //             name: 'Annual DRP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         discharge:{
//     //             name: 'Annual Discharge',
//     //             unit: 'Million Cubic Meters',
//     //             series: []
//     //         },
//     //         TPloading_S: {
//     //             name: 'Spring TP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         DRPloading_S: {
//     //             name: 'Spring DRP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         TPFWMC_S: {
//     //             name: 'Spring TP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         DRPFWMC_S: {
//     //             name: 'Spring DRP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         discharge_S:{
//     //             name: 'Spring Discharge',
//     //             unit: 'Million Cubic Meters',
//     //             series: []
//     //         },
//     //         addToFraction: function(name, year, val){
//     //             switch (name){
//     //                 case this.TPloading.name:
//     //                     this.TPloading.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.DRPloading.name:
//     //                     this.DRPloading.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.TPFWMC.name:
//     //                     this.TPFWMC.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.DRPFWMC.name:
//     //                     this.DRPFWMC.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.discharge.name:
//     //                     this.discharge.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.TPloading_S.name:
//     //                     this.TPloading_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.DRPloading_S.name:
//     //                     this.DRPloading_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.TPFWMC_S.name:
//     //                     this.TPFWMC_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.DRPFWMC_S.name:
//     //                     this.DRPFWMC_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.discharge_S.name:
//     //                     this.discharge_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 default:
//     //                     alert(name + ' ' + year + ' ' + val);
//     //             }
//     //         }
//     //     };
//     //
//     //     d3.csv(filename, function (in_file) {
//     //         in_file.forEach(function (obj) {
//     //             watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//     //         });
//     //         var chart;
//     //         switch (chartType) {
//     //             case 'line':
//     //                 // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
//     //                 if (startingVal !== undefined) {
//     //                     chart = createLineChart_start(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, startingVal);
//     //                 } else {
//     //                     chart = createLineChart(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
//     //                 }
//     //                 break;
//     //             case 'column':
//     //                 // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
//     //                 chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
//     //                 break;
//     //             // case '':
//     //             //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
//     //             //     break;
//     //         }
//     //
//     //         if (target) {
//     //             addTargetLine(chart, target, 'line');
//     //         }
//     //
//     //
//     //         Highcharts.addEvent(chart, 'click', function () {
//     //             var ch = this;
//     //             setTimeout(function () {
//     //                 ch.exportChart({
//     //                     type: 'image/png',
//     //                     filename: watershed.name + '_' + watershed[fraction].name,
//     //                     options: {
//     //                         backgroundColor: '#9E9E9E'
//     //
//     //                     }
//     //                 });
//     //             }, 1);
//     //         });
//     //     });
//     // };
//
// }

// BA_ES.prototype.createWatershedChart = function (eleID, name, filename, fraction, chartType, target, startingVal){
//     // var watershed = {
//     //     name: name,
//     //     TPloading: {
//     //         name: 'Annual TP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     DRPloading: {
//     //         name: 'Annual DRP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     TPFWMC: {
//     //         name: 'Annual TP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     DRPFWMC: {
//     //         name: 'Annual DRP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     discharge:{
//     //         name: 'Annual Discharge',
//     //         unit: 'Million Cubic Meters',
//     //         series: []
//     //     },
//     //     TPloading_S: {
//     //         name: 'Spring TP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     DRPloading_S: {
//     //         name: 'Spring DRP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     TPFWMC_S: {
//     //         name: 'Spring TP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     DRPFWMC_S: {
//     //         name: 'Spring DRP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     discharge_S:{
//     //         name: 'Spring Discharge',
//     //         unit: 'Million Cubic Meters',
//     //         series: []
//     //     },
//     //     addToFraction: function(name, year, val){
//     //         switch (name){
//     //             case this.TPloading.name:
//     //                 this.TPloading.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.DRPloading.name:
//     //                 this.DRPloading.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.TPFWMC.name:
//     //                 this.TPFWMC.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.DRPFWMC.name:
//     //                 this.DRPFWMC.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.discharge.name:
//     //                 this.discharge.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.TPloading_S.name:
//     //                 this.TPloading_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.DRPloading_S.name:
//     //                 this.DRPloading_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.TPFWMC_S.name:
//     //                 this.TPFWMC_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.DRPFWMC_S.name:
//     //                 this.DRPFWMC_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.discharge_S.name:
//     //                 this.discharge_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             default:
//     //                 alert(name + ' ' + year + ' ' + val);
//     //         }
//     //     }
//     // };
//     //
//     // d3.csv(filename, function (in_file) {
//     //     in_file.forEach(function (obj) {
//     //         watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//     //     });
//         var chart;
//         switch (chartType) {
//             case 'line':
//                 // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
//                 if (startingVal !== undefined) {
//                     chart = createLineChart_start(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7, startingVal);
//                 } else {
//                     chart = createLineChart(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7);
//                 }
//                 break;
//             case 'column':
//                 // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
//                 chart = createColumnChart2(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7);
//                 break;
//             // case '':
//             //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
//             //     break;
//         }
//
//         if (target) {
//             addTargetLine(chart, target, 'line');
//         }
//
//
//         Highcharts.addEvent(chart, 'click', function () {
//             var ch = this;
//             setTimeout(function () {
//                 ch.exportChart({
//                     type: 'image/png',
//                     filename: watershed.name + '_' + watershed[fraction].name,
//                     options: {
//                         backgroundColor: '#9E9E9E'
//
//                     }
//                 });
//             }, 1);
//         });
//     // });
// };


function createWatershedChart(eleID, name, filename, fraction, chartType, target, startingVal){
    var watershed = {
        name: name,
        TPloading: {
            name: 'Annual TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        DRPloading: {
            name: 'Annual DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC: {
            name: 'Annual TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC: {
            name: 'Annual DRP FWMC',
            unit: 'mg/L',
            series: []
        },
        discharge:{
            name: 'Annual Discharge',
            unit: 'Million Cubic Meters',
            series: []
        },
        TPloading_S: {
            name: 'Spring TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        DRPloading_S: {
            name: 'Spring DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC_S: {
            name: 'Spring TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC_S: {
            name: 'Spring DRP FWMC',
            unit: 'mg/L',
            series: []
        },
        discharge_S:{
            name: 'Spring Discharge',
            unit: 'Million Cubic Meters',
            series: []
        },
        addToFraction: function(name, year, val){
            switch (name){
                case this.TPloading.name:
                    this.TPloading.series.splice(year - 2008, 0, (val));
                    break;
                case this.DRPloading.name:
                    this.DRPloading.series.splice(year - 2008, 0, (val));
                    break;
                case this.TPFWMC.name:
                    this.TPFWMC.series.splice(year - 2008, 0, (val));
                    break;
                case this.DRPFWMC.name:
                    this.DRPFWMC.series.splice(year - 2008, 0, (val));
                    break;
                case this.discharge.name:
                    this.discharge.series.splice(year - 2008, 0, (val));
                    break;
                case this.TPloading_S.name:
                    this.TPloading_S.series.splice(year - 2008, 0, val);
                    break;
                case this.DRPloading_S.name:
                    this.DRPloading_S.series.splice(year - 2008, 0, val);
                    break;
                case this.TPFWMC_S.name:
                    this.TPFWMC_S.series.splice(year - 2008, 0, val);
                    break;
                case this.DRPFWMC_S.name:
                    this.DRPFWMC_S.series.splice(year - 2008, 0, val);
                    break;
                case this.discharge_S.name:
                    this.discharge_S.series.splice(year - 2008, 0, val);
                    break;
                default:
                    alert(name + ' ' + year + ' ' + val);
            }
        }
    };

    d3.csv(filename, function (in_file){
        in_file.forEach(function (obj){
            watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
        });
        var chart;
        switch (chartType) {
            case 'line':
                // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
                if(startingVal!==undefined){
                    chart = createLineChart_start(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, startingVal);
                }else{
                    chart = createLineChart(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
                }
                break;
            case 'column':
                // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
                chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
                break;
            // case '':
            //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
            //     break;
        };
        if(target){
            addTargetLine(chart, target, 'line');
        }


        // Highcharts.addEvent(chart, 'click', function(){
        //     var ch = this;
        //     setTimeout(function(){
        //         ch.exportChart({
        //             type: 'image/png',
        //             filename: watershed.name + '_' + watershed[fraction].name,
        //             options: {
        //                                            backgroundColor: '#9E9E9E'
        //
        //             }
        //         });
        //     },1);
        // });
        // chart.exportChart({
        //     type: 'image/png',
        //     filename: watershed.name + '_' + watershed[fraction].name
        // });
        // chart.exportChart({
        //     type: 'image/svg+xml',
        //     filename: watershed.name + '_' + watershed[fraction].name
        // })
    });
}

function createLineChartOption(data, dataName, eleId, title, yAxisText, color) {
    var options = {
        chart: {
            renderTo: eleId,
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: title
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: yAxisText
            }
        },
        series: {
            data: data,
            name: dataName,
            color: color
        }
    };
    return options;
};

function createLineChart(eleId, w_name, data, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'line',
            width: chart_width,
            height: chart_height,
            // backgroundColor: '#00ff00'
        },
        title: {
            text: w_name + " River " + data.name
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis,
            title: {
                text: 'Year'
            },
            // lineColor: '#ff0000'
        },
        yAxis: {
            title: {
                text: data.name + ' (' + data.unit + ')'
            },
            // lineColor: '#ff0000',
            lineWidth: 2
        },
        series: [{
            name: data.name,
            unit: data.unit,
            data: data.series,
            color: color
        }]
    });
};

function createLineChart_start(eleId, w_name, data, color, start) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'line',
            width: chart_width,
            height: chart_height
        },
        title: {
            text: w_name + " River " + data.name
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis,
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            min: start,
            title: {
                text: data.name + ' (' + data.unit + ')'
            }
        },
        series: [{
            name: data.name,
            unit: data.unit,
            data: data.series,
            color: color
        }]
    });
};

function createColumnChart(eleId, data, dataName, unit, title, yAxisText, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'column',
        },
        title: {
            text: title
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: yAxisText
            }
        },
        series: [{
            name: dataName,
            unit: unit,
            data: data,
            color: color
        }]
    });
};

function createColumnChart2(eleId, w_name, data, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'column',
            width: chart_width,
            height: chart_height
        },
        title: {
            text: w_name + " River " + data.name
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis,
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            title: {
                text: data.name + ' (' + data.unit + ')'
            }
        },
        plotOptions: {
            series: {
                allowPointSelect: true
            }
        },
        series: [{
            name: data.name,
            unit: data.unit,
            data: data.series,
            color: color
        }]
    });
};

function createTargetSeries(val){
    s = [];
    xAxis.map(function(){
        s.push(val)
    });
    return s;
};

function addTargetLine(chart, target){
    chart.addSeries({
        type: 'line',
        data: createTargetSeries(target),
        name: 'Target',
        color: ColorPicker.target_red,
        lineWidth: 1,
        marker:{
            radius: 0
        },
    })
};

function createCompositeChart(){

};

function setChartTheme(){
    Highcharts.theme = {
        chart:{
            xAxis: {
                categories: xAxis,
                // title: {
                //     text: 'Year'
                // },
                lineColor: '#ff0000'
            },

        },
        // colors: ['#1c2d5a', '#afdfe4', '#7eb4d2', '#7ed3f7', '#188ccc', '#00b0e6', '#1b75ba'],
        // chart: {
        //     backgroundColor: {
        //         linearGradient: [0, 0, 500, 500],
        //         stops: [
        //             [0, 'rgb(255, 255, 255)'],
        //             [1, 'rgb(240, 240, 255)']
        //         ]
        //     },
        // },
        // title: {
        //     style: {
        //         fontFamily: 'Lato, sans-serif'
        //     }
        // },
        // subtitle: {
        //     style: {
        //         fontFamily: 'Lato, sans-serif'
        //     }
        // },
        //
        // legend: {
        //     itemStyle: {
        //         font: 'Lato, sans-serif',
        //         color: 'black'
        //     },
        //     itemHoverStyle:{
        //         color: 'gray'
        //     }
        // },
        lang: {
            numericSymbols: null, //otherwise by default ['k', 'M', 'G', 'T', 'P', 'E']
            thousandsSep: ','
        }
    };
    // Apply the theme
    // Highcharts.setOptions(Highcharts.theme);
    Highcharts.setOptions({
        chart:{
            style: {
                fontFamily: 'Montserrat, sans-serif'
            },
            xAxis: {
                categories: xAxis,
                    // title: {
                    //     text: 'Year'
                    // },
                    lineColor: '#ff0000'
            },
        },
        lang: {
            numericSymbols: null,
            thousandsSep: ','
        }
    })
};




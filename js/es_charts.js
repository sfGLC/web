var xAxis = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
var chart_width = 800;
var chart_height = 400;

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

function createWatershedChart(eleID, name, filename, fraction, chartType, target){
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
            name: 'Spring TP Loads',
            unit: 'Metric Tons',
            series: []
        },
        DRPloading_S: {
            name: 'Spring DRP Loads',
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
                chart = createLineChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
                break;
            case 'column':
                // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
                chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
                break;
            case 'column2':
                chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
                break;
        };
        if(target){
            addTargetLine(chart, target, 'line');
        }
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

function createLineChart(eleId, data, dataName, unit, title, yAxisText, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'line',
            width: chart_width,
            height: chart_height
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

function createLineChart2(eleId, w_name, data, color) {
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
            categories: xAxis
        },
        yAxis: {
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
            categories: xAxis
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
        color: ColorPicker.red1,
        lineWidth: 1,
        marker:{
            radius: 2
        },
    })
};

function createCompositeChart(){

};

function setChartTheme(){
    Highcharts.theme = {
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
        title: {
            style: {
                fontFamily: 'Lato, sans-serif'
            }
        },
        subtitle: {
            style: {
                fontFamily: 'Lato, sans-serif'
            }
        },

        legend: {
            itemStyle: {
                font: 'Lato, sans-serif',
                color: 'black'
            },
            itemHoverStyle:{
                color: 'gray'
            }
        }
    };
    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
};




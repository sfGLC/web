var xAxis = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];

function createOptions(chartDiv, style, title, yAxisText, dataSeries){
    return {
        chart: {
            renderTo: chartDiv,
            defaultSeriesType: style,
            style: {
                fontFamily: 'Lato, sans-serif'
            }
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
        series: dataSeries
    }
}

// Highcharts.setOptions(
//     {
//         chart: {
//             style: {
//                 fontFamily: 'Lato, sans-serif'
//             }
//         }
//     }
// );

function createChart(attributes, fieldName, targetName, chartDiv, style, targetType, title, displayName, yAxisText, dataColor, targetColor) {
    var data = [];
    var dataSeries = [];
    var options;
    if (attributes[fieldName]) {
        attributes[fieldName].split(',').forEach(function (d) {
            data.push(parseFloat(d));
        })
        dataSeries.push({
            name: displayName,
            data: data,
            color: dataColor
        });
        if (attributes[targetName]) {
            var target = [];
            xAxis.forEach(function () {
                target.push(parseFloat(attributes[targetName]));
            });
            dataSeries.push(
                {
                    type: targetType,
                    name: 'Target',
                    data: target,
                    color: targetColor

                });
        }
        options = createOptions(chartDiv, style, title, yAxisText, dataSeries)
    }
    else {
        data = null;
        options = createOptions(chartDiv, style, title + " (Not Available)", yAxisText, null)
    }
    new Highcharts.Chart(options);
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

function createColumnChart2(eleId, data, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'column',
        },
        title: {
            text: data.name
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: data.name
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
        data: createTargetSeries(target),
        name: 'Target',
        color: ColorPicker.red1,
        lineWidth: 1,
        marker:{
            radius: 2
        },
        type: 'line'
    })
}

function createCompositeChart(){

};

function setChartTheme(){
    Highcharts.theme = {
        colors: ['#1c2d5a', '#afdfe4', '#7eb4d2', '#7ed3f7', '#188ccc', '#00b0e6', '#1b75ba'],
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
}




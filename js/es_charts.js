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

function createLineChart(){

};

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


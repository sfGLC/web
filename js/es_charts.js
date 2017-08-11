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

}
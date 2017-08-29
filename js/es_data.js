// function calculateFieldset(line) {
//     switch (line.FIELD_SET) {
//         case "Loads":
//             return "loads";
//         case "Unit Area Loads":
//             return "ual";
//         case "Flow-weighted mean concentrations":
//             return "flowWeighted";
//         case "Time-weighted mean concentrations":
//             return "timeWeighted";
//         case "Spring Loads":
//             return "springLoads";
//         case "Spring Flow-weighted mean concentrations":
//             return "springFlow";
//     }
// };
//
// var watershedSet = [];
//
// function Loader(d){
//     // this.watershedSet = [];
//     // var dateFormat = d3.time.format("%Y").parse;
//     // var numberFormat = d3.format(".4f");
//     // $.ajax({
//     //     type: "GET",
//     //     url: "data/NCWQR Lake Erie tribs_GLC_031617_sample_4_Siyu_input.csv",
//     //     dataType: "text",
//     //     success: function(data) {
//     //         dat2 = $.csv.toArrays(data);}
//     // });
//     var data;
//
//     d3.csv(d, function (in_file) {
//         in_file.forEach(function (d) {
//             d.Year = parseInt(d.Year);
//             d.riverField = d.River + ":" + d.FIELD_SET;
//             if (d.NOS == "") {
//                 d.NOS = 0;
//             }
//             if (d.Discharge == "") {
//                 d.Discharge = 0;
//             }
//             if (d.TN == "") {
//                 d.TN = 0;
//             }
//             if (d.PTN == "") {
//                 d.PTN = 0;
//             }
//             if (d.TPP == "") {
//                 d.TPP = 0;
//             }
//             if (d.PP == "") {
//                 d.PP = 0;
//             }
//             d.fieldset = calculateFieldset(d);
//         });
//
//         in_file.map(function (obj) {
//             var existednames = Loader.prototype.getWatershedNames();
//             if (existednames.includes(obj.River)) {
//                 var watershed = Loader.prototype.getWatershedByName(obj.River);
//                 watershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 watershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//             } else {
//                 var newWatershed = new WatershedObj(obj.River);
//                 newWatershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 newWatershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//                 watershedSet.push(newWatershed);
//             }
//         });
//     });
//
//     return data;
// };
//
// // loader.prototype.init = function (){
// //     d3.csv("data/NCWQR Lake Erie tribs_GLC_031617_sample_4_Siyu_input.csv", function (in_file) {
// //         in_file.forEach(function (d) {
// //             d.Year = dateFormat(d.Year).getFullYear();
// //             d.riverField = d.River + ":" + d.FIELD_SET;
// //             if (d.NOS == "") {
// //                 d.NOS = 0;
// //             }
// //             if (d.Discharge == "") {
// //                 d.Discharge = 0;
// //             }
// //             if (d.TN == "") {
// //                 d.TN = 0;
// //             }
// //             if (d.PTN == "") {
// //                 d.PTN = 0;
// //             }
// //             if (d.TPP == "") {
// //                 d.TPP = 0;
// //             }
// //             if (d.PP == "") {
// //                 d.PP = 0;
// //             }
// //             d.fieldset = calculateFieldset(d);
// //         });
// //
// //         // var RaisinSeries = new WatershedObj("Raisin");
// //         // var MaumeeSeries = new WatershedObj("Maumee");
// //         // var PortageSeries = new WatershedObj("Portage");
// //
// //
// //         in_file.map(function (obj) {
// //             var existednames = getWatershedNames();
// //             if (existednames.includes(obj.River)) {
// //                 var watershed = getWatershed(obj.River);
// //                 watershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
// //                 watershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
// //             } else {
// //                 var newWatershed = new WatershedObj(obj.River);
// //                 newWatershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
// //                 newWatershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
// //                 this.watershedSet.push(newWatershed);
// //             }
// //
// //             // if (obj.River == "Raisin") {
// //             //     //RaisinSeries[obj.fieldset].TP.push(obj.TP);
// //             //     //RaisinSeries[obj.fieldset].DRP.push(obj.DRP);
// //             //
// //             //     RaisinSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
// //             //     RaisinSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
// //             // } else if (obj.River == "Maumee") {
// //             //     MaumeeSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
// //             //     MaumeeSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
// //             // } else {
// //             //     PortageSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
// //             //     PortageSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
// //             // }
// //         });
// //
// //         // var innerHTML = "";
// //         // for (var i = 0; i < watershedSet.length; i++) {
// //         //     innerHTML += '<button type="button" class="watershed-buttons">' + watershedSet[i].name + '</button>';
// //         // }
// //         // $("#watershed-selection").html(innerHTML);
// //
// //         // return watershedSet;
// //     });
// // };
//
// Loader.prototype.getWatershedsData = function (){
//     return watershedSet;
// }
//
// Loader.prototype.getWatershedByName = function(name){
//     for (var i = 0; i < watershedSet.length; i++) {
//         if (watershedSet[i].name === name)
//             return watershedSet[i];
//     }
//     return null;
// };
//
// Loader.prototype.getWatershedNames = function() {
//     var names = [];
//     if(watershedSet.length > 0){
//         watershedSet.forEach(function (d) {
//             names.push(d.name);
//         });
//     }
//     return names;
// };
//
//
// function WatershedObj(name) {
//     this.name = name;
//     this.loads = {
//         TP: [],
//         DRP: []
//     };
//     this.ual = {
//         TP: [],
//         DRP: []
//     };
//     this.flowWeighted = {
//         TP: [],
//         DRP: []
//     };
//     this.timeWeighted = {
//         TP: [],
//         DRP: []
//     };
//     this.springLoads = {
//         TP: [],
//         DRP: []
//     };
//     this.springFlow = {
//         TP: [],
//         DRP: []
//     };
// };
// // var watershedSet = [];
//
// function getWatershed(name) {
//     for (var i = 0; i < watershedSet.length; i++) {
//         if (watershedSet[i].name == name)
//             return watershedSet[i];
//     }
//     return null;
// };
//
//
// function createOptions(container, title, xAxis, yAxisTitle, series) {
//     return {
//         chart: {
//             renderTo: container,
//             defaultSeriesType: 'line'
//         },
//         title: {
//             text: title
//         },
//         xAxis: {
//             categories: xAxis
//         },
//         yAxis: {
//             title: {
//                 text: yAxisTitle
//             }
//         },
//         series: series
//     }
// }
//
//
// function addTP(river, fieldset, newVal) {
//     river[fieldset].TP.push(numberFormat(newVal));
// };
// function addDRP(river, fieldset, newVal) {
//     river[fieldset].DRP.push(numberFormat(newVal));
// }



// var dataSeries = [];
// function init(){
//     d3.csv("data/NCWQR Lake Erie tribs_GLC_031617_sample_4_Siyu_input.csv", function (in_file) {
//         in_file.forEach(function (d) {
//             d.Year = dateFormat(d.Year).getFullYear();
//             d.riverField = d.River + ":" + d.FIELD_SET;
//             if (d.NOS == "") {
//                 d.NOS = 0;
//             }
//             if (d.Discharge == "") {
//                 d.Discharge = 0;
//             }
//             if (d.TN == "") {
//                 d.TN = 0;
//             }
//             if (d.PTN == "") {
//                 d.PTN = 0;
//             }
//             if (d.TPP == "") {
//                 d.TPP = 0;
//             }
//             if (d.PP == "") {
//                 d.PP = 0;
//             }
//             d.fieldset = calculateFieldset(d);
//         });
//
//         var RaisinSeries = new WatershedObj("Raisin");
//         var MaumeeSeries = new WatershedObj("Maumee");
//         var PortageSeries = new WatershedObj("Portage");
//
//
//         in_file.map(function (obj) {
//             var existednames = getWatershedNames();
//             if (existednames.includes(obj.River)) {
//                 var watershed = getWatershed(obj.River);
//                 watershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 watershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//             } else {
//                 var newWatershed = new watershedObj(obj.River);
//                 newWatershed[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 newWatershed[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//                 watershedSet.push(newWatershed);
//             }
//
//             if (obj.River == "Raisin") {
//                 //RaisinSeries[obj.fieldset].TP.push(obj.TP);
//                 //RaisinSeries[obj.fieldset].DRP.push(obj.DRP);
//
//                 RaisinSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 RaisinSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//             } else if (obj.River == "Maumee") {
//                 MaumeeSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 MaumeeSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//             } else {
//                 PortageSeries[obj.fieldset].TP.splice(obj.Year - 2008, 0, parseFloat(obj.TP));
//                 PortageSeries[obj.fieldset].DRP.splice(obj.Year - 2008, 0, parseFloat(obj.DRP));
//             }
//         });
//
//         // var innerHTML = "";
//         // for (var i = 0; i < watershedSet.length; i++) {
//         //     innerHTML += '<button type="button" class="watershed-buttons">' + watershedSet[i].name + '</button>';
//         // }
//         // $("#watershed-selection").html(innerHTML);
//
//         return watershedSet;
//     });
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
                    this.TPloading.series.splice(year - 2008, 0, val);
                    break;
                case this.DRPloading.name:
                    this.DRPloading.series.splice(year - 2008, 0, val);
                    break;
                case this.TPFWMC.name:
                    this.TPFWMC.series.splice(year - 2008, 0, val);
                    break;
                case this.DRPFWMC.name:
                    this.DRPFWMC.series.splice(year - 2008, 0, val);
                    break;
                case this.discharge.name:
                    this.discharge.series.splice(year - 2008, 0, val);
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
                    this.DRPFWMC.series.splice(year - 2008, 0, val);
                    break;
                case this.discharge_S.name:
                    this.discharge.series.splice(year - 2008, 0, val);
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
                chart = createLineChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue1);
                break;
            case 'column':
                // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
                chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue2);
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
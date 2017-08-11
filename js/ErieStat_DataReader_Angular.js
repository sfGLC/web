/**
 * Created by sfan on 7/13/2017.
 */
var app = angular.module('erieStatApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
}]);

app.factory('dataReaderFactory', function(){
    var factory = {};


    factory.loadWatersheds = function (){
        var watersheds = [];
        d3.csv('data/NCWQR Lake Erie tribs_GLC_031617_sample_4_Siyu_input.csv', function (csv_file){
            csv_file.map(function(line){
                if ( ! watersheds[line.River]){
                    watersheds.push(createWatershed(line.River));
                }else {
                    watersheds[line.River][line.FIELD_SET].TP.splice(line.Year - 2008, 0, line.TP)
                    watersheds[line.River][line.FIELD_SET].DRP.splice(line.Year - 2008, 0, line.DRP)
                }
            })

        });
        return watersheds;
    } ;

    function createWatershed(name){
        return {
            name:name,
            loads : {
                TP: [],
                DRP: []
            },
            ual : {
                TP: [],
                DRP: []
            },
            flowWeighted : {
                TP: [],
                DRP: []
            },
            timeWeighted : {
                TP: [],
                DRP: []
            },
            springLoads : {
                TP: [],
                DRP: []
            },
            springFlow : {
                TP: [],
                DRP: []
            }
        };
    }

    function getWatershed(name) {
        for (var i = 0; i < watershedSet.length; i++) {
            if (watershedSet[i].name == name)
                return watershedSet[i];
        }
        return null;
    };



    factory.getAllData = function (){
        function watershedObj(name) {
            this.name = name;
            this.loads = {
                TP: [],
                DRP: []
            };
            this.ual = {
                TP: [],
                DRP: []
            };
            this.flowWeighted = {
                TP: [],
                DRP: []
            };
            this.timeWeighted = {
                TP: [],
                DRP: []
            };
            this.springLoads = {
                TP: [],
                DRP: []
            };
            this.springFlow = {
                TP: [],
                DRP: []
            };
        };
        function getWatershed(name) {
            for (var i = 0; i < watershedSet.length; i++) {
                if (watershedSet[i].name == name)
                    return watershedSet[i];
            }
            return null;
        };
        function getWatershedNames() {
            var names = [];
            watershedSet.forEach(function (d) {
                names.push(d.name);
            });
            return names;
        }
        d3.csv()
        return watersheds;
    };


    return factory;
});
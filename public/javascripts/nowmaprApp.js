"use strict";
angular.module('nowmaprApp', ['uiGmapgoogle-maps'])
    
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCW1as5vFGFMHEPJhnUKVdLl7-SYA_1SZE',
        v: '3.23',
        libraries: 'weather,geometry,visualization,places'
    });
})

.controller('displayEvents', function($scope, uiGmapGoogleMapApi, uiGmapIsReady, nowmaprServices) {
   
    var areaLat = 45.422503;
    var areaLng = -75.691284;
    var areaZoom = 13;
    
    $scope.myCurrentLocation = {};
    
    nowmaprServices.getCurrentLocation()
    
    .then(function(myCurrentLocation){
        console.log('myCurrentLocation',myCurrentLocation);
        $scope.myCurrentLocation = myCurrentLocation;
    })
    .then(function(){return uiGmapGoogleMapApi})
    .then(function(maps){
        console.log('maps',maps);
        $scope.googlemap = {};
        $scope.map = {
            center: {
                latitude: areaLat,
                longitude: areaLng
            },
            zoom: areaZoom,
            pan: 1,
            options: nowmaprServices.getMapOptions().mapOptions,
            control: {},
            events: {
                tilesloaded: function(maps, eventName, args) {
                    console.log('The ' + eventName + 'function fires every time you move or zoom the map.');
                },
                dragend: function(maps, eventName, args) {
                    console.log('The ' + eventName + 'function fires every time you drag the map.');
                },
                zoom_changed: function(maps, eventName, args) {
                    console.log('The ' + eventName + 'function fires every time you zoom.');
                }
            },
            showTraficLayer: true
        };
        
        $scope.windowOptions = {
            show: false
        };
        
        $scope.map.center = $scope.myCurrentLocation;
        console.log('maps',maps.LatLngBounds);
        console.log('function i want to run ONCE after initial map load...');
        
        uiGmapIsReady.promise() //If no value is put in promise(1)
        .then(function (instances) {
            console.log(instances[0].map); //Get the current map
        })
        .then(function() {
            //Add function on Gmap ready that puts click actions on event markers
            //$scope.addEventClickFunction($scope.evtMarkers);
        });
        
        $scope.usrMrk = [{
            id: 0,
            coords: {
                latitude: $scope.myCurrentLocation.latitude,
                longitude: $scope.myCurrentLocation.longitude
            },
            data: 'myLocation'
        }];
        
    });
})

.service('nowmaprServices', function($http, $q, uiGmapGoogleMapApi) {
    /* Function to return map options - used in $scope.map in controller */
    this.getMapOptions = function(){
        return{
            mapOptions: {
                minZoom: 3,
                zoomControl: true,
                draggable: true,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDoubleClickZoom: false,
                keyboardShortcuts: false,
                styles: [{
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility:"off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }],
            }
        };
    };
    
    this.getCurrentLocation = function(){
        var deferred = $q.defer();
        
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('position.coords :', position.coords);
            var myCurrentLocation = {
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            };
            
            deferred.resolve(myCurrentLocation);
        });
        
        return deferred.promise;
    };
});
   
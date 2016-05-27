"use strict";
angular.module('nowmaprApp', ['uiGmapgoogle-maps'])
    
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCW1as5vFGFMHEPJhnUKVdLl7-SYA_1SZE',
        v: '3.23',
        libraries: 'weather,geometry,visualization,places'
    });
})

.controller('displayEvents', function($scope, uiGmapGoogleMapApi) {
    var areaLat = 45.422503;
    var areaLng = -75.691284;
    var areaZoom = 13;
    
    uiGmapGoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;
        $scope.map = {
            center: {
                latitude: areaLat,
                longitude: areaLng
            },
            zoom: areaZoom,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: true
            },
            showTraficLayer: true
        };
        console.log($scope.map);
        $scope.isOffline = false;
    });
});

/*
.factory('myCoordinates', ['$q', '$http', function myCoordinates($q, $http) {
    var deferred = $q.defer();

    $http.get('http://ip-api.com/json')
        .success(function(coordinates) {
            var myCoordinates = {};
            myCoordinates.lat = coordinates.lat;
            myCoordinates.lng = coordinates.lon;
            myCoordinates.city = coordinates.city;
            deferred.resolve(myCoordinates);
        });
        
    return deferred.promise;
}]);
*/
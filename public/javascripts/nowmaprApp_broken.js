//Declare the initial angular module "nowmaprApp". Module grabs other controllers and services.
var app = angular.module('nowmaprApp', ['ngRoute', 'uiGmapgoogle-maps', 'displayEvents', 'geolocation']);

app.factory('myCoordinates', ['$q', '$http', function myCoordinates($q, $http) {
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

app.config(function($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
    .when('/', {
        controller: 'displayEvents',
        templateUrl: 'views/index.ejs',
        resolve: {
            coordinates: function (myCoordinates) {
                return myCoordinates;
            }
        }
    });
    
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCW1as5vFGFMHEPJhnUKVdLl7-SYA_1SZE',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
});

app.controller('displayEvents', ['$scope', 'coordinates', 'myCoordinates', function($scope, uiGmapGoogleMapApi, coordinates, myCoordinates) {
    $scope.map = {
        center: {
            latitude: coordinates.lat,
            longitude: coordinates.lng  
        },
        zoom: 13
    };
    
    uiGmapGoogleMapApi.then(function(maps) {
        
    });
}]);
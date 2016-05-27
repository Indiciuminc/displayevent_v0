//Creates the displayEvents Module and Controller. Note that it depends on 'geolocation' module and service
app.controller('displayEvents', [$scope, 'coordinates', 'myCoordinates', function($scope, coordinates, myCoordinates) {
    $scope.map = {
        center: {
            lat: coordinates.lat,
            lng: coordinates.lng
        },
        zoom: 13
    };
}]);

/*
var displayEvents = angular.module('displayEvents', ['geolocation']);
displayEvents.controller('displayEvents', function($scope, $http, geolocation) {
    //Initialize variables
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var lng = 0;
    
    //Set initial coordinates
    $scope.formData.latitude = 45.403071;
    $scope.formData.longitude = -75.688323;
    
    //Functions
    
});
*/
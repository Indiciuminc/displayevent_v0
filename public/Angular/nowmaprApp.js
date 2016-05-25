//geoLocation Service
var geolocation = function () {
    var getPosition = function(cbSuccess, cbError, cbNoGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
        } else {
            cbNoGeo();
        }
    };
    return {
        getPosition : getPosition
    };
};

//nowmaprData Service
var nowmaprData = function ($http) {
    var locationByCoords = function(lat, lng) {
        return $http.get('/api?lng=' + lng + '&lat=' + lat + '&maxDistance=5');
    };
    return {
        locationByCoords : locationByCoords
    };
      
};

//Locations map controller
var myLocationsCtrl = function($scope, nowmaprData, geolocation) {
    $scope.message = "Checking your location";
    $scope.getData = function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        $scope.message = "Searching for nearby events";
        nowmaprData.locationByCoords(lat, lng)
            .success(function(data) {
                $scope.message = data.length > 0 ? "" : "No locations found";
                $scope.data = {locations : data};
            })
            .error(function(e) {
                $scope.message = "Sorry, something's gone wrong";
            });
    };
    
    $scope.showError = function (error) {
        $scope.$apply(function() {
            $scope.message = error.message;
        });
    };
    
    $scope.noGeo = function() {
        $scope.$apply(function() {
            $scope.message = "Geolocation not supported by this browser.";
        });
    };
    
    geolocation.getPosition($scope.getData, $scope.showError, $scope.noGeo);
    
    //Scope data pulls locations from nowMaprData service
    //$scope.data = { locations: nowmaprData };
    $scope.nmJson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {
                "name": "Barbara Ann Scott: Come Skate With Me",
                "address": "110 Laurier Ave. W, Ottawa, ON K1P 1J1",
                "eventType": "Community",
                "details": "What happens when you combine cold outdoor skating rinks, long practice sessions and a determined young woman? Barbara Ann Scott Olympic Gold Medalist and world record holder! Come visit this exciting new exhibit about Ottawa-born figure skating champion Barbara Ann Scott."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.692043, 45.421254]
            }
        },{
            "type": "Feature",
            "properties": {
                "name": "Ottawa Race Weekend",
                "address": "110 Laurier Ave. W, Ottawa, ON K1P 1J1",
                "eventType": "Sports and Rec",
                "details": "Biggest NCR Road Race! 5k, 10k, Half and Full Marathon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.692987, 45.421105]
            }
        }]
    };
};

//Angular module setter for Nowmapr application
angular
   .module('myNowmapr')
   .controller('myLocationsCtrl', myLocationsCtrl)
   .service('nowmaprData', nowmaprData)
   .service('geolocation', geolocation);
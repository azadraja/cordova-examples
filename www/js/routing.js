
var myApp = angular.module('myApp');

myApp.config(function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl : 'pages/accl.html'
  })
  .when('/camera', {
    templateUrl : 'pages/camera.html'
  })
  .when('/gps', {
    templateUrl : 'pages/gps.html'
  })
  .otherwise({redirectTo: '/'});
});
$locationProvider.html5Mode(true);

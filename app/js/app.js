'use strict()';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
      'ngRoute', 'ngAnimate'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'partials/splash.html', controller: 'HomeCtrl' });
      $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
      $routeProvider.when('/city-under-one-roof', {templateUrl: 'partials/home.html', controller: 'CityCtrl' });
      $routeProvider.when('/fool-and-the-world', {templateUrl: 'partials/home.html', controller: 'FoolCtrl' });
      $routeProvider.when('/home-and-away', {templateUrl: 'partials/home.html', controller: 'AwayCtrl' });
      $routeProvider.otherwise({redirectTo: '/'});
    }]);

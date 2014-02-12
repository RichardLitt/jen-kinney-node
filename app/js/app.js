'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
      'ngRoute', 'ngAnimate'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl' });
      $routeProvider.when('/cv', {templateUrl: 'partials/cv.html'});
      $routeProvider.when('/biography', {templateUrl: 'partials/bio.html'});
      $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
      $routeProvider.when('/city-under-one-roof', {templateUrl: 'partials/home.html', controller: 'CityCtrl' });
      $routeProvider.when('/fool-and-the-world', {templateUrl: 'partials/home.html', controller: 'FoolCtrl' });
      $routeProvider.otherwise({redirectTo: '/'});
    }]);

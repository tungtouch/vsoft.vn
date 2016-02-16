'use strict';

angular.module('webbellvnApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

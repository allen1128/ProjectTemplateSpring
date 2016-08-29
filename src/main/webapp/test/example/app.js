var app = angular.module('plunker', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'home.tpl.html',
    controller: 'MainCtrl'
  })
  .otherwise({ redirectTo:'/home' });
});


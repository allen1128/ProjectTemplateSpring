var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller:'registrationController'
		}).
		when('/register', {
			templateUrl: 'views/registration.html',
			controller:'registrationController'
		}).
		when('/success', {
			templateUrl: 'views/success.html',
			controller:'successController'
		}).
		otherwise({
			redirectTo:'/login'	
		});
}]);
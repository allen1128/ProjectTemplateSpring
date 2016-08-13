var myApp = angular.module("myApp", ['ngRoute', 'firebase'])
			.constant('FIREBASE_URL', 'https://practiceangular-99c54.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html', 
			controller:'registrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
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
var myApp = angular.module("myApp", ['ngRoute', 'firebase']);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
		if (error === 'AUTH_REQUIRED') {
			$rootScope.message = "Sorry, you must login to access that page";
			$location.path('/login');
		}
	});
}]); 

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'registrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'registrationController'
		}).
		when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'meetingsController',
			resolve: {
				currentAuth: function(authentication) {
					return authentication.requireAuth();
				}
			}
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);
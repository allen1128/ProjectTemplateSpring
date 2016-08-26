var myApp = angular.module("myApp", ['ngRoute', 'firebase']);

myApp.run(['$rootScope', function($rootScope) {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			var userRef = firebase.database().ref('users/' + user.uid);
			var uid = user.uid;
			userRef.once('value').then(function(user) {
				$rootScope.$apply(function(){
					$rootScope.currentUser = user.val();
					$rootScope.currentUser.uid = uid;
				});
			});
			$rootScope.message = '';
			}						
		});
   }]); //run



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
		when('/checkins/:uId/:mId', {
			templateUrl: 'views/checkins.html',
			controller: 'checkInsController'
		}).
		when('/checkins/:uId/:mId/checkinslist', {
			templateUrl: 'views/checkinslist.html',
			controller: 'checkInsController'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);
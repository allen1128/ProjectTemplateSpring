myApp.controller('registrationController', ['$scope', 'authentication',
	function($scope, authentication) {
		$scope.login = function() {
			authentication.login($scope.user);
		}; // login
		$scope.register = function() {
			authentication.register($scope.user);
		}; // register
		$scope.logout = function() {
			authentication.logout();
		}; // logout
	}
]); // controller
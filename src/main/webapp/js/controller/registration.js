myApp.controller('registrationController', [ '$scope', 'authentication', 
                                             function($scope, authentication) {
	$scope.login = function() {
		authentication.login($scope.user);
	}
	$scope.register = function(){
		authentication.register($scope.user);
	} // register
} ]); // controller

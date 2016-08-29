describe('checkInsController', function() {
	var $controller;

	beforeEach(function() {
		module('myApp');
		inject(function($injector) {
			$controller = $injector.get('$controller');
		});
	});

	it('test show love function', function() {
		var $scope = {};
		var controller = $controller('checkInsController', {
			$scope : $scope
		});
		
		var myCheckIn = {
				show: false,
				userState: 'expanded'
		}
		$scope.showLove(myCheckIn);
		expect(myCheckIn.show, true);
		expect(myCheckIn.userState, '')
	});
});
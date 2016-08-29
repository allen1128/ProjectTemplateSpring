angular.module("myApp").controller('checkInsController', ['$scope', '$rootScope', '$routeParams', '$location', '$timeout',
	function($scope, $rootScope, $routeParams, $location, $timeout) {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				$scope.whichmeeting = $routeParams.mId;
				$scope.whichuser = $routeParams.uId;
				$scope.order = 'firstname';
				$scope.direction = null;
				$scope.scope = '';
				$scope.addCheckIn = function() {
					var checkIn = {
						firstname: $scope.user.firstName,
						lastname: $scope.user.lastName,
						email: $scope.user.email,
						date: firebase.database.ServerValue.TIMESTAMP
					};

					var newCheckInKey = firebase.database().ref().child('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins').push().key;
					firebase.database().ref('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins/' + newCheckInKey)
						.update(checkIn)
						.then(function() {
							$timeout(function() {
								$location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichmeeting + '/checkinslist');
							}, 0);
						});
				};

				$scope.deleteCheckIn = function(id) {
					firebase.database().ref('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins/' + id).remove();
				};

				$scope.pickRandom = function() {
					var whichRecord = Math.round(Math.random() * ($scope.filtered.length - 1));
					$scope.recordId = $scope.filtered[whichRecord].id;
				};

				$scope.giveLove = function(myCheckIn, myGift) {
					var award = {
						name: myGift,
						date: firebase.database.ServerValue.TIMESTAMP
					}
					var newAwardKey = firebase.database().ref().child('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins/' + myCheckIn.id + '/awards').push().key;
					firebase.database().ref('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins/' + myCheckIn.id + '/awards/' + newAwardKey)
						.update(award);
				};

				$scope.deleteLove = function(checkInId, giftId) {
					firebase.database().ref('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins/' + checkInId + '/awards/' + giftId)
						.remove();
				}

				var checkInsRef = firebase.database().ref('users/' + $scope.whichuser + ' /meetings/' + $scope.whichmeeting + '/checkins');
				checkInsRef.on('value', function(checkIns) {
					if (checkIns) {
						$timeout(function() {
							$scope.checkIns = checkIns.val();
							var checkInArray = []
							_.each($scope.checkIns, function(value, key) {
								var checkInItem = value;
								checkInItem.id = key;
								checkInArray.push(checkInItem);
							})

							$scope.checkIns = checkInArray;
						}, 0);
					}
				})
			}
		});


		$scope.showLove = function(myCheckIn) {
			myCheckIn.show = !myCheckIn.show;

			if (myCheckIn.userState === 'expanded') {
				myCheckIn.userState = '';
			} else {
				myCheckIn.userState = 'expanded';
			}
		};
	}
]);
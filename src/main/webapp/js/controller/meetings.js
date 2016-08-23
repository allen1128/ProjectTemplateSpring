myApp.controller('meetingsController', ['$scope', '$firebaseAuth', '$rootScope', function($scope, $firebaseAuth, $rootScope){
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$scope.addMeeting = function(){
				var meeting = {
						name: $scope.meetingName,
						date: firebase.database.ServerValue.TIMESTAMP 
				}
				var newMeetingKey = firebase.database().ref().child('users/'+ user.uid+' /meetings').push().key;
				firebase.database().ref('users/' + user.uid + '/meetings/' + newMeetingKey).update(meeting);
				$scope.meetingName = '';
			};			
			
			$scope.deleteMeeting = function(meetingKey){
				firebase.database().ref('users/' + user.uid + '/meetings/' + meetingKey).remove();
			};			

			var meetingsRef = firebase.database().ref('users/' + user.uid + '/meetings/');
			meetingsRef.on('value', function(meetings){
				$scope.meetings = meetings.val();
				$rootScope.howManyMeetings = _.size($scope.meetings);
			})
		}						
	});	
}]);

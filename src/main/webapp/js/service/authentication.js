myApp.factory('authentication', ['$rootScope', '$firebaseAuth', '$location', 'FIREBASE_URL',
	function($rootScope, $firebaseAuth, $location, firebase_url) {
		return {
			login: function(user) {
				firebase.auth().signInWithEmailAndPassword(
					user.email,
					user.password
				).then(function(){
					$location.path("/success");
				}).catch(function(error){
					$rootScope.message = error.message;
				});				
			},
			register: function(user) {
					firebase.auth().createUserWithEmailAndPassword(
						user.email,
						user.password
					).then(function(regUser) {				
						var registration = {
							date: firebase.database.ServerValue.TIMESTAMP,
							firstname: user.firstName,
							lastname: user.lastName,
							email: user.email
						}
						firebase.database().ref('users/'+regUser.uid).set(registration);
						
						$rootScope.message = 'Hi ' + user.firstName + ", Thank for registration";
					}).catch(function(error) {
						$rootScope.message = error.message;
					}); // createUser					
				} // register
		}
	}
]); // controller
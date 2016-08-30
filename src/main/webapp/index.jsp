<!doctype html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <title>Angular Data</title>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link href='https://fonts.googleapis.com/css?family=Lato:400,100,700,900' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/style.css">
  <script src="lib/angular/angular.min.js"></script>
  <script src="lib/angular-route/angular-route.min.js"></script>
  <script src="lib/angular-animate/angular-animate.min.js"></script>
  <script src="lib/underscore/underscore-min.js"></script>
    
  <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
	<script>
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyAcBFSj1G9gee5ZMFGZuP-TxH8iyE-wMf0",
	    authDomain: "practiceangular-99c54.firebaseapp.com",
	    databaseURL: "https://practiceangular-99c54.firebaseio.com",
	    storageBucket: "practiceangular-99c54.appspot.com",
	  };
	  firebase.initializeApp(config);
	  var database = firebase.database();
	</script>  
  <script src="https://cdn.firebase.com/libs/angularfire/2.0.1/angularfire.min.js"></script>    
  <script src="js/app.js"></script>
  <script src="js/service/authentication.js"></script>
  <script src="js/controller/registration.js"></script>
  <script src="js/controller/meetings.js"></script>
  <script src="js/controller/checkins.js"></script>
  
</head>
<body>
<header>
<nav class="cf" ng-include="'views/nav.html'"></nav>
</header>
<div class="page">
  <div class="userinfo" ng-show="currentUser" ng-controller="registrationController">
  	<span class="userinfo">Hi  {{ currentUser.firstname }}</span>
  	<a ng-href="#/login" ng-click="logout()">logout</a>
  </div>
  <main class="cf" ng-view>
  </main>
</div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="lib/qunit/qunit.css">
  <script src="lib/angular/angular.min.js"></script>
  <script src="lib/angular/angular-route.min.js"></script>
  <script src="lib/angular/angular-animate.min.js"></script>
  <script src="lib/angular/angular-mocks.js"></script>
  <script src="lib/jasmine/jasmine-core.js"></script>
  <script src="lib/underscore-min.js"></script>
  <script src="lib/karma-jasmine/jasmine-core.js"></script>
  <script src="lib/underscore-min.js"></script>    
    
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
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="lib/qunit/qunit.js"></script>
  <script src="test/unit/tests.js"></script>
</body>
</html>
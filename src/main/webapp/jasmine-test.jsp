<!DOCTYPE html>
<html ng-app="plunker">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS test</title>
    
    <!-- Jasmine dependencies -->
    <link rel="stylesheet" href="lib/jasmine-core/lib/jasmine-core/jasmine.css"></link>
    <script src="lib/jasmine-core/lib/jasmine-core/jasmine.js"></script>
    <script src="lib/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
    <script src="lib/jasmine-core/lib/jasmine-core/boot.js"></script>
    
    <!-- Angular dependencies -->
    <script src="lib/angular/angular.min.js"></script>
  	<script src="lib/angular-route/angular-route.min.js"></script>  
    <script src="lib/angular-mocks/angular-mocks.js"></script>    
    
    <!-- Tests + Jasmine Bootstrap -->
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
  <script src="test/unit/checkins-spec.js"></script>
  <script src="test/jasmineBootstrap.js"></script>
  </head>

  <body>
    <div ng-view></div>
    <div id="HTMLReporter" class="jasmine_html-reporter"></div>
  </body>

</html>

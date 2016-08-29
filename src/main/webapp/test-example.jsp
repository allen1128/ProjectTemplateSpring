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
  	<script src="lib/angular/angular-route.min.js"></script>  
    <script src="lib/angular-mocks/angular-mocks.js"></script>    
    
    <!-- Tests + Jasmine Bootstrap -->
    <script src="test/example/app.js"></script>
    <script src="test/example/module.js"></script>
    <script src="test/example/spec.js"></script>
    <script src="test/jasmineBootstrap.js"></script>
  </head>

  <body>
    <div ng-view></div>
    <div id="HTMLReporter" class="jasmine_html-reporter"></div>
  </body>

</html>

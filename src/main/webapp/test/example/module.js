
// Hello World Controller
app.controller('MainCtrl', ['$scope', 'LanguagesServicePromise', '$rootScope', function($scope, LanguagesServicePromise, $rootScope) {
  $scope.name = 'Hello World';
  $rootScope.$on("global.user.logged", function(event, user) {
    $scope.user = user;
  });
}]);

// Languages Service
app.factory('LanguagesService', function(){
  var lng = {}, 
    _languages = ['en', 'es', 'fr'];
  
  lng.get = function() {
    return _languages;
  }
  
  return lng;
});

app.directive('myProfile', function(){
  return {
    restrict: 'E',
    template: '<div>{{user.name}}</div>',
    //templateUrl: 'path/template.tpl.html'
    scope: {
        user: '=data'
    },
    replace: true
  };  
});

// Filter
app.filter('myUpper', function() {
  return function(input) {
    return input.toUpperCase();
  };
});

// Languages Service Promise
app.factory('LanguagesServicePromise', ['$http', '$q', function($http, $q){
  var lng = {};
  
  lng.get = function() {
    var deferred = $q.defer();
    $http.get('languages.json')
    .then(function(response){
       var languages = response.data.map(function(item){
         return item.name;
       });
       deferred.resolve(languages);
    })
    .catch(function(response){
      deferred.reject(response);
    });
    return deferred.promise;
  }
  
  return lng;
}]);

app.factory("messageBus", ['$rootScope', function($rootScope) {
  var bus = {};
  
  bus.userLogged = function(user) {
    $rootScope.$broadcast("global.user.logged", user);
  };

  return bus;
}]);
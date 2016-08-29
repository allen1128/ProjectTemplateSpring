var myCustomMatchers = {
  // toBeAllowedToDrive matcher
  // Usage: expect(age).toBeAllowedToDrive();
  //        expect(age).not.toBeAllowedToDrive();
  toBeAllowedToDrive: function() {
    return {
      compare: function(age) {
        var result = {};
        result.pass = age>16;

        if (result.pass) {
          result.message = "Expected " + age + " to be allowed to drive";
        } else {
          result.message = "Expected " + age + " to be allowed to drive, but it was not";
        }
        return result;
      }
    }; 
  }
};

describe("Custom matcher toBeAllowedToDrive", function() {
  var John = 17,
    Mary = 16;

  // Custom Matchers must be added using beforeEach
  beforeEach(function() {
    jasmine.addMatchers(myCustomMatchers);
  });

  it("should allow John to drive", function() {
    expect(John).toBeAllowedToDrive();
    // replaces 
    expect(John).toBeGreaterThan(16);
  });

  it("should not allow Mary to drive", function() {
    expect(Mary).not.toBeAllowedToDrive();
    // replaces 
    expect(Mary).not.toBeGreaterThan(16);
  });
});

/* Angular Unit Tests */

describe('Hello World controller', function() {
  var $controller;
  
  beforeEach(function(){
    module('plunker');
    inject(function($injector){
      $controller = $injector.get('$controller');
    });
  });
    
  it('should say \'Hello World\'', function() {
    var $scope = {};
    var controller = $controller('MainCtrl', { $scope: $scope });
    expect($scope.name).toEqual('Hello World');
  });
});


describe('Languages Service', function(){
  var LanguagesService;
  
  beforeEach(function(){
    module('plunker');
    inject(function($injector){
      LanguagesService = $injector.get('LanguagesService');
    });
  });
  
  it('should return available languages', function() {
    var languages = LanguagesService.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  });
});

describe('my-directive', function() {
  var $rootScope, $compile, element, scope;
  
  beforeEach(function(){
    module('plunker');
    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      element = angular.element('<my-profile data="user"></my-profile>');
      scope = $rootScope.$new();
      // wrap scope changes using $apply
      scope.$apply(function(){
        scope.user = { name: "John" };
        $compile(element)(scope);
      });
    });
  });

  it('should render the user name', function() {
    expect(element[0].innerText).toEqual('John');
  });
});


describe('myUpper Filter', function(){
  var myUpperFilter, $filter;
  
  beforeEach(function(){
    module('plunker');
    inject(function($injector){
      // Append Filter to the filter name
      myUpperFilter = $injector.get('myUpperFilter');
      
      // Usign $filter Provider
      $filter = $injector.get('$filter');
    });
  });
  
  it('should uppercase input', function(){
    expect(myUpperFilter('Home')).toEqual('HOME');
    // using $filter
    expect($filter('myUpper')('Home')).toEqual('HOME');
  })
})

describe('Routes', function(){
  var $route, $rootScope, $location, $httpBackend;
  
  beforeEach(function(){
    module('plunker');
    
    inject(function($injector){
      $route = $injector.get('$route');
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      
      $httpBackend.when('GET', 'home.tpl.html').respond('home');
    });
  })
  
  it('should navigate to home', function(){
    // navigate using $apply
    $rootScope.$apply(function() {
      $location.path('/home');
    });
    expect($route.current.templateUrl).toBe('home.tpl.html');
    expect($route.current.controller).toBe('MainCtrl');
    expect($location.path()).toBe('/home');
  })
  
  it('should redirect not registered urls to home', function(){
    // navigate using $apply
    $rootScope.$apply(function() {
      $location.path('/other');
    });
    expect($location.path()).toBe('/home');
    expect($route.current.templateUrl).toBe('home.tpl.html');
    expect($route.current.controller).toBe('MainCtrl');
  })
})

describe('Languages Service using a promise', function(){
  var LanguagesServicePromise, 
    $httpBackend, 
    jsonResponse = [{"name":"en"}, {"name":"es"}, {"name":"fr"}];
  
  beforeEach(function(){
    module('plunker');
    inject(function($injector){
      LanguagesServicePromise = $injector.get('LanguagesServicePromise');
      // set up the mock http service
      $httpBackend = $injector.get('$httpBackend');
      
      // backend definition common for all tests
      $httpBackend.whenGET('languages.json')
        .respond( jsonResponse );
    });
  });
  
  it('should return available languages asynchronously', function(done) {
    // service returns a promise
    var promise = LanguagesServicePromise.get();
    // use promise as usual
    promise.then(function(languages){
      // same tests as before
      expect(languages).toContain('en');
      expect(languages).toContain('es');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
      // Spec waits till done is called or Timeout kicks in
      done();
    });
    // flushes pending requests
    $httpBackend.flush();
  });
});

describe("Message Bus", function() {
    var messageBus, $rootScope, $scope, $controller, 
      user = { name: "John", id: 1 };

    beforeEach(function() {
      module("plunker");
      inject(function($injector) {
          messageBus = $injector.get("messageBus");
          $rootScope = $injector.get("$rootScope");
          $controller = $injector.get('$controller');
          $scope = $rootScope.$new();
      });
      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn($rootScope, '$on').and.callThrough();
    });

    it("should dispatch 'global.user.logged' event", function() {
        // avoid calling $broadcast implementation
        $rootScope.$broadcast.and.stub();
        messageBus.userLogged(user);
        expect($rootScope.$broadcast).toHaveBeenCalled();
        expect($rootScope.$broadcast).toHaveBeenCalledWith("global.user.logged", user);
    });
    
    it("should trigger 'global.user.logged' listeners", function() {
        // instantiate controller
        $controller('MainCtrl', { $scope: $scope });
        // trigger event
        messageBus.userLogged(user);
        expect($rootScope.$on).toHaveBeenCalled();
        expect($rootScope.$on).toHaveBeenCalledWith('global.user.logged', jasmine.any(Function));
        expect($scope.user).toEqual(user);
    }); 
});
angular.module('starter')
 
.controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
  $scope.username = AuthService.username();
 	console.log("controllers.js AppCtrl:5 point 1");
  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
  	console.log("controllers.js On:31 AUTH_EVENTS.notAuthorized");
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });
 
  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
  	console.log("controllers.js On:31 AUTH_EVENTS.notAuthenticated");
    AuthService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });
 
  $scope.setCurrentUsername = function(name) {
  	console.log("controllers.js setCurrentUsername:31 username");
    $scope.username = name;
  };
})

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) {
	 	console.log("controllers.js LoginCtrl:31 point 2");
  $scope.data = {};
 
  $scope.login = function(data) {
  	console.log("controllers.js loginctrl:31 login function");

    AuthService.login(data.username, data.password).then(function(authenticated) {
      $state.go('main.dash', {}, {reload: true});
      $scope.setCurrentUsername(data.username);
    }, function(err) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  };

})

.controller('DashCtrl', function($scope, $state, $http, $ionicPopup, AuthService) {
	console.log("controllers.js DashCtrl:51 point 3");
  $scope.logout = function() {
  	console.log("controllers.js DashCtrl:51 logout function");
    AuthService.logout();
    $state.go('login');
  };
 
  $scope.performValidRequest = function() {
  	console.log("controllers.js DashCtrl:57 performValidRequest function");
    $http.get('http://localhost:8100/valid').then(
      function(result) {
        $scope.response = result;
      });
  };
 
  $scope.performUnauthorizedRequest = function() {
  	console.log("controllers.js DashCtrl:65 performUnauthorizedRequest function");
    $http.get('http://localhost:8100/notauthorized').then(
      function(result) {
        // No result here..
      }, function(err) {
        $scope.response = err;
      });
  };
 
  $scope.performInvalidRequest = function() {
  	console.log("controllers.js DashCtrl:75 performInvalidRequest function");
    $http.get('http://localhost:8100/notauthenticated').then(
      function(result) {
        // No result here..
      }, function(err) {
        $scope.response = err;
      });
  };
});
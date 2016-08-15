angular.module('starter.controllers', [])

/* Login controller */
.controller('LoginCtrl', function($scope, LoginService, $timeout) {
  $scope.loginData = {};
$scope.doLogin = function() {
	console.log("controller form data ",$scope.loginData);	
	LoginService.loginUser($scope.loginData.username,$scope.loginData.password)
	.success(function(loginData){
		console.log("success controller");
	}).error(function(loginData){
		console.log("error controller");
	});
};

})

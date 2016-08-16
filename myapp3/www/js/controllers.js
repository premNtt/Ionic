angular.module('starter.controllers', [])

/* Login controller */
.controller('LoginCtrl', function($scope,$state,$ionicPopup, LoginService) {
  $scope.loginData = {};
$scope.doLogin = function() {
	console.log("controller form data ",$scope.loginData);	
	LoginService.loginUser($scope.loginData.username,$scope.loginData.password)
	.success(function(loginData){
		console.log("success controller");
		$state.go('app.home');
	}).error(function(loginData){
		console.log("error controller");
		var alertPopup = $ionicPopup.alert({
	            title: 'Login failed!',
	            template: 'Please check your credentials!'
	        });
	});
};

})

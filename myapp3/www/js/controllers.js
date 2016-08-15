angular.module('starter.controllers', [])

/* Login controller */
.controller('LoginCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};
$scope.doLogin = function() {
	console.log("form data ",$scope.loginData);
};

})

angular.module('starter')

.controller('DashboardCtrl',function($scope, $state, DashboardServices){
	$scope.data = null;
	DashboardServices.getData(function(dataResponse){
		$scope.data = dataResponse;		
		console.log(JSON.stringify($scope.data));
	});

})
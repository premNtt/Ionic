angular.module('starter')

.controller('DashboardCtrl',function($scope, $state, DashboardServices){
	$scope.data = null;
	DashboardServices.getData().then(function(dataResponse){
		$scope.data = dataResponse.data;		
		console.log(JSON.stringify($scope.data));
	});

})
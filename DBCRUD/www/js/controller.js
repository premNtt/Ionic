angular.module('starter')

.controller('DashboardCtrl',function($scope, $state, DashboardServices){
	$scope.data = null;
	$scope.username = "prem";
	DashboardServices.getData().then(function(dataResponse){
		$scope.items = dataResponse.data.employees;		
		console.log(JSON.stringify($scope.items));		
		$scope.username = $scope.items[0].firstName;
	},function(err){
		console.log("Error :"+JSON.stringify(err));
	});
})
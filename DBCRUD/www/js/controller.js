angular.module('starter')

.controller('DashboardCtrl',function($scope, $state, DashboardServices){
	
	$scope.username = "prem";
	DashboardServices.getData().then(function(dataResponse){
		$scope.items = dataResponse.data.employees;		
		console.log(JSON.stringify($scope.items));
		$scope.username = $scope.items[0].firstName;
	},function(err){
		console.log("Error :"+JSON.stringify(err));
	});
})

.controller('createCtrl', function($scope, $state, $http){
	$scope.emp = {};
	$scope.submit = function(){
		var link = 'http://127.0.0.1:8888/demoServices/postdata.php';
 		var postdata = {firstname : $scope.emp.firstname,
 						lastname : $scope.emp.lastname};
        $http.post(link, postdata).then(function (res){
            $scope.response = res.data;
        });
	}
})
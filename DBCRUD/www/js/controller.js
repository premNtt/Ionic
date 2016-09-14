angular.module('starter')

.controller('MenuCtrl',function($scope, $state,DashboardServices){
	$scope.reload = function() {
    	//alert("triggered");
    	//$state.go($state.current, {}, {reload: true});
    	window.location.reload(true);
  	};
})

.controller('DashboardCtrl',function($scope, $state, DashboardServices){

	$scope.username = "Guest";
	DashboardServices.getData().then(function(dataResponse){
		$scope.items = dataResponse.data;		
		console.log(JSON.stringify($scope.items));
		$scope.username = $scope.items[0].firstname;
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
angular.module('starter')

.controller('MenuCtrl',function($scope, $state,DashboardServices){
	console.log("MenuCtrl");
	$scope.reload = function() {
    	//alert("triggered");
    	//$state.go($state.current, {}, {reload: true});
    	window.location.reload(true);
    	$state.go('menu.dashboard');
  	};
})

.controller('DashboardCtrl',function($scope, $state, DashboardServices){
	console.log("DashboardCtrl");
	$scope.username = "Guest";
	DashboardServices.getData().then(function(dataResponse){
		$scope.items = dataResponse.data;		
		console.log(JSON.stringify($scope.items));
		$scope.username = $scope.items[0].firstname;
	},function(err){
		console.log("Error :"+JSON.stringify(err));
	});
})

.controller('createCtrl', function($scope, $state, $http,WEBSERVICES){
	console.log("createCtrl");
	$scope.emp = {};
	$scope.submit = function(){
		var postdata = {firstname : $scope.emp.firstname,
 						lastname : $scope.emp.lastname};
        $http.post(WEBSERVICES.post, postdata).then(function (res){
            $scope.response = res.data;
        });
	}
})
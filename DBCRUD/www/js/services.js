angular.module('starter')

.service('DashboardServices',function($q, $http){
	this.getData  = function(callbackfunc){
		$http({
			method: 'GET',
			url: 'http://127.0.0.1:8888/demoServices/index.php'
		}).success(function(data){
			callbackfunc(data)
		}).error(function(){
			alert("error");
		});
	}
})
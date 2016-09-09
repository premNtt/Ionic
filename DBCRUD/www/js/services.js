angular.module('starter')

.service('DashboardServices',function($q, $http){
	this.getData  = function(){
		return $http({
			method: 'GET',
			url: 'http://127.0.0.1:8888/demoServices/index.php'
		});
	}
})
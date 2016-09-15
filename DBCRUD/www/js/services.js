angular.module('starter')

.service('DashboardServices',function($q, $http,WEBSERVICES){
	this.getData  = function(){
		return $http({
			method: 'GET',
			url: WEBSERVICES.get
		});
	}
})
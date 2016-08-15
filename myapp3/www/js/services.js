angular.module('starter.services', [])

.service('LoginService',function($q){
	return{
		loginUser:function(Uname,Pword){
			console.log("called Services");
			var deferred = $q.defer();
			var promise = deferred.promise;

			if(Uname == 'prem' && Pword == 'prem'){
				deferred.resolve('welcome '+Uname+' !');
			}else{
				deferred.reject('wrong credentials');
			}

			promise.success = function(fn){
				promise.then(fn);
				return promise;
			}

			promise.error = function(fn){
				promise.then(null, fn);
				return promise;
			}

			return promise;
		}		
	}
})
angular.module('starter.services', [])

.service('LoginService',function($q){
	return{
		loginUser:function(Uname,Pword){
			console.log("called Services");
			var deferred = $q.defer();
			var promise = deferred.promise;

			//fake data start

			 // Some fake testing data
			  var UserList = [{
			    name: 'prem',
			    password: 'prem' 
			  	},{
			    name: '123',
			    password: '123' 
			  	},{
			    name: '456',
			    password: '456' 
			  	}];
			//fake data end

			var loginFlag = false;			
			for(var i = 0; i < UserList.length; i++ ){
				console.log("@@@",UserList[i].name); 
				if(Uname == UserList[i].name && Pword == UserList[i].password){
					loginFlag = true;					
				}
			}

			if(loginFlag){
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
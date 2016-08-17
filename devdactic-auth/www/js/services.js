angular.module('starter')
 
.service('AuthService', function($q, $http, USER_ROLES) {
  console.log("service.js AuthService:4 point 1 ");
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;
 
  function loadUserCredentials() {
     console.log("service.js AuthService:12 loadUserCredentials func ");
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    console.log("service.js AuthService:20 storeUserCredentials func ");
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }
 
  function useCredentials(token) {
    console.log("service.js AuthService:26 useCredentials func ");
    username = token.split('.')[0];
    isAuthenticated = true;
    authToken = token;
 
    if (username == 'admin') {
      role = USER_ROLES.admin
    }
    if (username == 'user') {
      role = USER_ROLES.public
    }
 
    // Set the token as header for your requests!
    $http.defaults.headers.common['X-Auth-Token'] = token;
  }
 
  function destroyUserCredentials() {
    console.log("service.js AuthService:43 destroyUserCredentials func ");
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }
 
  var login = function(name, pw) {
    console.log("service.js AuthService:52 login func ");
    return $q(function(resolve, reject) {
      if ((name == 'admin' && pw == '1') || (name == 'user' && pw == '1')) {
        // Make a request and receive your auth token from your server
        storeUserCredentials(name + '.yourServerToken');
        resolve('Login success.');
      } else {
        reject('Login Failed.');
      }
    });
  };
 
  var logout = function() {
    console.log("service.js AuthService:65 logout func ");
    destroyUserCredentials();
  };
 
  var isAuthorized = function(authorizedRoles) {
    console.log("service.js AuthService:70 isAuthorized func ");
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };
 
  loadUserCredentials();
 
  return {
    login: login,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;}
  };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  console.log("service.js AuthInterceptor:90 point 2 ");
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
 
.config(function ($httpProvider) {
  console.log("service.js config:103 point 3 ");
  $httpProvider.interceptors.push('AuthInterceptor');
});
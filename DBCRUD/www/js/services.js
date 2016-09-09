angular.module('starter')

.service('DashboardServices',function($q, $http){
console.log('services');
var dataArr = '';

 $http.get('http://127.0.0.1:8888/demoServices/index.php').then(
      function(result) {
        console.log("secces"+JSON.stringify(result.data));
        var obj = JSON.stringify(result.data); 
        dataArr = JSON.parse(obj);          
        console.log(dataArr.employees[0].firstName);
      }, function(err) {
         console.log("error"+JSON.stringify(err));
      });
 
return a = 1;
})
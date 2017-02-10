App.controller('signin', ['$scope', '$rootScope', '$http', '$window', '$cookies','util_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,US) {
    // $scope.items = Data;
    $scope.userId = "";
    $scope.password = "";
   	sessionStorage.setItem('FirstName', "");
    sessionStorage.setItem('SubRole', "");
	sessionStorage.setItem('UserName', "");
    sessionStorage.setItem('EmpId', "");
	sessionStorage.setItem('Islogin', "false");
	
	$scope.url = US.url;
    $scope.config = US.config;
	$scope.cat = US.cat;
	
	console.log(this.url);

    $scope.checklogin = function () {

        var data = {
          
                            "sUserName": $scope.userId,
                            "sPassword": $scope.password,
							"sCategory": $scope.cat
                       
        }

if(typeof(Storage) !== "undefined") {    
	console.log(typeof(Storage));
} else {
    // Sorry! No Web Storage support..
	alert("Contact Developer...");
}
      
        var parms = JSON.stringify(data);
		US.LON();
        $http.post($scope.url + "SPA_ValidateUser", "sJsonInput=" + parms, $scope.config)
   .then(
       function (response) {
           // success callback
		   US.LOFF();
           console.log(response.data);
           if (response.data[0].Status === "true") {
			   

				//console.log(response.data[0].FirstName);
               sessionStorage.setItem('FirstName',response.data[0].FirstName);
               sessionStorage.setItem('SubRole', response.data[0].SubRole);
			   sessionStorage.setItem('UserName', response.data[0].UserName);
			   sessionStorage.setItem('EmpId', response.data[0].EmpId);  			   
               sessionStorage.setItem('Islogin', "true");
               window.location = "index.html";
           }
            else
			     alert(response.data[0].Message, null);
       },
       function (response) {
           // failure callback	
US.LOFF();
       }
    );

    }



} ]);

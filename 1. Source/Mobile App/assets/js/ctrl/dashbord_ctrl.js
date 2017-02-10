App.controller('dashbord_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','dashbord_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DS) {



//move to document page 
	$scope.godoc = function(val)
	{
		sessionStorage.setItem('FileNo', val);
		window.location = "details.html";
	}
	
	

//opencases list 
$scope.opencases = function()
{
	DS.opencases().then(function (response) { $rootScope.caselist = response.data; $("#myModal").modal(); });
}

   //updaterecord
   $scope.updaterecord = function () {
       $scope.savelable = "Loading..";
       $scope.savebtn = true;
       var config = {
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
           }
       }

       var parms = JSON.stringify($scope.data);
       $http.post("http://119.73.138.58:82/ICSB.asmx/LeadUpdate", "value=" + parms, config)
   .then(
       function (response) {
           // success callback
           console.log(response.data);
           if (response.data.VALIDATE[0].Status == "True") {
               $scope.savelable = "Save";
               $scope.savebtn = false;
               $scope.reset();
               alert(response.data.VALIDATE[0].Msg);
           }
           else {
               alert(response.data.VALIDATE[0].Msg);
           }
       },
       function (response) {
           // failure callback

       }
    );
   }


} ]);

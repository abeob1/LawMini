App.controller('openc_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','dashbord_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DS) {



//move to document page 
	$scope.godoc = function(val)
	{
		sessionStorage.setItem('FileNo', val);
		window.location = "details.html";
	}
	
	


	DS.opencases().then(function (response) { $rootScope.caselist = response.data;  });



} ]);

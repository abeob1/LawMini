App.controller('main', ['$scope', '$rootScope', '$http', '$window', '$cookies',

function ($scope, $rootScope, $http, $window, $cookies) {
    // $scope.items = Data;
    $scope.userId = "";
    $scope.password = "";

    if (sessionStorage.getItem('Islogin') == "true") {
       // alert("ss");
    }
    else {
       // window.location = "login.html";
    }
		
    $scope.FirstName = sessionStorage.getItem('FirstName');
    $scope.username =  sessionStorage.getItem('UserName');
    $scope.user_role =   sessionStorage.getItem('SubRole');
	$scope.EmpId =   sessionStorage.getItem('EmpId');


$scope.menu = function()
{
	
			if($("#sideNav").hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$("#sideNav").removeClass('closed');
				//$('#page-wrapper').animate({'margin-left' : '260px'});
				
				
			}
			else{
				
			    $("#sideNav").addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		
    
}

} ]);

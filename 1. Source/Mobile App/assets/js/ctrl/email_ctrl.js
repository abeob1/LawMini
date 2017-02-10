App.controller('email_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','doc_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DOCS) {

$scope.fileno = sessionStorage.getItem('FileNo');
$rootScope.msg = "";

//Load data for details tab
	DOCS.getocrd().then(function (response) { $scope.data=response.data[0]; });
//Load Blog List
	DOCS.getemail().then(function (response) { $scope.email=angular.fromJson(JSON.parse(response.data)); });

$scope.showmail = function(i)
{
	$rootScope.mail = $scope.email.EMAIL[i];
	console.log($scope.email)
	console.log(i);
	$("#myModal").modal();
	
}

$scope.sendmsg = function()
{
	var data = {"CardCode":  sessionStorage.getItem('FileNo'),
	"MemeberCode": sessionStorage.getItem('UserName'),
	"MemeberName": sessionStorage.getItem('FirstName'),
	"Message": $rootScope.msg
	};
	
	DOCS.sendBlogMsg(data).then(function (response) { if(response.data[0].Result=="SUCCESS") {alert(response.data[0].DisplayMessage);} });
}

} ]);

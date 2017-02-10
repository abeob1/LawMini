App.controller('blog_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','doc_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DOCS) {

$scope.fileno = sessionStorage.getItem('FileNo');
$scope.msg = "Enter Your Text";

//Load data for details tab
	DOCS.getocrd().then(function (response) { $scope.data=response.data[0]; });
//Load Blog List
	$scope.getb = function()
{
	
	DOCS.getblog().then(function (response) { $scope.blog=angular.fromJson(JSON.parse(response.data)); console.log($scope.blog); });
	
}
$scope.getb();

$scope.addblog = function()
{
	$("#myModal").modal({
  backdrop: 'static',
  keyboard: false
});
	
}

$scope.sendmsg = function()
{
	var data = {"CardCode":  sessionStorage.getItem('FileNo'),
	"MemeberCode": sessionStorage.getItem('UserName'),
	"MemeberName": sessionStorage.getItem('FirstName'),
	"Message": $('#newmsg').val()
	};
	
	DOCS.sendBlogMsg(data).then(function (response) { if(response.data[0].Result=="SUCCESS") {alert(response.data[0].DisplayMessage); $scope.getb(); $("#myModal").modal('hide') } });
}

} ]);

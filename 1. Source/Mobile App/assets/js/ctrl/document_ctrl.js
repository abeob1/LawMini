App.controller('document_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','doc_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DOCS) {

$scope.fileno = sessionStorage.getItem('FileNo');
$scope.pcasediv = false;

DOCS.getocrd().then(function (response) { $scope.data=response.data[0]; });

//Load data for document tab
	DOCS.getopensection().then(function (response) { $scope.opensec=response.data; });
	
	$scope.pcase  =  function()
	{
		$scope.pcasediv = true;
	}




} ]);

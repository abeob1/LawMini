App.controller('details_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','doc_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DOCS) {

$scope.fileno = sessionStorage.getItem('FileNo');

//Load data for details tab
	DOCS.getocrd().then(function (response) { $scope.data=response.data[0]; });




} ]);

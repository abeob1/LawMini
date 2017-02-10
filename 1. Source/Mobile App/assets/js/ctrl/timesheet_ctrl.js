App.controller('timesheet_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','doc_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,DOCS) {

$scope.fileno = sessionStorage.getItem('FileNo');

$scope.EXPENSE = {
  "Date": "2016-05-13",
  "CardCode":$scope.fileno,
  "Curr": "SAG",
  "Expense": "",
  "Remarks": "Testing",
  "Amount": "10"
 }
 
 $scope.TIME ={   
		 "CardCode": $scope.fileno,
		  "Date": "2016-05-13",
		   "Task": "",
		  "BillUnit": "10",
		  "Dur": "15",
		  "Billable": "Y",
		  "Remarks": "Testing"

		 } 
		 
		
 $scope.exarray = "";
 $scope.timearray = "";
 
 DOCS.getocrd().then(function (response) { $scope.data=response.data[0]; });
 DOCS.getExpens().then(function (response) { $scope.Expensdrop=angular.fromJson(JSON.parse(response.data)); });
 DOCS.getLawyerFee().then(function (response) { $scope.LawyerFeedrop=angular.fromJson(JSON.parse(response.data)); });

//Expense save
$scope.exsave = function()
{
	DOCS.exsave($scope.EXPENSE).then(function (response) { $scope.exget();});
}

//Expense Get
$scope.exget = function()
{
	DOCS.exget().then(function (response) { $scope.exarray=angular.fromJson(JSON.parse(response.data)); console.log($scope.exarray)});
}
$scope.exget();

//time save list 
$scope.timesave = function()
{
	DOCS.timesave($scope.TIME).then(function (response) { $scope.timeget(); });
}

//Time Get
$scope.timeget = function()
{
	DOCS.timeget().then(function (response) { $scope.timearray=angular.fromJson(JSON.parse(response.data))});
}
$scope.timeget();



} ]);

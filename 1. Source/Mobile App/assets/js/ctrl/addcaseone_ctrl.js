App.controller('addcaseone_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','util_SERVICE','Addcase_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,US,ACS) {
    $scope.savelable = "Save";
    $scope.Defendant = "Y";
    $scope.Plaintiff= "N";
	
    $scope.usersarray = [];
    //US.getegroup().then(function (response) { $scope.egroup = response.data.EQGROUP; console.log($scope.egroup); });
	
	$scope.adduser = function()
	{
		ACS.getuser().then(function (response) { $rootScope.users = response.data; console.log($rootScope.users); $("#myModal").modal();  });
	}
		
	//open modal and add selected user
	$rootScope.addselecteduser  = function()
	{
		
		var i;
		for(i=0;i<$rootScope.users.length;i++)
		{
			if($rootScope.users[i].selected == true)
			{
				 $scope.usersarray.push($rootScope.users[i]);
			}
		}
		 $("#myModal").modal('hide'); 
	}
	
	$scope.addmatter = function()
	{
		if($scope.acting == "p")
			{$scope.Defendant = "N"; $scope.Plaintiff= "Y";}
		else
			{$scope.Defendant = "Y"; $scope.Plaintiff= "N";}
		ACS.addmatter($scope).then(function (response) { if(response.data.Result=="SUCCESS"){ window.location = "addcase2.html";}  });
	}
    

} ]);

App.controller('addcasetwo_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','util_SERVICE','Addcase_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,US,ACS) {
    $scope.savelable = "Save";
    $scope.Defendant = "Y";
    $scope.Plaintiff= "N";
	$scope.data = [];
	
    $scope.dataarry = {
	"CardCode": "Customer Added\/ successfully for the CardName = wdwd",
	"Code": "",
	"DocEntry": "",
	"IDType": "INDIVIDUAL",
	"EmployeeName": "ttt",
	"Title": "MR",
	"Gender": "CORPORATE",
	"IDNo1": "",
	"IDNo3": "",
	"TaxNo": "",
	"EMAIL": "",
	"MobileNo": "",
	"Telephone": "",
	"OfficeNo": "",
	"IDAddress1": "",
	"IDAddress2": "",
	"IDAddress3": "",
	"IDAddress4": "",
	"IDAddress5": "",
	"CorresAddr1": "dd",
	"CorresAddr2": "",
	"CorresAddr3": "",
	"CorresAddr4": "",
	"CorresAddr5": "",
	"AddressToUse": "ADDRESS_CORRESPOND",
	"LastUpdatedOn": "",
	"IdentityType": "Singaporean IC",
	"Occupation": "Accountant",
	"MaritalStatus": "Divorced",
	"ScanFrontICLocation": "",
	"ScanBackICLocation": ""
};
    $scope.resetall = function()
	{
		 $scope.dataarry = {
			"CardCode": "",
			"Code": "",
			"DocEntry": "",
			"IDType": "",
			"EmployeeName": "",
			"Title": "",
			"Gender": "",
			"IDNo1": "",
			"IDNo3": "",
			"TaxNo": "",
			"EMAIL": "",
			"MobileNo": "",
			"Telephone": "",
			"OfficeNo": "",
			"IDAddress1": "",
			"IDAddress2": "",
			"IDAddress3": "",
			"IDAddress4": "",
			"IDAddress5": "",
			"CorresAddr1": "",
			"CorresAddr2": "",
			"CorresAddr3": "",
			"CorresAddr4": "",
			"CorresAddr5": "",
			"AddressToUse": "",
			"LastUpdatedOn": "",
			"IdentityType": "Singaporean IC",
			"Occupation": "",
			"MaritalStatus": "",
			"ScanFrontICLocation": "",
			"ScanBackICLocation": ""
		};
	}
	
	$scope.scanfrontic = function(file)
	{
		//alert("Testing");
		ACS.uploadICFile(file);
	}
	
	$scope.ADDdata = function()
	{
		if($scope.data.length!=3)
		{
			var r = confirm("Do you want to add more Plaintiff ?");
			if (r == true)
			{
				
				var i;
				var exsit=0;
					if($scope.data.length!=0)
					{
							for(i=0;i<$scope.data.length;i++)
							{
								if($scope.data[i].EmployeeName==$scope.dataarry.EmployeeName)
								{
									exsit = 1;									
								}								
							}
							if(exsit==1)
							{
								alert("Record Already Exist !!!");	
							}
							else
							{
								$scope.data.push(angular.copy($scope.dataarry));
								$scope.resetall();
							}
					}
					else
					{
						$scope.data.push(angular.copy($scope.dataarry));
						$scope.resetall();
					}
			} else {
				
				if($scope.data.length!=0)
					{
							for(i=0;i<$scope.data.length;i++)
							{
								if($scope.data[i].EmployeeName==$scope.dataarry.EmployeeName)
								{
									exsit = 1;									
								}								
							}
							if(exsit==1)
							{
								alert("Record Already Exist !!!");	
							}
							else
							{
								$scope.data.push(angular.copy($scope.dataarry));
								$scope.resetall();
								$scope.addPmatter();
							}
					}
					else
					{
						$scope.data.push(angular.copy($scope.dataarry));						
						$scope.resetall();
						$scope.addPmatter();
					}
				
			}
		}
		else
		{
			var r = confirm("Can't Add Plaintiff More than 4.");
			if (r == true)
			{
				var i;
				var exsit=0;
				for(i=0;i<$scope.data.length;i++)
				{
					if($scope.data[i].EmployeeName==$scope.dataarry.EmployeeName)
						exsit = 1;					
				}
				if(exsit==1)
				{
					alert("Record Already Exist !!!");
				}
				else
				{
					$scope.data.push(angular.copy($scope.dataarry));
					$scope.resetall();
					$scope.addPmatter();
				}
									
					
			}
		
					
				
		}
	}
		
	
	$scope.addPmatter = function()
	{
		
		ACS.addPmatter($scope.data).then(function (response) { if(response.data[0].Result=="Success"){ alert(response.data[0].DisplayMessage);  window.location = "addcase3.html";}  });
	}
    

} ]);

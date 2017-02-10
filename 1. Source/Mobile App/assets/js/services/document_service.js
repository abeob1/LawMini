App.service('doc_SERVICE', ['$http', 'util_SERVICE', function ($http, US) {



    this.url = US.url;
    this.config = US.config;


//get open section cases 

 this.getopensection = function () {

        var data = { "sCaseNo": sessionStorage.getItem('FileNo')}
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "SPA_ProcessCase_GetOpenSection", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	
	
	
	
	// get Expens From server 
	 this.getExpens = function () {

        //var data ={"EMAIL": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		var data ={"EXPENSE": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_ExpenseItems_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	
	// get Lawyer Fee From server 
	 this.getLawyerFee = function () {

        var data ={"EMAIL": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		//var data ={"TIME": [{"MemeberID": sessionStorage.getItem('UserName')}]};
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_TimeItems_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	

//TIME Expence save
	
	 this.timesave = function (s) {

        var data = { "TIME": [s]}
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Add_TimeEntry_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };

	//Save Expence 
	
	 this.exsave = function (s) {

        var data = { "EXPENSE": [s]}
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Add_ExpenseEntry_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
		//timesheet get
	
	this.timeget = function (s) {

		var data = {"TIME": [{"CardCode": sessionStorage.getItem('FileNo')}]};
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_TimeEntry_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	//expence get
	
	this.exget = function (s) {

		var data = {"EXPENSE": [{"CardCode": sessionStorage.getItem('FileNo')}]};
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_ExpenseEntry_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };

//get data from Blog
    this.getblog = function () {

        var data = {"BLOG": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_Blog_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	
	// get email From server 
	 this.getemail = function () {

        //var data ={"EMAIL": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		var data ={"EMAIL": [{"CardCode": sessionStorage.getItem('FileNo')}]};
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Get_Email_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	// send blog msg to server 
	 this.sendBlogMsg = function (d) {

        var data = d;
		
		
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "Add_Blog_LawMini", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };
	
	
    //get data from ocrd
    this.getocrd = function () {

        var data = {
            "CaseNo": sessionStorage.getItem('FileNo'),
			"UserName": sessionStorage.getItem('UserName'),
			"UserRole": sessionStorage.getItem('SubRole')			
        };
        var parms = encodeURIComponent(JSON.stringify(data));
		US.LON();
        var promise = $http.post(this.url + "SPA_ProcessCase_GetDataFromOCRD", "sJsonInput=" + parms, this.config)
   .success(function (response) {
			US.LOFF();
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;

    };

    this.PreviousRecord = function (val) {
        var rdata = [];
        var data = { "SQTO": [{ "U_Qno": val}] };

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SalesQuotation_PreviousRecord", "value=" + parms, this.config)
   .success(function (response) {
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;
    };


    this.NextRecord = function (val) {
      
        var rdata = [];
        var data = { "SQTO": [{ "U_Qno": val}] };

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SalesQuotation_NextRecord", "value=" + parms, this.config)
   .success(function (response) {
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;
    };


    this.LastRecord = function (val) {

        var rdata = [];
        var data = { "SQTO": [{ "U_Qno": val}] };

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SalesQuotation_LastRecord", "value=" + "", this.config)
   .success(function (response) {
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;
    };

    this.FirstRecord = function (val) {

        var rdata = [];
        var data = { "SQTO": [{ "U_Qno": val}] };

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SalesQuotation_FirstRecord", "value=" + "", this.config)
   .success(function (response) {
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;
    };

    this.FindRecord = function (val) {

        var rdata = [];
        var data = { "SQTO": [{ "U_Qno": val}] };

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SalesQuotation_FindRecord", "value=" + parms, this.config)
   .success(function (response) {
       if (response.returnStatus == 1) {
           return response;
       } else {
           //alert('Not Connecting to server');
           return false;
       }
   });
        return promise;
    };

    this.updateUserRol = function (s, userid) {
        var rdata = [];
        var data = {
            "requestType": "authorisation",
            "subRequestType": "updateRoleId",
            "systemId": US.systemId,
            "sessionId": US.gsid(),
            "authKey": US.authKey,
            "userId": US.userId,
            "roleName": US.roleName,
            "requestId": US.grequestId(),
            "updateRoleCategory": {
                "updatedUserId": parseInt(userid),
                "userRoleid": s,
                "purcategoryId": [1, 3],
                "defaultPurCategory": 3
            }
        };


        var promise = $http.get(url + JSON.stringify(data)).success(function (response) {
            if (US.eh(response)) {
                return response;
                //alert(response.status);
            } else {
                //alert('Not Connecting to server');
                return false;
            }
        });
        return promise;
    };


} ]);


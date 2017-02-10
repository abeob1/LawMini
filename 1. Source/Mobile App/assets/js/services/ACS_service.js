App.service('Addcase_SERVICE', ['$http', 'util_SERVICE', function ($http, US) {



    this.url = US.url;
    this.config = US.config;


    //get all SurveyTypeMaster
    this.getuser = function (code, name) {

      /*  var data = {
            "OCRD": [{
                "U_Ccode": code,
                "U_Cname": name
            }]
        };
        var parms = encodeURIComponent(JSON.stringify(data));*/
        var promise = $http.post(this.url + "SPA_Teamoflawyerspercase", "value=" + "", this.config)
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
	
	//add Plaintiff to matter
	this.addPmatter = function (s) {
        var rdata = [];
        var data =s;
US.LON();
        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SPA_AddCase_Purch_AddIndividual", "sJsonInput=" + parms, this.config)
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
	
	
	
	//add DEFENDANT to matter
	this.addDmatter = function (s) {
        var rdata = [];
        var data =s;
US.LON();
        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SPA_AddCase_Vndr_AddIndividual", "sJsonInput=" + parms, this.config)
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



	//upload IC file to server
	 this.uploadICFile = function(file){
               var fd = new FormData();
               fd.append('FileName', file);
            
				US.LON();
               $http.post(this.url + "Attachments", fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': 'multipart/form-data'}
               })
            
               .success(function(response){
								 console.log(response);
								 US.LOFF();
               })
            
               .error(function(response){
							    console.log(response);
							   US.LOFF();
               });
            }

    this.addmatter = function (s) {
        var rdata = [];
        var data ={
						"Plaintiff": s.Plaintiff,
						"Defendant": s.Defendant,
						"Matter": s.matter,
						"Users": s.usersarray
					};

        var parms = encodeURIComponent(JSON.stringify(data));
        var promise = $http.post(this.url + "SPA_AddCase_LawMini", "value=" + parms, this.config)
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


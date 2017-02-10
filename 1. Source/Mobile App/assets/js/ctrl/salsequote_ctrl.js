App.controller('salsequote_ctrl', ['$scope', '$rootScope', '$http', '$window', '$cookies','util_SERVICE','SQ_SERVICE',

function ($scope, $rootScope, $http, $window, $cookies,US,SQS) {
    $scope.savelable = "Save";
    $scope.savebtn = false;
    $scope.findbtn= false;
    $scope.addressarray = [];
    US.getegroup().then(function (response) { $scope.egroup = response.data.EQGROUP; console.log($scope.egroup); });

    $scope.addclick = function()
    {
         $scope.findbtn= false;
         $scope.resetall();
    }

     $scope.findclick = function()
    {
         $scope.findbtn= true;
         $scope.resetall();

    }
     $scope.getegroupName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.egroup.length; i++) {
          if($scope.egroup[i].U_EQGroup == code)
            ret = $scope.egroup[i].U_EQGroupName;
        }
        return ret;
    }

    US.getcurency().then(function (response) { $scope.curency = response.data.CURRENCY; console.log($scope.curency); });
     $scope.getecurencyName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.curency.length; i++) {
          if($scope.curency[i].U_Currency == code)
            ret = $scope.curency[i].U_CurrencyName;
        }
        return ret;
    }
    
    
     US.getGST().then(function (response) { $scope.GST = response.data.GST; console.log($scope.GST); });
     $scope.getGSTName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.GST.length; i++) {
          if($scope.GST[i].U_GST == code)
            ret = $scope.GST[i].U_GSTName;
        }
        return ret;
    }



     US.getUOM().then(function (response) { $scope.UOM = response.data.UOM; console.log($scope.UOM); });
     $scope.getuomname = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.UOM.length; i++) {
          if($scope.UOM[i].U_UOM == code)
            ret = $scope.UOM[i].U_UOMName;
        }
        return ret;
    }

     US.getstype().then(function (response) { $scope.stype = response.data.SURTYPE; console.log($scope.stype); });
     $scope.getestypeName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.stype.length; i++) {
          if($scope.stype[i].U_Stype == code)
            ret = $scope.stype[i].U_StypeName;
        }
        return ret;
    }


        
    US.getContinent().then(function (response) { $scope.Continent = response.data.CONT; console.log($scope.Continent); });
    US.getCityMaster().then(function (response) { $scope.CityMaster = response.data.CITY; console.log($scope.CityMaster); });
    US.getCountryMaster().then(function (response) { $scope.CountryMaster = response.data.COUNTRY; console.log($scope.CountryMaster); });
    
    $scope.getContinentName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.Continent.length; i++) {
          if($scope.Continent[i].U_Conti == code)
            ret = $scope.Continent[i].U_ContiName;
        }
        return ret;
    }

    $scope.getcountry = function(conti)
    {
        US.getcountry(conti).then(function (response) { $scope.country = response.data.COUNTRY; console.log($scope.country); });
    }
    $scope.getcountryName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.CountryMaster.length; i++) {
          if($scope.CountryMaster[i].U_Country == code)
            ret = $scope.CountryMaster[i].U_CountryName;
        }
        return ret;
    }
    $scope.getcity = function(con)
    {
        US.getcity(con).then(function (response) { $scope.city = response.data.CITY; console.log($scope.city); });
    }
    $scope.getcityName = function(code)
    {
         var ret = ""
         for (var i=0; i<$scope.CityMaster.length; i++) {
          if($scope.CityMaster[i].U_City == code)
            ret = $scope.CityMaster[i].U_CityName;
        }
        return ret;
    }
    

    $scope.getcustomer = function()
    {
    
         SQS.getcustomer($scope.data.SQTO[0].U_Ccode,$scope.data.SQTO[0].U_Cname).then(function (response) { $rootScope.customer = response.data; console.log($rootScope.customer); $("#myModal").modal(); });
    }



    //get Previous Record

    $scope.PreviousRecord = function()
    {
    
         SQS.PreviousRecord($scope.data.SQTO[0].U_Qno).then(function (response) {console.log(response);$scope.data=response.data});
    }


     //get NextRecord Record

    $scope.NextRecord = function()
    {
   
    
         SQS.NextRecord($scope.data.SQTO[0].U_Qno).then(function (response) {console.log(response);$scope.data=response.data});
    }

    //SalesQuotation_LastRecord

    $scope.LastRecord = function()
    {
   
    
         SQS.LastRecord().then(function (response) {console.log(response);$scope.data=response.data});
    }

    //SalesQuotation_FirstRecord

    $scope.FirstRecord = function()
    {
   
    
         SQS.FirstRecord().then(function (response) {console.log(response);$scope.data=response.data});
    }

    //SalesQuotation_FindRecord

    $scope.FindRecord = function()
    {
   
    
         SQS.FindRecord($scope.data.SQTO[0].U_Qno).then(function (response) {console.log(response);$scope.data=response.data});
    }



    //get one record from multiple
    $rootScope.findone = function (i) {
        //alert(i);
        //console.log($rootScope.fulldata.LEADM[i].Code);
        $scope.data.SQTO[0].U_Ccode = $rootScope.customer.OCRD[i].U_Ccode;
        $scope.data.SQTO[0].U_Cname = $rootScope.customer.OCRD[i].U_Cname;
        $scope.data.SQTO[0].U_TelNo = $rootScope.customer.OCRD[i].U_TelNo;
        $scope.data.SQTO[0].U_FaxNo = $rootScope.customer.OCRD[i].U_FaxNo;
        $scope.data.SQTO[0].U_Mno = $rootScope.customer.OCRD[i].U_MNo;
        $scope.data.SQTO[0].U_Email = $rootScope.customer.OCRD[i].U_Email;

      $scope.findAddress($rootScope.customer.OCRD[i].U_Ccode);

    }
   
   $scope.findAddress = function(code)
   {
        for (var i=0; i<$rootScope.customer.ADDR.length; i++) {
          if($rootScope.customer.ADDR[i].U_Ccode == code)
            $scope.addressarray.push($rootScope.customer.ADDR[i]);
        }
        console.log($scope.addressarray);
   }

   $scope.setaddress = function(name)
   {
         for (var i=0; i<$scope.addressarray.length; i++) {
          if($scope.addressarray[i].U_AddrN == name)
          {
                $scope.data.SQTO[0].U_Addr1 =$scope.addressarray[i].U_Addr1;
                $scope.data.SQTO[0].U_Addr2 =$scope.addressarray[i].U_Addr2;
                $scope.data.SQTO[0].U_Addr3 =$scope.addressarray[i].U_Addr3;
                $scope.data.SQTO[0].U_Addr4 =$scope.addressarray[i].U_Addr4;
                $scope.data.SQTO[0].U_Addr5 =$scope.addressarray[i].U_Addr5;
                $scope.data.SQTO[0].U_Addr6 =$scope.addressarray[i].U_Addr6;
            }
        }
   }

    $scope.data = {
        "SQTO": [{
            "U_Qno": "1103",
            "U_Status": "OPEN",
            "U_Uname": $scope.UserData[0].Code,
            "U_Cdate": "20-03-2016",
            "U_Qdate1": "20-03- 2016",
            "U_Qdate2": "20-03-2016",
            "U_Ccode": "0005",
            "U_Cname": "RAM",
            "U_CPeriod1": "20-03-2016",
            "U_CPeriod2": "20-03 -2018",
            "U_Pcode": "RRD1",
            "U_AddrN": "ajithnagar",
            "U_Addr1": "annanagar",
            "U_Addr2": "annanagar",
            "U_Addr3": "annanagar",
            "U_Addr4": "annanagar",
            "U_Addr5": "annanagar",
            "U_Addr6": "annanagar",
            "U_TelNo": "5210422",
            "U_FaxNo": "52120422",
            "U_Mno": "9629476950",
            "U_Email": "madeswaran1986@gmail.com",
            "U_Remarks": "madeswaran1986@gmail.com"
        }],
        "SQTOGEN": [{
            "U_Stype": "General",
            "U_Conti": "56",
            "U_Country": "India",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 2 %",
            "U_Remarks": "Testing data values"
        }, {
            "U_Stype": "Sub",
            "U_Conti": "20",
            "U_Country": "Signapore",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 4 %",
            "U_Remarks": "Testing data values2"
        }, {
            "U_Stype": "General",
            "U_Conti": "56",
            "U_Country": "India",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 2 %",
            "U_Remarks": "Testing data values"
        }, {
            "U_Stype": "Sub",
            "U_Conti": "20",
            "U_Country": "Signapore",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 4 %",
            "U_Remarks": "Testing data values2"
        }],
        "SQTOADD": [{
            "U_Ctype": "General",
            "U_Continent": "56",
            "U_Country": "India",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 2 %",
            "U_Remarks": "Testing data values"
        }, {
            "U_Ctype": "Sub",
            "U_Continent": "20",
            "U_Country": "Signapore",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 4 %",
            "U_Remarks": "Testing data values2"
        }, {
            "U_Ctype": "General",
            "U_Continent": "56",
            "U_Country": "India",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 2 %",
            "U_Remarks": "Testing data values"
        }, {
            "U_Ctype": "Sub",
            "U_Continent": "20",
            "U_Country": "Signapore",
            "U_City": "namakkal",
            "U_Currency": "INR",
            "U_EQGroup": "medical",
            "U_Rate": "56",
            "U_UOM": "UNIT",
            "U_GST": "GST 4 %",
            "U_Remarks": "Testing data values2"
        }]
    }

    $scope.g_add = function () {

        $scope.gen = {
            "U_Stype": $scope.g_Stype,
            "U_Conti": angular.copy($scope.g_Continent.U_Conti),
            "U_Country": angular.copy($scope.g_Country.U_Country),
            "U_City": angular.copy($scope.g_city.U_City),
            "C_Conti": $scope.g_Continent,
            "C_Country": $scope.g_Country,
            "C_City": $scope.g_city,
            "U_Currency": $scope.g_curency,
            "U_EQGroup": $scope.g_egroup,
            "U_Rate": $scope.g_rate,
            "U_UOM": $scope.g_uom,
            "U_GST": $scope.g_gst,
            "U_Remarks": $scope.g_remark,
        };
        $scope.data.SQTOGEN.push(angular.copy($scope.gen));
        $scope.g_reset();
    }

    $scope.g_reset = function () {

            $scope.g_Stype = "";
            $scope.g_Continent= "";
            $scope.g_Country= "";
            $scope.g_city= "";
            $scope.g_curency= "";
            $scope.g_egroup= "";
            $scope.g_rate= "";
            $scope.g_uom= "";
            $scope.g_gst= "";
            $scope.g_remark= "";
        
        
    }


    $scope.g_edit = function(i)
    {
       // alert(i);
        $scope.data.SQTOGEN[i].edit = true;
    }
    $scope.g_ok = function(i)
    {
       console.log( $scope.data.SQTOGEN[i].E_Conti);
        $scope.data.SQTOGEN[i].edit = false;
        $scope.data.SQTOGEN[i].U_Conti= angular.copy( $scope.data.SQTOGEN[i].E_Conti.U_Conti);
        $scope.data.SQTOGEN[i].U_Country= angular.copy( $scope.data.SQTOGEN[i].E_Country.U_Country);
        $scope.data.SQTOGEN[i].U_City= angular.copy( $scope.data.SQTOGEN[i].E_City.U_City);

        $scope.data.SQTOGEN[i].C_Conti= angular.copy( $scope.data.SQTOGEN[i].E_Conti);
        $scope.data.SQTOGEN[i].C_Country= angular.copy( $scope.data.SQTOGEN[i].E_Country);
        $scope.data.SQTOGEN[i].C_City= angular.copy( $scope.data.SQTOGEN[i].E_City);

       
    }

    $scope.g_del = function(i)
    {
        //alert(i);
        $scope.data.SQTOGEN.splice(i, 1); 
    }
     $scope.g_copy = function(i)
    {  
            $scope.g_Stype = $scope.data.SQTOGEN[i].U_Stype;
            $scope.g_Continent= $scope.data.SQTOGEN[i].C_Conti;
            $scope.g_Country= $scope.data.SQTOGEN[i].C_Country;
            $scope.g_city= $scope.data.SQTOGEN[i].C_City;
            $scope.g_curency= $scope.data.SQTOGEN[i].U_Currency;
            $scope.g_egroup= $scope.data.SQTOGEN[i].U_EQGroup;
            $scope.g_rate= $scope.data.SQTOGEN[i].U_Rate;
            $scope.g_uom= $scope.data.SQTOGEN[i].U_UOM;
            $scope.g_gst= $scope.data.SQTOGEN[i].U_GST;
            $scope.g_remark= $scope.data.SQTOGEN[i].U_Remarks;
    }




    //add-on functions
    
    $scope.a_add = function () {

        $scope.add = {
            "U_Ctype": $scope.a_Ctype,
            "U_Continent": $scope.a_Continent.U_Conti,
            "U_Country": $scope.a_Country.U_Country,
            "U_City": $scope.a_city.U_City,
            "C_Conti": $scope.a_Continent,
            "C_Country": $scope.a_Country,
            "C_City": $scope.a_city,
            "U_Currency": $scope.a_curency,
            "U_EQGroup": $scope.a_egroup,
            "U_Rate": $scope.a_rate,
            "U_UOM": $scope.a_uom,
            "U_GST": $scope.a_gst,
            "U_Remarks": $scope.a_remark,
        };
        $scope.data.SQTOADD.push(angular.copy($scope.add));
        $scope.a_reset();
    }

    $scope.a_reset = function () {

            $scope.a_Ctype = "";
            $scope.a_Continent= "";
            $scope.a_Country= "";
            $scope.a_city= "";
            $scope.a_curency= "";
            $scope.a_egroup= "";
            $scope.a_rate= "";
            $scope.a_uom= "";
            $scope.a_gst= "";
            $scope.a_remark= "";
        
        
    }


    $scope.a_edit = function(i)
    {
       // alert(i);
        $scope.data.SQTOADD[i].edit = true;
    }
    $scope.a_ok = function(i)
    {
        //alert(i);
        $scope.data.SQTOADD[i].edit = false;
        
        

        $scope.data.SQTOADD[i].U_Continent= angular.copy( $scope.data.SQTOADD[i].Ea_Conti.U_Conti);
        $scope.data.SQTOADD[i].U_Country= angular.copy( $scope.data.SQTOADD[i].Ea_Country.U_Country);
        $scope.data.SQTOADD[i].U_City= angular.copy( $scope.data.SQTOADD[i].Ea_City.U_City);

        $scope.data.SQTOADD[i].C_Conti= angular.copy( $scope.data.SQTOADD[i].Ea_Conti);
        $scope.data.SQTOADD[i].C_Country= angular.copy( $scope.data.SQTOADD[i].Ea_Country);
        $scope.data.SQTOADD[i].C_City= angular.copy( $scope.data.SQTOADD[i].Ea_City);

    }

    $scope.a_del = function(i)
    {
        //alert(i);
        $scope.data.SQTOADD.splice(i, 1); 
    }
     $scope.a_copy = function(i)
    { 
            $scope.a_Ctype = $scope.data.SQTOADD[i].U_Ctype;
            $scope.a_Continent= $scope.data.SQTOADD[i].C_Conti;
            $scope.a_Country= $scope.data.SQTOADD[i].C_Country;
            $scope.a_city= $scope.data.SQTOADD[i].C_City;
            $scope.a_curency= $scope.data.SQTOADD[i].U_Currency;
            $scope.a_egroup= $scope.data.SQTOADD[i].U_EQGroup;
            $scope.a_rate= $scope.data.SQTOADD[i].U_Rate;
            $scope.a_uom= $scope.data.SQTOADD[i].U_UOM;
            $scope.a_gst= $scope.data.SQTOADD[i].U_GST;
            $scope.a_remark= $scope.data.SQTOADD[i].U_Remarks;
    }
    

    //resetall field
    $scope.resetall = function()
    {
             $scope.data = {
            "SQTO": [{
                "U_Qno": "",
                "U_Status": "",
                "U_Uname": "",
                "U_Cdate": "",
                "U_Qdate1": "",
                "U_Qdate2": "",
                "U_Ccode": "",
                "U_Cname": "",
                "U_CPeriod1": "",
                "U_CPeriod2": "",
                "U_Pcode": "",
                "U_AddrN": "",
                "U_Addr1": "",
                "U_Addr2": "",
                "U_Addr3": "",
                "U_Addr4": "",
                "U_Addr5": "",
                "U_Addr6": "",
                "U_TelNo": "",
                "U_FaxNo": "",
                "U_Mno": "",
                "U_Email": "",
                "U_Remarks": ""
            }],
            "SQTOGEN": [],
            "SQTOADD": []
        };
    }

    $scope.formsavedata = function(data)
    {
        for (var i=0; i<data.SQTOGEN.length; i++) {
          delete data.SQTOGEN[i].C_Conti;
          delete data.SQTOGEN[i].C_Country;
          delete data.SQTOGEN[i].C_City;

          delete data.SQTOGEN[i].E_Conti;
          delete data.SQTOGEN[i].E_Country;
          delete data.SQTOGEN[i].E_City;
          
        }

        for (var i=0; i<data.SQTOADD.length; i++) {
          delete data.SQTOADD[i].C_Conti;
          delete data.SQTOADD[i].C_Country;
          delete data.SQTOADD[i].C_City;

          delete data.SQTOADD[i].Ea_Conti;
          delete data.SQTOADD[i].Ea_Country;
          delete data.SQTOADD[i].Ea_City;

        }

        return data;

        
    }


    //validation function
    $scope.val  = function()
    {
     var retval = true;
     var errormsg = "";
        if($scope.data.SQTO[0].U_Mno=="" || typeof $scope.data.SQTO[0].U_Mno==="undefined")
        {
            retval = false;
            errormsg = errormsg+". Kindly Enter valid Mobile Number<br/>";
        }
         if($scope.data.SQTO[0].U_Qdate1=="" || typeof $scope.data.SQTO[0].U_Qdate1==="undefined" || $scope.data.SQTO[0].U_Qdate2=="" || typeof $scope.data.SQTO[0].U_Qdate2==="undefined" )
        {
            retval = false;
            errormsg = errormsg+". Kindly Select Quote Validity Date<br/>";
        }
        if($scope.data.SQTO[0].U_CPeriod1=="" || typeof $scope.data.SQTO[0].U_CPeriod1==="undefined" || $scope.data.SQTO[0].U_CPeriod2=="" || typeof $scope.data.SQTO[0].U_CPeriod2==="undefined" )
        {
            retval = false;
            errormsg = errormsg+". Kindly Select Contract Period Date<br/>";
        }
        if($scope.data.SQTO[0].U_Cdate=="" || $scope.data.SQTO[0].U_Cdate=="undefined")
        {
            retval = false;
             errormsg = errormsg+". Kindly Select Create Date<br/>";//alert("Kindly");
           // bootbox.alert("Hello world!", null);
        }
        if($scope.data.SQTO[0].U_Ccode=="" || $scope.data.SQTO[0].U_Ccode=="undefined")
        {
            retval = false;
            errormsg = errormsg+". Kindly  Select Customer Code<br/>";//alert("Kindly");alert("Kindly ");
        }
        if(errormsg!="")
            bootbox.alert("<div style='color:red'>"+errormsg+"</div>", null);
        return retval;
    };


    $scope.resetall();
    //save service call
    $scope.save = function()
    {
    
    if($scope.val())
    {
        $scope.savelable = "Loading..";
        $scope.savebtn = true;
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var parms = encodeURIComponent(JSON.stringify($scope.formsavedata($scope.data)));
        $http.post("http://119.73.138.58:82/ICSB.asmx/SalesQuotationAdd", "value=" + parms, config)
   .then(
       function (response) {
           // success callback
           console.log(response.data);
           if (response.data.VALIDATE[0].Status == "Ture") {
              $scope.savelable = "Save";
              $scope.savebtn = false;
              $scope.resetall();
              alert(response.data.VALIDATE[0].Msg);
           }
            else
            {
               alert(response.data.VALIDATE[0].Msg);
                $scope.savelable = "Save";
                $scope.savebtn = false;
               }
       },
       function (response) {
           // failure callback

      
       }
    );
    
     }
    }

} ]);

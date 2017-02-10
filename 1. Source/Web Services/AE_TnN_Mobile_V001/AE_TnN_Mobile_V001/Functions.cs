
using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using Newtonsoft.Json;
using System.Configuration;
using System.Data.SqlClient;
using System.Data.Common;
using System.Net.Mail;
using System.Net.Mime;
using System.IO;


namespace AE_TnN_Mobile_V001
{
    public class Functions
    {

        public string ds2json(DataSet ds)
        {
            return JsonConvert.SerializeObject(ds, Formatting.Indented);
        }
        public string dt2json(DataTable ds)
        {
            return JsonConvert.SerializeObject(ds, Formatting.Indented);
        }
        public string String2json(string str)
        {
            return JsonConvert.SerializeObject(str, Formatting.Indented);
        }
        public DataSet jsontodata(string sjon)
        {
            DataSet data = JsonConvert.DeserializeObject<DataSet>(sjon);
            return data;
        }

    }

}
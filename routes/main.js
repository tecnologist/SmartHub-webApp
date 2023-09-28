

module.exports = function(app) {

 //get request action code to render home page 
 app.get("/",function(req, res){
   res.render("index.html")
   });

 // get request action to render add device page
 app.get("/devices",function(req, res){
   res.render("device.html")
   });

 //get request action  code to render devie control page
 app.get("/device-control",function(req, res){

    // query database to get all the books
    let sqlquery1 = "SELECT * FROM devices";
    // execute sql query, with query statement as input parameter to query database for all devices
    db.query(sqlquery1, (err, result) => {
    if (err) 
    {
    return console.error(err.message);
    }
    else
    {  //render device control page as output parameter &  result output object from database interaction 
       //assigned to variable and used as second parameter to be passed to front end, for EJS to render
       res.render("device-control.html", {availabledevices: result});  
    }
   
    });
     
  });


  //get request action codefor delete device page
  app.get("/delete-device",function(req, res){
    // query database to get all the books
    let sqlquery= "SELECT * FROM devices";
    // execute sql query, with query statement  as input parameter to query database, to get all devices
    db.query(sqlquery, (err, result) => {
    if (err) 
    {
      return console.error(err.message);
    }
    else
   {
    //render delete device page output parameter & result output object from database interaction is assigned 
    //to a variable and used as second out parameter to be passed to front end , for EJS code to render.
    res.render("delete-device.html", {availabledevices: result});
        
    }
   });
     
 });

  //POST request action code for add devices page
  app.post("/devices",(req,res)=>{        
    
     //mysql insert statement with value parameters to be replaced 
    let sqlquery = "INSERT INTO devices (name,devicetype,status,volume) VALUES (?,?,?,?)";
    
    //array initialised and has user submitted form data values assigned to req.body objects
    let newrecord = [req.body.name, req.body.devicetype,req.body.status,req.body.volume];

    // adds values to mysql query statement input parameters with req.body values of array
    //execute sql query, with query statement as input parameter along with array variable , err and result objects
    db.query(sqlquery, newrecord, (err, result) => {
  
      if (err) 
      {
         return console.error(err.message);
      }
      else 
      {  
       //render delete device EJS page as output parameter & new record array from database interaction is assigned 
       //to a variable and used as second out parameter to be passed to front end , for EJS template to render.
        res.render("device.ejs",{newdevice: newrecord});
      };
    
    });
  });


 // get request action code for device status page
app.get("/device-status", function(req, res) {
    // query database statements assigned to variable to get all the books
    let sqlquery = "SELECT * FROM devices";
    // execute sql query with mysql query statement to get all devices as input parameter
    db.query(sqlquery, (err, result) => {
    if (err) {
    res.redirect("/");
    }
    //render device status page, used as output parameter & result output object from database interaction is assigned 
     //to a variable and used as second output parameter,so to be passed to front end , for EJS code to render.
    res.render("device-status.html", {availabledevices: result});
   
    });
    
  });


  //POST request action code renders device control page
  app.post("/device-control",(req,res)=>{        
   // mysql query statement to update device's attribute values in database table
   sqlquery = "UPDATE devices SET status=?,volume=? WHERE name= ? ";
   //array initialised and has user submitted form data values assigned to req.body objects
   let newrecord = [req.body.status,req.body.volume,req.body.id,req.body.devicetype];
   // adds values to mysql query statement input parameters with req.body values of array
   //execute sql query, with query statement as input parameter along with array variable , err and result objects
   db.query(sqlquery,newrecord, (err, result) => {
    if (err) 
    {
        return console.error(err.message);
    }
    else
    {
     //render device control EJS page as output parameter & new record array from database interaction is assigned 
    //to a variable and used as second output parameter to be passed to front end , for EJS template to render.
    res.render("device-control.ejs", {newdevice: newrecord});
    
    }

   });
 });


  //Post request action code for delete device page
  app.post("/delete-device",(req,res)=>{        
    // mysql statement to  delete device by name
   sqlquery = "DELETE FROM devices WHERE name= ? ";
    // mysql statement to get all devices
   sqlquery1='SELECT *FROM devices';
    //req.body object contains form data , assigned to array variable
   let newrecord = [req.body.name];
   //excute sql query through nested loop , outerloop with two input parameters, sql query with name parameters and
   // req.body object of array variable to add device name value to sql statement is second input parameter, second loop 
   //with sql query to get all remaining devices , once outer loop does a delete interaction with database
   db.query(sqlquery,newrecord,(err, result1) => {
      db.query(sqlquery1,(err1, result2) => {
        if (err) 
        {
         return console.error(err.message,err1.message);
        }
         
        else{
            // renders delete device ejs, which is output parameter along with array variable passing name of deleted device
            // to EJS template and also result output object  from database interaction,with remaining devices in database table
            //is also passed as variable to front end .
            res.render("delete-device.ejs",{newdevice:newrecord,availabledevices:result2});
             
        };
      })
           
    });

  });
  }
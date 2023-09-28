 /*********this is JS page for device control page*******/

 //this function displays device status selector and hides volume selector when called
 //also resets device status selector back to Select option when user changes device selection
function onload(){
   
      document.getElementById("hideStatus").style.display="block";
      document.getElementById("status").value="Select";
      document.getElementById("volume").style.display="none"; 
}
  
  // this is form validator 
function validate() { 

  //this code checks user has selected a device when user clicks form submit button
    if( document.myForm.id.value == "no-selection" ) {
        alert( "Please select a device!" );
        document.myForm.id.focus() ;
        return false;
    }

        
    // this code checks user has selected a device status 
    if( document.myForm.status.value == "Select" ) {
        alert( "Please select a status!" );
        document.myForm.status.focus() ;
        return false;
    }
        
    // this code checks user has selected volume level when user turn Music player ON and submits form
    if(document.myForm.devicetype.value=="Music Player"&&
        document.myForm.status.value==1 && 
        document.myForm.volume.value == "NULL" ) {
        alert( "Please select volume level !" );
        document.myForm.volume.focus() ;
        return false;
    }
  
}

//this function sets different device status for Curtains and other device types.
//updates current device status, of user selected device
function GetSelectedValue(deviceName) {
    //function call to display device status selection option when user selects device
    onload();

    //variables declared,are set values for device name,type,status .values here update from EJS code of device selector
    var selectedText = deviceName.options[deviceName.selectedIndex].innerHTML;
    var status= deviceName.options[deviceName.selectedIndex].id;
    var devicetype=deviceName.options[deviceName.selectedIndex].title;
     
    //code here updates status selector with different options for curtians and for other devices
    if(devicetype=="Curtains")

    {   //code here sets status selector options to open and close when user selects curtains device
        document.getElementById("OFF").innerHTML="CLOSE";
        document.getElementById("ON").innerHTML="OPEN"
        //code here coverts Binary status values  for variable 
        if(status==0)
        {
            status= "CLOSED";
        }

        else
        { 
             status="OPEN";

        }
    }

    else
    {
        //code here sets status selector options to ON and OFF when user selects any other device types to Curtains
        document.getElementById("OFF").innerHTML="OFF";
        document.getElementById("ON").innerHTML="ON"
        if(status==0)
        {
            status= "OFF"
        }
        else
        { 
            status="ON"
        
        }

    }
  
     document.getElementById("Dtype").innerHTML= devicetype;
        
     //code here displays a message to user with selected device's name, type and current status
    if(document.myForm.id.value!="no-selection")
    {
        
        document.getElementById("message").innerHTML=
        "your smart <strong id='Dtype1'> </strong> device <strong id='Dname'>"
        +"</strong> is currently:<strong id='Dstatus'> </strong>";
      
    }
     //code here hides device type, status selectors of form.
    else{
        document.getElementById("hideStatus").style.display= "none";
    }
    // this block of code sets device parameter values in the message displayed to user .
    document.getElementById("Dstatus").innerHTML= status ; 
    document.getElementById("Dname").innerHTML= selectedText;
    document.getElementById("Dtype1").innerHTML= devicetype;
        
        
}
  
//function to display or hide device volume selector 
function ChangeVolume(){
    var devicetype=document.getElementById("Dtype").innerHTML;
    var status= document.getElementById("status").value;

    // code here hides volume selector when device selected is not Music Player
    if(devicetype!="Music Player")
    {
            
        document.getElementById("volume").style.display="none"; 
            
    }
        
    else{
        // code here hides volume selector when Music Player's selected status is OFF
        if(status!=1)
        {
            document.getElementById("volume").style.display="none";
        }
        //code here displays volume selector when Music Player status is Turned ON.
        else   
        {
            document.getElementById("volume").style.display="block";
            
        }
           
    }

}
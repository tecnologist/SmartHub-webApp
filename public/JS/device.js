/*********this is JS page for add device page*******/

// code to hide volume level select option of form for Music Player devicetype
function hideSelect(){  
    document.getElementById("myDIV").style.display="none";
}     

 hideSelect();
// form validation code 
function validate() {
   // code to check if user added a device name?
   if( document.myForm.name.value == "" ) {
      alert( "Please provide device name!" );
      document.myForm.name.focus() ;
      return false;
    }
   // code to check user input for devicename less than 6 charecters
   if( document.myForm.name.value.length <6  ) {
      
      alert( "Device name should be minimum 6 charecters long" );
      document.myForm.name.focus() ;
      return false;
    }

   // code to check a device type is selected.
   if( document.myForm.devicetype.value == "no-selection" ) {
      document.myForm.devicetype.focus() ;
      alert( "Please select your device type" );
      return false;
    }
   
   // code to check a device status is selected
   if( document.myForm.status.value == "no-selection" ) {
      document.myForm.status.focus() ;
      alert( "Please set your device to turn ON or OFF" );
      return false;
    }

    // code to check a volume level is selected
   if(document.myForm.devicetype.value=="Music Player"&& 
      document.myForm.status.value == 1&& 
      document.myForm.status.value=="NULL"){
      document.myForm.volume.focus() ;
      alert("Please select volume level");
      return false;
    }

    return( true );
}
// code to switch  device status options based on chosen device type
function GetSelectedValue(deviceName){

 var selectedText = deviceName.options[deviceName.selectedIndex].innerHTML;
   //code her changes device status options when curtains devicetype selected
   if(selectedText=="Curtains")
      {
        document.getElementById("ON").innerHTML="OPEN";
        document.getElementById("OFF").innerHTML="CLOSE";
    
    }
   //code changes device status options when other device types selected
  else{
            
        document.getElementById("ON").innerHTML="ON";
        document.getElementById("OFF").innerHTML="OFF";
    }
     //call back function to display or hide volume selection options when Music player device selected.
     GetSelectedStatus();
}
//code displays volume level select options when Music player status is ON but hides if its otherwise
function GetSelectedStatus() {
   var selectedText=document.myForm.devicetype.value;
   var status= document.myForm.status.value;
 
 //code here displays volume selector with volume level options when Music Player is selected & turned ON.
 if(selectedText=="Music Player"&& status==1){
    
            document.getElementById("myDIV").style.display="block";
            document.getElementById("Vlabel").innerHTML="Volume :";
            document.getElementById("Selection").innerHTML="Select";
            document.getElementById("Hi").innerHTML="HIGH";
            document.getElementById("Med").innerHTML="MEDIUM";
            document.getElementById("Low").innerHTML="LOW";
            
    }
  //code here hides volume selector when Music Player device is Turned OFF or other device type selected
  else {
            hideSelect();
           
    } 
}
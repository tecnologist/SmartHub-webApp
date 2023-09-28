/*********this is JS page for device status page*******/



//This code is called everytime user selects a device
function GetSelectedValue(deviceName) {
  //variables declared,contain values for device name,type,status &volume.values update from EJS code of device selector
  var selectedText = deviceName.options[deviceName.selectedIndex].innerHTML;
  var selectedDevice=selectedDevice=deviceName.options[deviceName.selectedIndex].id;
  var selectedValue = deviceName.value;
  var selectedVolume= deviceName.options[deviceName.selectedIndex].title;

     //code here converts status values of curtains devictype to either open or close in device table when selected.
     //sets device status to either ON or OFF for other device types.
    if(selectedDevice!="Curtains")
      {
         if(selectedValue==1){ selectedValue="ON"}
         else{ selectedValue="OFF"}
      }
    else
      {
         if(selectedValue==1){ selectedValue="OPEN"}
         else{ selectedValue="CLOSED"}
      }
     //code here displays volume column and its status values in device status table when 
     //Music player device type selected and is ON
    if(selectedDevice=="Music Player"&&selectedValue=="ON")
      {
         document.getElementById("hide").style.display="block";
         document.getElementById("DVolume").style.display="block";
         document.getElementById("DVolume").innerHTML=selectedVolume;
      }
     //code here hides volume column of device status table when Music player device is off
     //or when other device types selected
    else
      {
         document.getElementById("hide").style.display="none";
         document.getElementById("DVolume").style.display="none"; 
      }
     //code here sets device status table blank when no device selected
    if(selectedText=="Select")
      {
         selectedText="";
         selectedDevice="";
         selectedValue="";
      }

      //code here displays device name, type and status values in device status table when user selects a device.
      document.getElementById("Dname").innerHTML= selectedText;
      document.getElementById("Devtype").innerHTML= selectedDevice;
      document.getElementById("Dstatus").innerHTML= selectedValue;
    
}
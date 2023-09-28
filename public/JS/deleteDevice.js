/************ this is JS page to execute for delete device page************/

  
  //function code for form validation & to display modal to confirm device deletion
function confirm(modal){
  var smartDevice= document.myForm.name.value;
  
  //form validation code to confirm device selection
  if(smartDevice=="no-selection")
  {
    alert( "Please select a device from list!" );
    document.myForm.name.focus() ;
    return false;
  }
  
  //code here displays modal and device name within device deletion message
  if(modal.value=="confirm")
   {
    document.getElementById("smartDevice").innerHTML=smartDevice;
    document.getElementById('id01').style.display='block';
   }

   //code here hides modal 
   else if(modal.value=="CANCEL")
   {
    document.getElementById('id01').style.display='none';
   }
   else if(modal.value=="DELETE")
   {
    document.getElementById('id01').style.display='none';
   }


}
   
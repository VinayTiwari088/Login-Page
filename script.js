function validation(){
   
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;


   if( username =="Vinay" && password =="1234")
   {
      alert("Login successfull");

   }
   else{      
      alert("Invalid username and password")
   }
}

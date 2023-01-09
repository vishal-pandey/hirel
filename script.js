window.onload = () =>{

  let name = document.querySelector('input[name="name"]')
  let email = document.querySelector('input[name="email"]')
  let mobile = document.querySelector('input[name="mobile"]')
  let password = document.querySelector('input[name="password"]')
  
  let referralButton = document.querySelector(".referral-submit")
  let loginButton = document.querySelector(".login-button");

  
  if(referralButton) {
    referralButton.onclick = ()=>{
      let errStr = ""
      if(name.value == "") {
        errStr += "All Fields are mandatory <br>"
      } else {
        errStr += ""
      }
  
      if(!validateEmail(email.value)) {
        errStr += "Please enter a valid email id <br>"
      } else {
        errStr += ""
      }
  
      if(!validateMobile(mobile.value)) {
        errStr += "Please enter 10 digit mobile number <br>";
      } else {
        errStr += ""
      }
      // if(errStr != ""){
        document.querySelector(".error").innerHTML = errStr
      // }
    }
  }

  if(loginButton) {
    loginButton.onclick = ()=>{
      console.log("Here we are")
      let errStr = ""
  
      if(!validateEmail(email.value)) {
        errStr += "Please enter a valid email id <br>"
      } else {
        errStr += ""
      }
      
      if(password.value == "") {
        errStr += "Please enter password <br>"
      } else {
        errStr += ""
      }
      
      document.querySelector(".error").innerHTML = errStr

      if(errStr == "") {
        window.location.href = "./auth.html"
      }
      // }
    }    
  }

  
}


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const validateMobile = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(
      /^\d{10}$/
    );
}
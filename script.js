window.onload = () =>{

  let name = document.querySelector('input[name="name"]')
  let email = document.querySelector('input[name="email"]')
  let mobile = document.querySelector('input[name="mobile"]')
                      


  
  document.querySelector(".referral-submit").onclick = ()=>{
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
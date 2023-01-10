window.onload = () =>{

  let name = document.querySelector('input[name="name"]')
  let email = document.querySelector('input[name="email"]')
  let mobile = document.querySelector('input[name="mobile"]')
  let other = document.querySelector('select[name="other"]')
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

      if(errStr == "") {
        // console.log(name.value)
        // console.log(email.value)
        // console.log(mobile.value)
        // console.log(other.value)
        // console.log(referralButton.getAttribute("data-formType"))

        let url = 'http://3.111.78.198:3000'

        let data = {
          "name": name.value,
          "email": email.value,
          "mobile": mobile.value,
          "other": other.value, 
          "formType": referralButton.getAttribute("data-formType")
        }

        console.log(data)

        fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.status) {
            window.location.href = "./auth.html"
          } else {
            // window.location.href = "./auth.html"
          }
        })


      }
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
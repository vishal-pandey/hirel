window.onload = ()=>{
    console.log("Hello world")

    let bookDemo = document.querySelector("#bookDemo")
    console.log(bookDemo)
    bookDemo.onclick = () =>{
        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        let phone = document.querySelector("#phone").value
        let company = document.querySelector("#company").value
        let url = 'https://offer-letter-generator.herokuapp.com/demo/'

        if(name == "" || email == "" || phone == "" || company == "") {
            alert("All input fields are required!!")

            return
        }

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phone, company}) // body data type must match "Content-Type" header
          })
          .then(data => data.json())
          .then((data)=>{
            if (data.accepted.length) {
                alert("Thank you for booking the demo, we will reach out to you shortly!!!")
                window.location.href = "/"
            }
          });
    }

}
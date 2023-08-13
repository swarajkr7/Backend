var Email="Swaraj853@gmail.com"
var Pass="Swaraj@123"
document.querySelector("form").addEventListener("submit", getData)


// Get Data from the User from UI
function getData(event) {
    event.preventDefault();
    let payload = {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value
    }
    console.log("WORKING")
   
    
    login(payload);
}



function login(payload) {
       
    console.log("Working");
    console.log(Email)
      if((payload.email===Email)&&(payload.pass===Pass)){
        
        window.open("news.html");
        localStorage.setItem("Role","Admin");

      }   

    }
document.querySelector("form").addEventListener("submit", getData)

// Get Data from the User from UI
function getData(event) {
    event.preventDefault();
    let payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value,
        age: document.getElementById("age").value
    }
    // 
    
    postData(payload)
}

async function postData(payload) {
        let data = await fetch("http://localhost:9999/authors/register", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        console.log("Hogaya theek")
    }
document.querySelector("form").addEventListener("submit", getData)

// Get Data from the User from UI
function getData(event) {
    event.preventDefault();
    let payload = {
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value
    }
    // 
    
    login(payload)
}

async function login(payload) {
        let data = await fetch("https://friendly-kit-bull.cyclic.app/authors/login", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            window.open("news.html");
            localStorage.setItem("Token",res.token)
            localStorage.setItem("authorId",res.authorID)
            localStorage.setItem("name",res.name)
            console.log(res.authorID);
        })
        .catch(err=>console.log(err))
        localStorage.setItem("Role","Author");

    }
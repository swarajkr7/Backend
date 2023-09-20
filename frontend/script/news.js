// Handle Login Popup
const loginPopup=()=>{
    console.log("popup ho raha hai")
    let popup= document.querySelector(".popupContainer")
    popup.style.display="block"

    let main=document.querySelector("#parentDiv")
    main.style.filter="blur(100px)"

    
}

function reload(){
    window.open("news.html")
}


var Role=localStorage.getItem("Role")

if(Role=="Admin"){
    let a=document.createElement("a")
    a.href="authors.html"
    a.innerText="Authors"
    let li=document.createElement("li")
    li.append(a)
    document.querySelector("#List").append(li); 
}


document.querySelector("form").addEventListener("submit", getData)

// Get Data from the User from UI
function getData(event) {
    event.preventDefault();
    let payload = {
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
        img_link: document.getElementById("image").value,
        content: document.getElementById("content").value
    }
    // 
    
    postData(payload)
}

async function postData(payload) {
        let data = await fetch("http://localhost:9999/news/create", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("Token")
            },
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        console.log("Hogaya theek")
    }

    
let array = [];

var Id=localStorage.getItem("authorId")
console.log(Id)

var Name=localStorage.getItem("name")
document.querySelector("#userName").append(Name)

var Role=localStorage.getItem("Role")

if(Role=="Admin"){
    Id="";
}
call();


// Display data on the dashboard
function call() {
    fetch(`http://localhost:9999/news/${Id}`, {
        headers: {
            "Authorization": localStorage.getItem("Token")
        }
    }).then(res => res.json()).then(res => {
        console.log(res);
        array = res;

        display(array);

        function display(array){
            array?.map((elem,index) => {    
            let div1 = document.createElement('div');
            div1.innerText = ++index;
            let div2 = document.createElement('div');
            div2.innerText = elem.date;
            let div3 = document.createElement('div');
            div3.innerText = elem.title;
            let div4 = document.createElement('div');
            div4.innerText = elem.author;
            let div5 = document.createElement('div');
            div5.innerText = elem.category;
            let btn1 = document.createElement('button');
            btn1.style.backgroundColor = "blue";
            btn1.innerText="Update"
            btn1.style.webkitTextFillColor="White"
            btn1.style.padding = "10px 10px";
            btn1.style.border = "0px";
            btn1.style.borderRadius = "6px";
            btn1.addEventListener("click", () => {
                document.querySelector("#Uauthor").value=elem.author
                document.querySelector("#Utitle").value=elem.title
                document.querySelector("#Udate").value=elem.date
                document.querySelector("#Ucategory").value=elem.category
                document.querySelector("#Uimage").value=elem.img_link
                document.querySelector("#Ucontent").value=elem.content
                loginPopup()
            })
            document.querySelector("#Ubutton").addEventListener("click",()=>{
                UpdateNews(elem._id)
            })
            let Update = document.createElement('a');
            if(Role=="Admin"){
                let btn2 = document.createElement('button');
                let remove = document.createElement('a');
                btn2.style.backgroundColor = "blue";
                btn2.style.padding = "10px 10px";
                btn2.style.border = "0px";
                btn2.style.borderRadius = "5px";
                btn2.addEventListener("click", () => {
                    deleteNews(elem._id);
                })
                remove.innerText = "Delete";
                remove.style.textDecoration = "none";
                remove.style.color = "white";
                btn2.append(remove);
                var div6 = document.createElement('div');
                div6.append(btn1, btn2);
            }else{
                var div6 = document.createElement('div');
                div6.append(btn1);
                console.log("Else wala block kam kr raha hai")
            }
             
            
            document.querySelector("#realTimeUpdate").append(div1, div2, div3, div4, div5, div6);
        });


   }


   const deleteNews=(newsId)=>{
    fetch(`http://localhost:9999/news/delete/${newsId}`,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Authorization":localStorage.getItem("Token")
        },
    })
    
    
}


function UpdateNews(newsId) {
    let updatedPayload = {
        author: document.getElementById("Uauthor").value,
        title: document.getElementById("Utitle").value,
        date: document.getElementById("Udate").value,
        category: document.getElementById("Ucategory").value,
        img_link: document.getElementById("Uimage").value,
        content: document.getElementById("Ucontent").value
    };

    fetch(`http://localhost:9999/news/update/${newsId}`, {
        method: "PATCH",
        body: JSON.stringify(updatedPayload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("Token")
        },
    })
   
    .then(response => response.json())
    .then(data => {
        console.log("News updated successfully:", data);
        // Optionally, you can refresh the displayed data after update
        call();
    })
    .catch(error => {
        console.error("Error updating news:", error);
    });
}


    }).catch(err => console.log(err));
}





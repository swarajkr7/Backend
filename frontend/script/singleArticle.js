var SA = localStorage.getItem("singleArticle");
let array = [];



function singleArticle() {
    fetch(`http://localhost:9999/news/singleArticle/${SA}`, {
        headers: {
            "Authorization": localStorage.getItem("Token")
        }
    }).then(res => res.json())
    .then(res => {
        array = res;
        display(array);
    })
    .catch(err => console.log(err));
}

function display(array) {
    array?.map((elem) => {    
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.img_link;  
        let h1 = document.createElement("h1");
        h1.innerHTML = elem.title;
        let text=document.createElement("div")
        let p=document.createElement("p")
        p.innerText=elem.content
        text.append(p)
        div.append(h1,img,text); 
        document.querySelector("#contentDiv").append(div);
    });
}


singleArticle();

var Role=localStorage.getItem("Role")

if(Role=="Admin"){
    let a=document.createElement("a")
    a.href="authors.html"
    a.innerText="Authors"
    let li=document.createElement("li")
    li.append(a)
    document.querySelector("#List").append(li);
}


let authorArr=[];

authorCall();

function authorCall(){
    fetch(`http://localhost:9999/authors`,).then(res => res.json()).then(res => {
        console.log(res);
        authorArr = res;

        authorDisplay(authorArr);

        function authorDisplay(authorArr){
            authorArr?.map((elem,index)=>{
                let p=document.createElement("p");
                p.innerHTML=elem.name;
                let button=document.createElement("button");
                button.innerText="Delete";
                button.addEventListener("click",()=>{
                    deleteAuthor(elem._id)
                    deleteAllNews(elem._id)
            
                })

                document.querySelector("#dataDiv").append(p,button)
            })

        }
        
        const deleteAuthor=(ID)=>{
            fetch(`http://localhost:9999/authors/delete/${ID}`,{
                method:"DELETE",
                headers:{
                    "Authorization":localStorage.getItem("Token")
                }
            }) 
            
            
        }

        const deleteAllNews=(ID)=>{
            console.log("Yaha tak to pahuch ja raha hai")
            fetch(`http://localhost:9999/news/Adelete/${ID}`,{
                method:"DELETE",
                headers:{
                    "Authorization":localStorage.getItem("Token")
                }
            })
            
            
        }

        });
}
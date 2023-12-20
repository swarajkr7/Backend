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
    fetch(`https://friendly-kit-bull.cyclic.app/authors`,).then(res => res.json()).then(res => {
        console.log(res);
        authorArr = res;

        authorDisplay(authorArr);
        
        function authorDisplay(authorArr){
            const container=document.querySelector("#dataDiv")
            container.innerHTML="";
            authorArr?.map((elem,index)=>{
                let p=document.createElement("p");
                p.innerHTML=elem.name;
                let button=document.createElement("button");
                button.innerText="Delete";
                button.addEventListener("click",()=>{
                    deleteAuthor(elem._id)
                    deleteAllNews(elem._id)
            
                })

                container.append(p,button)
            })

        }
        
        const deleteAuthor=async(ID)=>{
            try{
                fetch(`https://friendly-kit-bull.cyclic.app/authors/delete/${ID}`,{
                    method:"DELETE",
                    headers:{
                        "Authorization":localStorage.getItem("Token")
                    }
                }) 
                authorCall();
            }
            catch(error){
                console.log(error)
            }
            
            
        }

        const deleteAllNews=(ID)=>{
            console.log("Yaha tak to pahuch ja raha hai")
            fetch(`https://friendly-kit-bull.cyclic.app/news/Adelete/${ID}`,{
                method:"DELETE",
                headers:{
                    "Authorization":localStorage.getItem("Token")
                }
            })
            
            
        }

        });
}
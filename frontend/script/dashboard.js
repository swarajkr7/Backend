var Role=localStorage.getItem("Role")

if(Role=="Admin"){
    let a=document.createElement("a")
    a.href="authors.html"
    a.innerText="Authors"
    let li=document.createElement("li")
    li.append(a)
    document.querySelector("#List").append(li);
}
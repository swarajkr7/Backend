let array = [];
call();

function call() {
  fetch("https://friendly-kit-bull.cyclic.app/news", {
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      array = res;

      display(array);

      function display(array) {
        array?.toReversed().map((elem) => {
          let div = document.createElement("div");
          let img = document.createElement("img");
          img.src = elem.img_link;
          let tag=document.createElement("p")
          tag.className="tag"
          tag.innerText=elem.category;
          let content=document.createElement("div")
          let h2 = document.createElement("h2");
          h2.innerHTML = elem.title;
          let shortDesc= document.createElement("p");
          shortDesc.innerText=elem.content.split(' ').slice(0, 18).join(' ');
          let button = document.createElement("button");
          button.innerText = "Read More";
          button.className = "button-63";
          button.addEventListener("click", () => {
            localStorage.setItem("singleArticle", elem._id);
            window.open("singleArticle.html");
          });
          content.append(h2, shortDesc, button)
          div.append(img, tag, content);
          document.querySelector("#contentDiv").append(div);
        });
      }
    })
    .catch((err) => console.log(err));
}


setInterval(() => {
  let date = Date().toString();
  const dateContainer = document.querySelector(".date");
  dateContainer.innerText = date;
}, 1000);

console.log(date);

// Handle Date

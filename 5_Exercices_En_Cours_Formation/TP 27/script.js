const mainSelector = document.querySelector("main");
let bodySelector = document.querySelector("body");
let sectionCreation;
let boxCreation;
let testCreation;
let imgboxCreation;
let imgCreation;
let h2Creation;
let buttonCreation;

fetch('https://picsum.photos/v2/list?limit=4')
  .then((response) => {
    return response.json()
  })
  .then((photos) => {
    photos.forEach(photo => {
      createElements();
      fillElements(photo.download_url,photo.author,photo.width,photo.url);
      appendElements();
      buttonCreation.addEventListener("click", function(){
        document.location.href= photo.url;
      })  
    });
  })

function createElements() {
   sectionCreation = document.createElement("section");
   boxCreation = document.createElement("div")
   testCreation = document.createElement("div");
   h2Creation = document.createElement("h2");
   buttonCreation = document.createElement("button");
   imgboxCreation= document.createElement("div")
   imgCreation = document.createElement("img");
   boxCreation.classList.add("box");
   testCreation.classList.add("test");
   imgboxCreation.classList.add("img-box")
}

function fillElements(photoUrl, author, width) {
  console.log("hello");
  imgCreation.src = photoUrl;
  h2Creation.textContent = author;
  buttonCreation.textContent = "Visit";
}

function appendElements() {

  mainSelector.append(sectionCreation);
  sectionCreation.append(boxCreation);
  boxCreation.append(testCreation);
  boxCreation.append(imgboxCreation);
  testCreation.append(h2Creation);
  testCreation.append(buttonCreation);
  imgboxCreation.append(imgCreation);
}



// <!-- <section>
// <div class="box">
//     <div class="test">
//         <h2>Alejandro Escamilla</h2>
//         <button>Visit</button>
//     </div>
//     <div class="img-box">
//         <img src="0-600x600.jpg" alt="">
//     </div>
// </div>
// </section> -->
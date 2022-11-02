let btn = document.getElementById("btn");
let title = document.getElementById("title");
let image = document.getElementById("image");
let currentTitle = title.textContent;

btn.addEventListener("click", function handleClick() {
    title.textContent = "Mozilla is cool";
    let name = prompt("Anna nimesi ole hyvä.", "Nimi");
    if (name != null) {
      title.textContent = title.textContent + ", " + name;
      currentTitle = title.textContent;
    }
  });

image.onclick = function () {
    let mySrc = image.getAttribute("src")
    let myOtsikko = document.getElementById("title")
    let mySelain = document.getElementById("selain")
    
if (mySrc === "images/firefox-icon.png") {
    image.setAttribute("src", "images/brave-icon.png")
    title.textContent = "Is Brave even cooler?";
    document.body.style.backgroundColor = "white";


} else {
    image.setAttribute("src", "images/firefox-icon.png")
    title.textContent = "Mozilla is cool!";
    document.body.style.backgroundColor = "orange";

}
}

// image.addEventListener("mouseover", function imgHover() {
//     title.textContent = "Is Brave even cooler?";
//     image.src = "./images/brave-icon.png";
//     document.body.style.backgroundColor = "white";
//   });
  
//   image.addEventListener("mouseout", function imgHover() {
//     title.textContent = currentTitle;
//     image.src = "./images/firefoxlogo.png";
//     document.body.style.backgroundColor = "orange";
//   });




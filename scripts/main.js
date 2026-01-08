const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gear-5.webp") {
    myImage.setAttribute("src", "images/luffy.webp");
  } else {
    myImage.setAttribute("src", "images/gear-5.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    //setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `The One Piece Is Real, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `The One Piece Is Real, ${storedName}!`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

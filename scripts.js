let myInput = document.querySelector("#form-input");
let myForm = document.querySelector("#form");
let total = 0;
myForm.addEventListener("submit", function () {
  if (myInput.value != "") {
    let newElement = document.createElement("li");
    newElement.innerHTML = myInput.value;
    let myMenu = document.querySelector("#menu");
    myMenu.appendChild(newElement);
    myInput.value = "";
    total++;
    let totalCount = document.querySelector("#total-count");
    totalCount.innerHTML = total;
  } else {
    alert("type Something ...");
  }
});

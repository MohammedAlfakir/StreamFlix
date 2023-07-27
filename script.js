let inputField = document.querySelector(".input-field");
let btnGetStarted = document.querySelector(".btn-getstarted");
let showAlert = document.querySelector(".show");

btnGetStarted.onclick = function () {
  if (inputField.value == "") {
    showAlert.style.display = "inline";
    inputField.style.border = "0.1px solid #e50914";
  } else {
    inputField.style.border = "0.1px solid #81ff7157";
    showAlert.style.display = "none";
  }
};

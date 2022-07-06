function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const form = document.getElementById("#signup"); // referencing form element

// validations or errors messages
const NAME_INVALID = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const OPTION_INVALID = "Vous devez choisir une option.";
const CONDITION_INVALID = "Vous devez vérifier que vous acceptez les termes et conditions.";
const BIRTHDAY_INVALID = "Vous devez entrer votre date de naissance.";
const EMAIL_INVALID = "Veuillez saisir un format d'adresse e-mail correct";


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
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
const form = document.getElementById("signup"); // referencing form element

form.addEventListener('submit', function(stopForm) {
  let firstInput = document.getElementById("first");
  let check = /^[a-zA-Z]{3,}$/;
  
    if (firstInput.value.trim() == "") {
      let first_invalid = document.getElementById("first-invalid");
      first_invalid.innerHTML = "Le champ prénom est requis.";
      first_invalid.style.color = 'red';
      stopForm.preventDefault();
    } else if (check.test(firstInput.value) == false) {
        let first_invalid = document.getElementById("first-invalid");
        first_invalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        first_invalid.style.color = 'red';
        stopForm.preventDefault();
    }

  let lastInput = document.getElementById("last");
    if (lastInput.value.trim() == "") {
      let last_invalid = document.getElementById("last-invalid");
      last_invalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      last_invalid.style.color = 'red';
    }

  let emailInput = document.getElementById("email");
    if (emailInput.value.trim() == "") {
      let email_invalid = document.getElementById("email-invalid");
      email_invalid.innerHTML = "Veuillez saisir un format d'adresse e-mail correct.";
      email_invalid.style.color = 'red';
    }

  let birthdateInput = document.getElementById("birthdate");
    if (birthdateInput.value.trim() == "") {
      let birthdate_invalid = document.getElementById("birthdate-invalid");
      birthdate_invalid.innerHTML = "Vous devez entrer votre date de naissance.";
      birthdate_invalid.style.color = 'red';
    }

  let quantityInput = document.getElementById("quantity");
    if (quantityInput.value.trim() == "") {
      let quantity_invalid = document.getElementById("quantity-invalid");
      quantity_invalid.innerHTML = "Veuillez choisir une valeur entre 0 et 99.";
      quantity_invalid.style.color = 'red';
    }

  let locationInput = document.getElementsByName("location");
    if (locationInput.value.trim() == "") {
      let location_invalid = document.getElementsByName("location");
      location_invalid.innerHTML = "Vous devez choisir une option.";
      location_invalid.style.color = 'red';
    }

  let checkboxInput = document.getElementById("checkbox1");
    if (checkboxInput.value.trim() == "") {
      let checkbox_invalid = document.getElementById("checkbox1");
      checkbox_invalid.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      checkbox_invalid.style.color = 'red';
    }
});

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
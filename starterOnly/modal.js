// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const form = document.querySelector("#signup"); // referencing form element
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"], input[type="radio"], input[type="checkbox"]'
);
let first, last, email;

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));

// fonction pour afficher l'erreur ou non
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// fonction pour checker si le prénom est valide
const firstChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay(
      "first",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    first = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "first",
      "Le prénom ne doit pas contenir de caractères spéciaux."
    );
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

// fonction pour checker si le nom est valide
const lastChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    errorDisplay(
      "last",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    last = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay("last", "Le nom ne doit pas contenir de caractères spéciaux.");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

// fonction pour checker si l'adresse mail est valide
const emailChecker = (value) => {
  if (value.length > 0 && !value.match(/^[\w_.-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "L'adresse mail n'est pas valide.");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// fonction pour checker si la date de naissance est valide
const birthdateChecker = (value) => {
  if (value == "") {
    errorDisplay("birthdate", "Veuillez rentrer une date de naissance valide.");
    birthdate = null;
  } else {
    errorDisplay("birthdate", "", true);
    birthdate = value;
  }
};

// fonction pour checker si le nombres de tournois est valide
const quantityChecker = (value) => {
  if (value == "") {
    errorDisplay("quantity", "Ce champ ne peut pas être vide.");
    quantity = null;
  } else {
    errorDisplay("quantity", "", true);
    quantity = value;
  }
};

// fonction pour checker si une location est choisi
const locationChecker = (value) => {
  if (value.checked == false) {
    errorDisplay("location", "Vous devez choisir une option.");
    location = null;
  } else {
    errorDisplay("location", "", true);
    location = value;
  }
};

// fonction pour checker si les conditions générales sont cochés
const conditionChecker = (value) => {
  if (value.checked == false) {
    errorDisplay(
      "condition",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    condition = null;
  } else {
    errorDisplay("condition", "", true);
    condition = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (
      e.target.id // Tester la valeur de e.target
    ) {
      case "first":
        firstChecker(e.target.value);
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "quantity":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "location":
        locationChecker(e.target.value);
        break;
      case "condition":
        conditionChecker(e.target.value);
        break;

      default:
        nul;
    }
  });
});

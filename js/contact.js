let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputPhone = document.getElementById("inputPhone");
let inputAge = document.getElementById("inputAge");
let inputPassword = document.getElementById("inputPassword");
let inputRepassword = document.getElementById("inputRepassword");
let submitBtn = document.getElementById("submitBtn");
let searchNme = document.getElementById("searchNme");
let category = document.getElementById("category");
let area = document.getElementById("area");
let ingredients = document.getElementById("ingredients");
let contactUs = document.getElementById("contactUs");

$("#open").on("click", function () {
  if ($("#open").hasClass("fa-solid fa-bars")) {
    $("#open").removeClass("fa-solid fa-bars");
    $("#open").addClass("fa-solid fa-close");
    $(".side-head").animate({ marginLeft: "0px" }, 1000, function () {
      $("header").animate({ marginLeft: "100px" });
    });
  } else {
    $("#open").removeClass("fa-solid fa-close");
    $("#open").addClass("fa-solid fa-bars");
    $(".side-head").animate({ marginLeft: "-150px" }, 1000, function () {
      $("header").css("marginLeft", "300px");
    });
  }
});

function validationInputs(elemnt) {
  let text = elemnt.value;
  regx = {
    inputName: /^[a-z, .'-]+$/,
    inputEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    inputPhone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    inputAge: /^([1-7][0-9]|80)$/,
    inputPassword: /^([A-Z]|[a-z])+(\w|\.| |@){8,}$/,
    inputRepassword: /^([A-Z]|[a-z])+(\w|\.| |@){8,}$/,
  };
  if (regx[elemnt.id].test(text)) {
    elemnt.classList.add("is-valid");
    elemnt.classList.remove("is-invalid");
    return true;
  } else {
    elemnt.classList.add("is-invalid");
    elemnt.classList.remove("is-valid");
    return false;
  }
}

searchNme.addEventListener("click", function () {
  location.href = "./search.html";
});

category.addEventListener("click", function () {
  location.href = "./category.html";
});
area.addEventListener("click", function () {
  location.href = "./area.html";
  console.log("hello");
});

ingredients.addEventListener("click", function () {
  location.href = "./ingredients.html";
  console.log("hello");
});

contactUs.addEventListener("click", function () {
  location.href = "./contact.html";
});

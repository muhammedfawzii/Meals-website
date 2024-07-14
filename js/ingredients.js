let rowData = document.getElementById("rowData");
let disData = document.getElementById("disData");
let loading = document.querySelector(".loading");
let searchNme = document.getElementById("searchNme");
let category = document.getElementById("category");
let area = document.getElementById("area");
let ingredients = document.getElementById("ingredients");
let contactUs = document.getElementById("contactUs");

$("#open").on("click", function () {
  if ($("#open").hasClass("fa-solid fa-bars fa-4x")) {
    $("#open").removeClass("fa-solid fa-bars fa-4x");
    $("#open").addClass("fa-solid fa-close fa-4x");
    $(".side-head").animate({ marginLeft: "0px" }, 1000, function () {
      $("header").animate({ marginLeft: "100px" });
    });
  } else {
    $("#open").removeClass("fa-solid fa-close fa-4x");
    $("#open").addClass("fa-solid fa-bars fa-4x");
    $(".side-head").animate({ marginLeft: "-150px" }, 1000, function () {
      $("header").css("marginLeft", "300px");
    });
  }
});

async function getIngredients() {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let data = await api.json();
  console.log(data.meals);
  displayIngredients(data.meals.slice(0, 20));
  loading.classList.add("d-none");
  let ingred = document.querySelectorAll("#ingred");
  console.log(ingred);
  for (let i = 0; i < ingred.length; i++) {
    ingred[i].addEventListener("click", function () {
      ingredFilter(ingred[i].getAttribute("data-category"));
      rowData.classList.add("d-none");
      disData.classList.remove("d-none");
    });
  }
}
getIngredients();

function displayIngredients(ingredMeals) {
  let cartona = "";
  for (let i = 0; i < ingredMeals.length; i++) {
    cartona += `
        <div class="col-md-3">
                <figure class="text-center" id="ingred" data-category="${
                  ingredMeals[i].strIngredient
                }">
                    <i class="fa-solid fa-drumstick-bite fa-5x text-white"></i>
                    <div class="over-lay">
                    <h3 class="text-white">${ingredMeals[i].strIngredient}</h3>
                    <p class="text-white">${ingredMeals[i].strDescription.slice(
                      0,
                      120
                    )}</p>
                    </div>
                </figure>
            </div>
        `;
  }

  document.getElementById("rowData").innerHTML = cartona;
}

async function ingredFilter(ingredient) {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  let data = await api.json();
  console.log(data.meals);
  displayFilter(data.meals);

  loading.classList.add("d-none");
}

function displayFilter(filterMeals) {
  let cartona = "";
  for (let i = 0; i < filterMeals.length; i++) {
    cartona += `
<div class="col-md-3">
                <figure onclick="showDetails(${filterMeals[i].idMeal})">
                    <img src="${filterMeals[i].strMealThumb}" class="w-100 rounded" alt="">
                    <div class="over-lay">
                        <h3>${filterMeals[i].strMeal}</h3>
                    </div>
                </figure>
            </div>
`;
  }
  disData.innerHTML = cartona;
}

function showDetails(id) {
  location.href = `./details.html?id=${id}`;
  console.log(id);
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

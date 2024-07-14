let figure = document.querySelectorAll("#categ figure");
let rowData = document.getElementById("deData");
let mealCategory = document.getElementById("disData");
let searchNme = document.getElementById("searchNme");
let category = document.getElementById("category");
let area = document.getElementById("area");
let ingredients = document.getElementById("ingredients");
let contactUs = document.getElementById("contactUs");
let loading = document.querySelector(".loading");

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

async function getCategory() {
  loading.classList.remove("d-none");
  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await api.json();
  console.log(data.categories);
  displayCategories(data.categories);
  loading.classList.add("d-none");

  let categ = document.querySelectorAll("#insideCategory");
  console.log(categ);
  for (let i = 0; i < categ.length; i++) {
    categ[i].addEventListener("click", function () {
      getInsideCategory(categ[i].getAttribute("data-category"));
      rowData.classList.add("d-none");
      mealCategory.classList.remove("d-none");
    });
  }
}

getCategory();

function displayCategories(categories) {
  let cartona = "";
  for (let i = 0; i < categories.length; i++) {
    cartona += `
         <div class="col-md-3" >
                <figure class="rounded" data-category="${categories[i].strCategory}" id="insideCategory">
                    <img src="${categories[i].strCategoryThumb}" class="w-100" alt="">
                    <div class="over-lay text-center">
                        <h3>${categories[i].strCategory}</h3>
                        <p>${categories[i].strCategoryDescription}</p>
                    </div>
                </figure>
            </div>
        `;
  }
  document.getElementById("deData").innerHTML = cartona;
}

async function getInsideCategory(categName) {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categName}`
  );
  let data = await api.json();
  console.log(data);
  displayMealsCategory(data.meals);
  loading.classList.add("d-none");
}

function displayMealsCategory(allInsideCateg) {
  let cartona = "";
  for (let i = 0; i < allInsideCateg.length; i++) {
    cartona += `
           <div class="col-md-3">
                <figure onclick="showDetails(${allInsideCateg[i].idMeal})">
                    <img src="${allInsideCateg[i].strMealThumb}" class="w-100" alt="">
                    <div class="over-lay">
                        <h3>${allInsideCateg[i].strMeal}</h3>
                    </div>
                </figure>
            </div>
        `;
  }
  document.getElementById("disData").innerHTML = cartona;
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

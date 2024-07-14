let rowData = document.getElementById("rowData");
let areaData = document.getElementById("areaData");
let loading = document.querySelector(".loading");
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

async function getArea() {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let data = await api.json();
  console.log(data.meals);
  displayArea(data.meals);
  loading.classList.add("d-none");

  let areaMeal = document.querySelectorAll("#pointer");
  for (let i = 0; i < areaMeal.length; i++) {
    areaMeal[i].addEventListener("click", function () {
      getMealsByArea(areaMeal[i].getAttribute("data-category"));
      rowData.classList.add("d-none");
      areaData.classList.remove("d-none");
    });
  }
  console.log(areaMeal);
}

getArea();

function displayArea(mealArea) {
  let cartona = "";
  for (let i = 0; i < mealArea.length; i++) {
    cartona += `
         <div class="col-md-3">
                    <figure class="text-white" data-category="${mealArea[i].strArea}" id="pointer">
                        <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                        <h2 class="text-white">${mealArea[i].strArea}</h2>
                    </figure>
                </div>
        `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

async function getMealsByArea(mealName) {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealName}`
  );
  let data = await api.json();
  console.log(data);
  displayFilterArea(data.meals);
  loading.classList.add("d-none");
}

function displayFilterArea(filterArea) {
  let cartona = "";
  for (let i = 0; i < filterArea.length; i++) {
    cartona += `
         <div class="col-md-3">
                    <figure class="rounded" onclick="showDetails(${filterArea[i].idMeal})">
                        <img src="${filterArea[i].strMealThumb}" class="w-100 rounded" alt="">
                        <div class="over-lay">
                            <h3>${filterArea[i].strMeal}</h3>
                        </div>
                    </figure>
                </div>
        `;
  }
  areaData.innerHTML = cartona;
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

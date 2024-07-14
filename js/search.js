let searchName = document.getElementById("searchName");
let searchLetter = document.getElementById("searchLetter");
let rowData = document.getElementById("rowData");
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

if (searchName) {
  searchName.addEventListener("input", function () {
    rowData.classList.remove("d-none");
    let query = searchName.value.trim();
    if (query) {
      searchByName(query);
      if (query == "") {
        displayMeals();
      }
    } else {
      rowData.innerHTML = "";
      displayMeals();
    }
  });
}

if (searchLetter) {
  searchLetter.addEventListener("input", function () {
    rowData.classList.remove("d-none");

    let query = searchLetter.value.trim();

    if (query.length > 1) {
      searchLetter.value = query.charAt(0);
    } else if (query.length === 1) {
      searchByLetter(query);
    }
  });
}

async function searchByName(name) {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  let data = await api.json();
  displayMeals(data.meals);
  loading.classList.add("d-none");
}
async function searchByLetter(letter) {
  loading.classList.remove("d-none");

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`
  );
  let data = await api.json();
  displayMeals(data.meals);
  loading.classList.add("d-none");
}

function displayMeals(mealName) {
  let cartona = "";
  for (let i = 0; i < mealName.length; i++) {
    cartona += `
  <div class="col-md-3">
                <figure class="rounded" onclick="showDetails(${mealName[i].idMeal})" id="">
                  <img src="${mealName[i].strMealThumb}" class="w-100" alt="">
                  <div class="over-lay">
                    <h3>${mealName[i].strMeal}</h3>         
                  </div>
                </figure>         
              </div>
`;
  }
  rowData.innerHTML = cartona;
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

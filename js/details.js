let searchNme = document.getElementById("searchNme");
let category = document.getElementById("category");
let area = document.getElementById("area");
let ingredients = document.getElementById("ingredients");
let contactUs = document.getElementById("contactUs");

let merge;
let displayMerge;

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

let loading = document.querySelector(".loading");

let searchParam = location.search;
let params = new URLSearchParams(searchParam);
let id = params.get("id");
console.log(id);

(async function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").fadeOut(1000);
  });

  let api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let data = await api.json();
  console.log(data.meals[0]);

  let strIngred = getstrIngredient(data.meals[0]);
  let strMeas = getstrMeasure(data.meals[0]);
  merge = MergeStrMeasure_Ingredient(strIngred, strMeas);
  console.log(merge);
  displayMerge = displaStrMeasure_Ingredient(merge);
  console.log(displayMerge);
  displayDetails(data.meals[0]);
  console.log(strIngred);
  console.log(strMeas);
})();

function displayDetails(dataDetail) {
  let box = "";

  box = `
        <div class="col-sm-12 col-md-6 col-lg-4">
                   <figure id="kind">
                    <img src="${dataDetail.strMealThumb}" class="w-100 rounded"  alt="">
                    <h3 class="text-white">${dataDetail.strMeal}</h3>
                   </figure>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-8">
                    <figcaption class="text-white">
                    <h3>Instructions</h3>
                    <p>${dataDetail.strInstructions}</p>
                    <h3>Area: <span>${dataDetail.strArea}</span></h3>
                    <h3>Category: <span>${dataDetail.strCategory}</span></h3>
                    
                </figcaption>
                <div class="sort ">
                <h3 class="text-white">Rescipe:</h3>
                
           <div class="d-flex flex-wrap">${displayMerge}</div>
                    
                </div>
                <div class="tags">
                <h3 class="text-white">Tags:</h3>
                                <a class="btn btn-success" target="_blank" href="${dataDetail.strSource}">Source</a>
                <a class="btn btn-danger m-2" target="_blank" href="${dataDetail.strYoutube}">Youtube</a>
                </div>
                </div>
        `;

  document.getElementById("detailData").innerHTML = box;
}

function getstrIngredient(meals) {
  let arrstrIngredient = [];
  for (const [key, value] of Object.entries(meals)) {
    if (key.match("strIngredient") && value != " ") {
      if (key.match("strIngredient") && value != "") {
        arrstrIngredient.push(value);
      }
    }
  }
  return arrstrIngredient;
}
function getstrMeasure(meals) {
  let arrStrMeasure = [];
  for (const [key, value] of Object.entries(meals)) {
    if (key.match("strMeasure") && value != " ") {
      if (key.match("strMeasure") && value != "") {
        arrStrMeasure.push(value);
      }
    }
  }
  return arrStrMeasure;
}
function MergeStrMeasure_Ingredient(arr1, arr2) {
  let arrMergegStr = [];
  for (let i = 0; i < arr1.length; i++) {
    arrMergegStr[i] = arr1[i] + arr2[i];
  }

  return arrMergegStr;
}
function displaStrMeasure_Ingredient(arr) {
  let cartona = "";
  arr.forEach((element) => {
    cartona += `<span class="alert alert-info m-2 p-1 ">${element}</span>`;
  });
  return cartona;
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

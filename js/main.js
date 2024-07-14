///<reference types="../@types/jquery"/>

let searchNme = document.getElementById('searchNme')
let category = document.getElementById('category')
let area = document.getElementById('area')
let ingredients = document.getElementById('ingredients')
let contactUs = document.getElementById('contactUs')
let item = $('.item') 


//sidebar
$('#open').on('click', function(){
    if($('#open').hasClass('fa-solid fa-bars')){
        $('#open').removeClass('fa-solid fa-bars')
        $('#open').addClass('fa-solid fa-close')
        $('.side-head').animate({marginLeft: "0px"}, 1000, function(){
            $('header').animate({marginLeft:'100px'})
            for(let i = 0; i <item.length; i++){
                item.eq(i).animate({top: '0'}, (i+5)*100)
            }
            
        })
    }else{
        $('#open').removeClass('fa-solid fa-close')
        $('#open').addClass('fa-solid fa-bars')
        $('.side-head').animate({marginLeft: "-150px"}, 1000, function(){
            $('header').css('marginLeft','300px')
        })
   
        } 
})
$(function(){
    $('.loader').fadeOut(1000, function(){
        $(".loading").fadeOut(1000)
    })
})


async function getMeals(){
    let api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let response = await api.json()
    console.log(response.meals);
    displayData(response.meals)
}
getMeals()

function displayData(meals){
    let cartona = ''
    for(let i = 0; i < meals.length; i++){
         cartona += `
        <div class="col-md-3 m-auto">
                <figure class="rounded" onclick="showDetails(${meals[i].idMeal})" id="">
                  <img src="${meals[i].strMealThumb}" class="w-100" alt="">
                  <div class="over-lay">
                    <h3>${meals[i].strMeal }</h3>         
                  </div>
                </figure>         
              </div>
        `
    }
  
    document.getElementById('rowData').innerHTML = cartona
}
function showDetails(id){
    location.href = `./details.html?id=${id}`
}

searchNme.addEventListener('click', function(){
    location.href = './search.html'
})

category.addEventListener('click', function(){
    location.href = './category.html'
})
area.addEventListener('click', function(){
    location.href = './area.html'
    console.log('hello');
})

ingredients.addEventListener('click', function(){
    location.href = './ingredients.html'
    console.log('hello');
})

contactUs.addEventListener('click', function(){
    location.href = './contact.html'
})






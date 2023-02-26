const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.meals))
};
const display = meals => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerText = '';
    meals.forEach(meal => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('col');
    newDiv.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-title">${meal.strMeal}</h3>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <button onclick="mealIdDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsModal">
        Details
        </button>
    </div>
    `;
    mainContainer.appendChild(newDiv);
    });
};
const searchMeal = () => {
    const searchText = document.getElementById('search-input').value;
    loadMeals(searchText);
};

const mealIdDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealSet(data.meals[0]))
};
const displayMealSet = meal => {
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const mealImg = document.getElementById('meal-img');
    mealImg.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `;
}
loadMeals('rice');
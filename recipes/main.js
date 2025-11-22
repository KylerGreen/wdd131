import recipes from "./recipes.mjs";


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
    return list[getRandomNumber(list.length)];
}


function tagsTemplate(tags) {
    return tags
        .map(tag => `<li>${tag}</li>`)
        .join("");
}

function ratingTemplate(rating) {
    let html = `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <section class="Recipe">
        <img src="${recipe.image}" alt="${recipe.name}">
        <section class="RecipeContent">
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>

            <h2>${recipe.name}</h2>

            ${ratingTemplate(recipe.rating)}

            <p class="Description">${recipe.description}</p>
        </section>
    </section>
    `;
}


function renderRecipes(recipeList) {
    const output = document.querySelector("main");
    output.innerHTML = recipeList.map(recipeTemplate).join("");
}


function filterRecipes(query) {
    query = query.toLowerCase();

    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(t => t.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.find(i => i.toLowerCase().includes(query))
        );
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
}

function searchHandler(event) {
    event.preventDefault();

    const query = document.querySelector("#searchBar").value.toLowerCase();
    const results = filterRecipes(query);

    renderRecipes(results);
}


function init() {
    const randomOne = getRandomListEntry(recipes);
    renderRecipes([randomOne]);

    const searchIcon = document.querySelector(".SearchIcon");
    searchIcon.addEventListener("click", searchHandler);

    const searchInput = document.querySelector("#searchBar");
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") searchHandler(e);
    });
}

init();
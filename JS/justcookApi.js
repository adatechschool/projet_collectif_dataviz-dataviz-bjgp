// const apiKey = "apiKey=2f544e5ae83c463ea9690348030bbfee"
const apiKey ="apiKey=d4fbf85623e540cbae4e7423822b1491"
const apiChoixRecette = "../BDD JSON/Recettes20.json";
// import { generateRecipe } from "./affichageRecettes.js";

function apiURL (key,ingredients,number){
    const apiFindRecipes = `https://api.spoonacular.com/recipes/findByIngredients?${key}&ingredients=${ingredients}&number=${number}`
    return apiFindRecipes
}

async function recette(url) {
    let reponse = await fetch (url)
    return await reponse.json()
}


async function apiFicheRecipe (idRecipe){
    const apiFicheRecette = `https://api.spoonacular.com/recipes/${idRecipe}/card?${apiKey}`;
    let reponse = await fetch (apiFicheRecette)
    return await reponse.json()
}

    function generateRecipe(resultRecipe,number){
        
        async function apiFicheRecipe (idRecipe){
            const apiFicheRecette = `https://api.spoonacular.com/recipes/${idRecipe}/card?${apiKey}`;
            let reponse = await fetch (apiFicheRecette)
            let json = await reponse.json()
            console.log(json.url )
            return json.url
        }
            
    
        for (let i=0 ; i < number; i++){
            const recipe = resultRecipe[i];
            // const WebRecipe = "https://google.com";
    
            const sectionRecipe = document.querySelector(".ficheRecipe");
            const recipeElement = document.createElement("article");
    
            // Création de la fiche recette
            const imageRecipe = document.createElement("img");
            imageRecipe.src=recipe.image;
    
            const titleRecipe = document.createElement("a");
            titleRecipe.setAttribute("class", "site")
            apiFicheRecipe(recipe.id).then(data => titleRecipe.setAttribute("href",`${data}`))
            // titleRecipe.setAttribute("href", recipe.image)
            titleRecipe.setAttribute("target", "_blank")
            titleRecipe.dataset.id= recipe.id;
            titleRecipe.innerHTML += `<br>${recipe.title}` ;
            
    
    
            const usedIngredientCount = document.createElement("p");
            usedIngredientCount.innerText = `Le nombre d'ingredient utilisé est de : ${recipe.usedIngredientCount}`;
    
            const missedIngredientCount = document.createElement("p");
            missedIngredientCount.innerText = `Le nombre d'ingredient supplémentaire nécessaire est de : ${recipe.missedIngredientCount}`;
    
            // Affichage de la recette sur le DOM
            sectionRecipe.appendChild(recipeElement);
    
            recipeElement.appendChild(imageRecipe);
            recipeElement.appendChild(titleRecipe);
            recipeElement.appendChild(usedIngredientCount);
            recipeElement.appendChild(missedIngredientCount);
        }
     
    }
    


    function addIngre () {
        let ingre1 = document.getElementById("ingre1").value;
        let ingre2 = document.getElementById("ingre2").value;
        let ingre3 = document.getElementById("ingre3").value;
       let listingre = ingre1 +",+"+  ingre2  +",+"+  ingre3
        console.log(listingre)
        let recipes = recette(apiURL(apiKey,listingre,5))
        console.log( recipes)
        recipes.then(data => generateRecipe(data,5))
        }

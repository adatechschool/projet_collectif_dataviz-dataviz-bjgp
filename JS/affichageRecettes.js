function affichageDetail (){
    var titreRecette = document.querySelector(".ficheRecipe article h3")

    for ( let i =0; i < titreRecette.length; i ++) {

    titreRecette[i].addEventListener("click", function(event){

        var id = event.target.dataset.id;
        console.log (id)
    })
    }

}

export function generateRecipe(resultRecipe,number){
    for (let i=0 ; i < number; i++){
        const WebRecipe= "http://www.google.com"
        const recipe = resultRecipe[i];
        const sectionRecipe = document.querySelector(".ficheRecipe");
        const recipeElement = document.createElement("article");

        // Création de la fiche recette
        const imageRecipe = document.createElement("img");
        imageRecipe.src=recipe.image;

        const titleRecipe = document.createElement("a");
        titleRecipe.setAttribute("href", WebRecipe)
        titleRecipe.dataset.id= recipe.id
        titleRecipe.innerText = recipe.title;


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
 affichageDetail()
}

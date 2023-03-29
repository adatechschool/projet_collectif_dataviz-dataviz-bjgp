





export function generateRecipe(resultRecipe,number){
    
    async function ficheRecipe(url){
        const reponse = await fetch(url);
        const fiches = await reponse.json();
        
        return fiches
    }
    
    let fiche = ficheRecipe("../BDD JSON/DetailsRecettes.json")

    function UrlRecipe (adresseWeb,nameVariable,idRecipe){
        for (let i=0;i<adresseWeb.length;i++){
            let fiche = adresseWeb[i]
            if(idRecipe==fiche.id){
            console.log("UrlRecipe",fiche.url)
            nameVariable.setAttribute("href", fiche.url)}
        }
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
        fiche.then(data => UrlRecipe(data,titleRecipe,recipe.id))
        // titleRecipe.setAttribute("href", WebSite())
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

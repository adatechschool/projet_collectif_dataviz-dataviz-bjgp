// const apiKey = "apiKey=2f544e5ae83c463ea9690348030bbfee"

import { generateRecipe } from "./affichageRecettes.js";
//import { affichageRecette } from "./detailRecette.js";
/*function apiURL (key,ingredients,number){
    const apiFindRecipes = `https://api.spoonacular.com/recipes/findByIngredients?${key}&ingredients=${ingredients}&number=${number}`
    return apiFindRecipes
}

async function recette(url) {
    let reponse = await fetch (url)
    return await reponse.json()
}


 
 const addIngre = () =>{
 let ingre1 = document.getElementById("ingre1").value;
 let ingre2 = document.getElementById("ingre2").value;
 let ingre3 = document.getElementById("ingre3").value;
let listingre = ingre1 +",+"+  ingre2  +",+"+  ingre3
 console.log(listingre)
 let recipes = recette(apiURL(apiKey,listingre,3))
 console.log( recipes)
 }*/

async function recipes20 (url){
    let reponse = await fetch (url)
    // console.log( await reponse.json())
    return  reponse.json()
}

let recipesTest = recipes20("../BDD JSON/Recettes20.json")

recipesTest.then(function (data) 
     { 
        generateRecipe(data,5)
        affichageRecette(data)
    })


 function affichageRecette(tableauRecette){
    // function coucou () {
    //     alert ("coucou")
    // }
    // document.addEventListener("click", coucou)
console.log(tableauRecette)
    for (let i=0; i<tableauRecette.length; i++){
        const id = tableauRecette[i].id
        console.log(id)
        var selectionTitle= document.querySelector(`article[data-id="${id}"]`)
        selectionTitle.addEventListener("click",() =>{alert ("recette")
    
        })
    }
}

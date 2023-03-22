 const addIngre = () =>{
 let ingre1 = document.getElementById("ingre1").value;
 let ingre2 = document.getElementById("ingre2").value;
 let ingre3 = document.getElementById("ingre3").value;
let listingre = ingre1 +",+"+  ingre2  +",+"+  ingre3
 console.log(listingre)
 return listingre
 }

async function recette(url) {
    let reponse = await fetch (url)
    return await reponse.json()
}

console.log(recette(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=2f544e5ae83c463ea9690348030bbfee&ingredients=${addIngre}&number=2`))

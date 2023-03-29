async function ficheRecipe(url){
    const reponse = await fetch(url);
    const fiches = await reponse.json();
    
    return fiches
}

let fiche = ficheRecipe("../BDD JSON/DetailsRecettes.json")



function ficheRecettes (recettesDispo){
    for (let i=0;i<recettesDispo.length;i++){ 
            let fiche = recettesDispo[i]
            
            const sectionRecipe = document.querySelector(".site")
            const linkUrl = document.createElement("article")

            const adresseUrl = document.createElement("a")
            adresseUrl.setAttribute("href", fiche.url)
            adresseUrl.innerHTML += `${fiche.id}`
            adresseUrl.setAttribute("target", "_blank")

            sectionRecipe.appendChild(linkUrl)
            linkUrl.appendChild(adresseUrl)
    }
}   
    


fiche.then(data => ficheRecettes(data))

function UrlRecipe (adresseWeb){
    for (let i=0;i<adresseWeb.length;i++){
        let fiche = adresseWeb[i]
        console.log(fiche.url)
        return fiche.url
    }
}
fiche.then(data => UrlRecipe(data))











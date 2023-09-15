interface IRecette {
  lienimage: string,
  nom: string,
  duree: number,
  note: number,
}

const addbutton = document.getElementById('add-button')
if (addbutton !== null) {
  addbutton.onclick = function () {
      console.log('ok!')
  }
}
//le clic sur le bouton "Add"
addbutton?.addEventListener('click', async () => {
  //le clic sur le bouton "Add"
  const nameInput= document.querySelector('#input-name') as HTMLInputElement;
  const imageUrlInput = document.querySelector('#input-lienimage')as HTMLInputElement;
  const durationInput = document.querySelector('#input-duree')as HTMLInputElement;
  const noteSelect = document.querySelector('#input-note')as HTMLInputElement;

  // Récupérez les valeurs ecrites
  const name = nameInput.value;
  const imageUrl = imageUrlInput.value;
  const duration = parseInt(durationInput.value);
  const note = parseInt(noteSelect.value);
  
  console.log(`Nom: ${name}, Image URL: ${imageUrl}, Durée: ${duration}, Note: ${note}`);

  const response = await fetch("http://localhost:3000/recettes", {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    method: "POST",
    body: JSON.stringify({
      nom: name,
      duree: duration,
      url: imageUrl,
      note: note
    }),
  })
  console.log(response)
  const recetteAjoutee = await response.json()

  console.log('recette', recetteAjoutee)
  afficherRecette(recetteAjoutee)
});



async function init(){
  const response = await fetch('http://localhost:3000/recettes')
  const recettes = await response.json()
  console.log('recettes', recettes);
  recettes.forEach( (recette: IRecette) => {
    afficherRecette(recette)    
  });
  
} 

init()

function afficherRecette(recette: IRecette){
  console.log('tata', recette)
  const nouvelleRecetteDom = document.createElement('div')
  nouvelleRecetteDom.classList.add('recette')
  nouvelleRecetteDom.innerHTML = `
  <div>
    <img src=${recette.lienimage} alt="Nom de la recette">
  </div>
  <div class ="paramettre">
    <div class="nom-recette">${recette.nom}</div>
    <div class="duree">Durée : ${recette.duree} minutes</div>
    <div class="note">Note : ${recette.note}/10</div>
  </div>
  `

  const list = document.querySelector('.recettes-liste') as HTMLDivElement
  
  list.appendChild(nouvelleRecetteDom)
}
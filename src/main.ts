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
  const duration = durationInput.value;
  const note = noteSelect.value;
  
  console.log(`Nom: ${name}, Image URL: ${imageUrl}, Durée: ${duration}, Note: ${note}`);

  const response = await fetch('http://localhost:3000/ajout-recette/' + name)
  const value = await response.text()
  const recetteAjoutee = JSON.parse(value)

  console.log('recette', recetteAjoutee)

  const nouvelleRecetteDom = document.createElement('div')
  nouvelleRecetteDom.classList.add('recette')
  nouvelleRecetteDom.innerHTML = `
  <div>
    <img src="tarte au thon.jpg" alt="Nom de la recette">
  </div>
  <div class ="paramettre">
    <div class="nom-recette">${recetteAjoutee.nom}</div>
    <div class="duree">Durée : 30 minutes</div>
    <div class="note">Note : 4/10</div>
  </div>
  `

  const list = document.querySelector('.recettes-liste') as HTMLDivElement
  
  list.appendChild(nouvelleRecetteDom)

});



async function init(){
  const response = await fetch('http://localhost:3000/findall')
  const value = await response.text()
  const recettes = JSON.parse(value)
  console.log('recettes', recettes);
  
  
} 

init()

import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const addbutton = document.getElementById('add-button')
  if (addbutton !== null) {
    addbutton.onclick = function () {
        console.log('ok!')
    }
 }
  //le clic sur le bouton "Add"
  addbutton?.addEventListener('click', () => {
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
  });
});

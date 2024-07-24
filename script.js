// const taskbutton=document.querySelector("button");

// document.addEventListener("click",(button) => 
// {let ValInput = document.getElementById("Val");
// let Val = ValInput.value
// console.log(Val);
// })


// Récuperer la Valeur de L'input et l'afficher 
const taskButton = document.querySelector("button");

taskButton.addEventListener("click", () => {
    let ValInput = document.getElementById("Val").value;
    
    // Afficher la valeur dans la console
    console.log(ValInput);
    
    // Créer un conteneur pour la valeur et les boutons
    const displayArea = document.getElementById("displayArea");
    const displayElement = document.createElement("div"); 
    
    const textElement = document.createElement("p");
    textElement.textContent = ValInput;
    
    // Créer les boutons Valider et Supprimer
    const validateButton = document.createElement("button");
    validateButton.textContent = "Finis";
    validateButton.addEventListener("click", () => {
        if (textElement.style.color == "green") {
            console.log("coucou")
            textElement.style.color = "black"; 
            
        } else {
            textElement.style.color = "green"; 
            // Change la couleur du texte en vert
         
        }
    });
    const ModifyButton = document.createElement("button");
    ModifyButton.textContent = "Modifier"
    ModifyButton.addEventListener("click",)
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
        displayArea.removeChild(displayElement);
    });
    
    // Ajouter les éléments au conteneur displayElement
    displayElement.appendChild(textElement);
    displayElement.appendChild(validateButton);
    displayElement.appendChild(deleteButton);
    
    // Ajouter le conteneur displayElement au displayArea
    displayArea.appendChild(displayElement);
    
    // Réinitialiser l'input
    document.getElementById("Val").value = '';
});



// Création des cartes principales
export function createMainCards() {
  const contentContainer = document.getElementById("content"); // Sélectionne le conteneur principal où les cartes seront affichées.

  // Réinitialisation propre
  contentContainer.classList.remove("fade-in", "fade-out"); // Supprime les classes d'animation pour éviter les conflits.

  // Suppression du contenu précédent
  contentContainer.innerHTML = ""; // Efface tout le contenu existant dans le conteneur.

  // Définition des données des cartes
  const cardsData = [
    { id: "military", title: "Expériences Militaires" }, // Première carte
    { id: "webdev", title: "Développement Web" }        // Deuxième carte
  ];

  // Création du conteneur des cartes
  const cardsContainer = document.createElement("div"); // Crée un élément <div>.
  cardsContainer.className = "experience__container fade-in"; // Attribue les classes CSS pour le style et l'animation.

  // Génération des cartes
  cardsData.forEach(card => {
    const cardElement = document.createElement("div");  // Crée un élément <div> pour chaque carte.
    cardElement.className = "experience__card";         // Attribue la classe CSS principale.
    cardElement.id = card.id;                          // Attribue un ID unique à chaque carte.

    // Structure HTML de chaque carte
    cardElement.innerHTML = `
      <div class="card__front">
        <h2 class="card__title">${card.title}</h2>   <!-- Affiche le titre de la carte -->
      </div>
    `;

    // Gestion du clic sur une carte
    cardElement.addEventListener("click", () => showDetailedContent(card.id)); 
    // Ajoute un événement "click" pour afficher le contenu détaillé.

    cardsContainer.appendChild(cardElement);  // Ajoute chaque carte au conteneur principal.
  });

  // Ajout du conteneur au contenu principal
  contentContainer.appendChild(cardsContainer);  
}


// Fonction pour afficher le contenu détaillé
function showDetailedContent(cardId) {
  const contentContainer = document.getElementById("content"); // Sélectionne le conteneur principal.

  // Animation de disparition
  contentContainer.classList.remove("fade-in");  // Supprime la classe "fade-in".
  contentContainer.classList.add("fade-out");    // Applique l'animation "fade-out".

  // Attente de l'animation avant d'afficher le nouveau contenu
  setTimeout(() => {
    contentContainer.innerHTML = "";  // Vide le conteneur principal.

    // Création du conteneur de détails
    const detailContainer = document.createElement("div"); // Crée un élément <div>.
    detailContainer.className = "detail__container fade-in"; // Applique les styles et animations.

    let detailContent = "";  // Variable pour stocker le contenu détaillé.

    // Génération du contenu en fonction de l'ID
    if (cardId === "military") {
      detailContent = `
        <h2 class="detail__title">Expériences Militaires</h2>
        <p>Contenu détaillé sur l'expérience militaire...</p>
      `;
    } else if (cardId === "webdev") {
      detailContent = `
        <h2 class="detail__title">Développement Web</h2>
        <p>Contenu détaillé sur le développement web...</p>
      `;
    }

    detailContainer.innerHTML = detailContent;  // Insère le contenu détaillé dans le conteneur.

    // Création du bouton "Retour"
    const backButton = document.createElement("button");  // Crée un bouton <button>.
    backButton.className = "btn__back";                   // Applique le style CSS.
    backButton.textContent = "Retour";                    // Définit le texte du bouton.

    // Gestion du clic sur "Retour"
    backButton.addEventListener("click", createMainCards); 
    // Réaffiche les cartes principales lorsqu'on clique sur "Retour".

    // Ajout du bouton et du conteneur de détails au conteneur principal
    detailContainer.appendChild(backButton);  
    contentContainer.appendChild(detailContainer);  

    // Réinitialisation des classes d'animation
    contentContainer.classList.remove("fade-out");  // Supprime "fade-out".
    contentContainer.classList.add("fade-in");      // Applique l'animation "fade-in".
  }, 500);  // Attente de 500 ms pour correspondre à la durée de l'animation.
}

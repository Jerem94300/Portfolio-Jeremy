// Création des cartes principales
export function createGamesCards() {
    const contentContainer = document.getElementById("content"); // Sélectionne le conteneur principal où les cartes seront affichées.
  
    // Réinitialisation propre
    contentContainer.classList.remove("fade-in", "fade-out"); // Supprime les classes d'animation pour éviter les conflits.
  
    // Suppression du contenu précédent
    contentContainer.innerHTML = ""; // Efface tout le contenu existant dans le conteneur.
  
    // Définition des données des cartes
    const cardsData = [
      { id: "mastermind", title: "Mastermind" }, // Première carte
      { id: "jeuDuPendu", title: "Jeu du Pendu" },     // Deuxième carte
      { id: "sudoku", title: "Sudoku" }        // Troisième carte
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
  
  
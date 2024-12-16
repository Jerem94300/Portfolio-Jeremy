export default function loadAboutMe() {
  const content = `
   <section class="about-me">
  <h2 class="about-me__title">About Me</h2>
  <div class="card-container">
    <!-- Card: Date of Birth -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_birth.webp" alt="Date of Birth" class="card__image">
        <p class="card__title">Date of Birth</p>
      </div>
      <div class="card__back">
        <p class="card__content">December 05, 1982</p>
      </div>
    </div>
    <!-- Card: Driving License and Languages -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_permis2.webp" alt="Driving License and Languages" class="card__image">
        <p class="card__title">Driving License & Languages</p>
      </div>
      <div class="card__back">
        <p class="card__content">Driving License B, C<br>English (B2), Spanish (B2)</p>
      </div>
    </div>
    <!-- Card: Software Skills -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_informatique_resized.jpg" alt="Software Skills" class="card__image">
        <p class="card__title">Software</p>
      </div>
      <div class="card__back">
        <p class="card__content">Word, Excel, PowerPoint</p>
      </div>
    </div>
    <!-- Card: Hobbies -->
    <div class="card">
      <div class="card__front">
        <img src="images/image_hobbies.webp" alt="Hobbies" class="card__image">
        <p class="card__title">Hobbies</p>
      </div>
      <div class="card__back">
        <p class="card__content">Hiking, Swimming, Trail Running, Video Games</p>
      </div>
    </div>
  </div>
  <!-- Central Buttons -->
  <div class="buttons-container">
    <button class="btn__download">Download CV</button>
    <button class="btn__back">Back</button>
  </div>
</section>

  `;

  // Injecter le contenu dans l'élément principal
  const contentDiv = document.getElementById('content');
  if (contentDiv) {
    contentDiv.innerHTML = content;

    // Remplacer le titre de la page par "À propos"
    const headerTitle = document.querySelector('.title__h1');
    if (headerTitle) {
      headerTitle.textContent = "About Me";
    }
  } else {
    console.error('Element #content introuvable');
  }

  // Ajouter un événement au bouton "Retour"
  const backButton = document.querySelector('.btn__back');
  if (backButton) {
    backButton.addEventListener('click', (e) => {
      e.preventDefault(); // Empêche un comportement inattendu
      window.location.href = "index.html"; // Redirige vers la page d'accueil
    });
  } else {
    console.error('Bouton "Retour" introuvable');
  }

  // Ajouter un événement au bouton "Télécharger CV"
  const downloadButton = document.querySelector('.btn__download');
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      // Remplacez 'cv.pdf' par le chemin réel vers le CV
      window.open('/assets/CV DWWM.pdf', '_blank');
    });
  }
}

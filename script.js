import loadAboutPage from './about.js';
import loadHomePage from './home.js';
import { createMainCards } from './experience.js';


document.addEventListener('DOMContentLoaded', () => {
    // Charger la page d'accueil par défaut
    loadHomePage();

    // Navigation
    document.querySelector('.nav__home').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        loadHomePage(); // Charge la page d'accueil
    });

    document.querySelector('.nav__about').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        loadAboutPage(); // Charge la page "À propos"
    });
});



const content = document.getElementById('content');

document.querySelector('.nav__experience').addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    createMainCards();  // Charge dynamiquement la page Expériences
});








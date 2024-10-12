// URL de l'API pour les armes
const apiURL = "https://eldenring.fanapis.com/api/weapons";
        
// Sélection de l'élément où les armes seront affichées
const contenuGrid = document.getElementById('contenu-grid');

// Récupérer les données de l'API
fetch(apiURL)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        const weapons = data.data; // Accéder aux données du tableau 'data'
        
        // Boucler à travers les armes et injecter dans le HTML
        weapons.forEach(weapon => {
            const newContent = `
                <div class="contenu">
                    <h2>${weapon.name || 'Nom non disponible'}</h2>
                    <img src="${weapon.image || 'https://via.placeholder.com/150'}" alt="${weapon.name || 'Image non disponible'}" width="100" height="150" />
                    <p>${weapon.description || 'Description non disponible'}</p>
                </div>
            `;
            contenuGrid.innerHTML += newContent; // Ajouter le contenu au grid
        });
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
        contenuGrid.innerHTML = "<p>Impossible de charger les armes.</p>";
    });
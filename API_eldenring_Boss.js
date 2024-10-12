// URL de l'API
const apiURL = "https://eldenring.fanapis.com/api/bosses";
        
// Sélection de l'élément où les boss seront affichés
const contenuGrid = document.getElementById('contenu-grid');

// Récupérer les données de l'API
fetch(apiURL)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        const bosses = data.data; // Accéder aux données du tableau 'data'
        
        // Boucler à travers les bosses et injecter dans le HTML
        bosses.forEach(boss => {
            const newContent = `
                <div class="contenu">
                    <h2>${boss.name || 'Nom non disponible'}</h2>
                    <img src="${boss.image || 'https://via.placeholder.com/150'}" alt="${boss.name || 'Image non disponible'}" width="100" height="150" />
                    <p><strong>Région:</strong> ${boss.region || "API n'en a pas"}</p>
                    <p><strong>Points de vie:</strong> ${boss.healthPoints || "API n'en a pas"}</p>
                    <p>${boss.description || 'Description non disponible'}</p>
                </div>
            `;
            contenuGrid.innerHTML += newContent; // Ajouter le contenu au grid
        });
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
        contenuGrid.innerHTML = "<p>Impossible de charger les bosses.</p>";
    });
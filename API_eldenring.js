// URL de l'API
const apiURL = "https://eldenring.fanapis.com/api/npcs";
        
// Sélection de l'élément où les personnages seront affichés
const contenuGrid = document.getElementById('contenu-grid');

// Récupérer les données de l'API
fetch(apiURL)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        const npcs = data.data; // Accéder aux données du tableau 'data'
        
        // Boucler à travers les NPCs et injecter dans le HTML
        npcs.forEach((npc) => {
            const newContent = `
                <div class="contenu">
                    <h2>${npc.name}</h2>
                    <img src="${npc.image}" alt="${npc.name}" width="100" height="150" />
                    <p><strong>Location:</strong> ${npc.location || 'Location not available'}</p>
                    <p><strong>Role:</strong> ${npc.role || 'Role not available'}</p>
                </div>
            `;
            contenuGrid.innerHTML += newContent; // Ajouter le contenu au grid
        });
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données:", error);
        contenuGrid.innerHTML = "<p>Impossible de charger les personnages.</p>";
    });
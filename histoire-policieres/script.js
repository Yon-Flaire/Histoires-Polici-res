// Affiche une alerte quand l'utilisateur clique sur un bouton "Lire l'histoire"
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Prépare-toi à plonger dans une nouvelle enquête...");
  });
});

// Effet de survol sur les titres des histoires
document.querySelectorAll('.histoire h3').forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.color = '#ffcc00';
  });
  title.addEventListener('mouseleave', () => {
    title.style.color = '';
  });
});

// Message de bienvenue dans la console
console.log("Bienvenue sur Histoires Policières de Tartas — Mystères garantis !");

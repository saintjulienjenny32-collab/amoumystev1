<!DOCTYPE html>
<html lang="ht">
<head>
  <meta charset="UTF-8" />
  <title>Amou Myste - Enskripsyon & Koneksyon</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: auto; padding: 20px; }
    h2 { text-align: center; }
    form { margin-bottom: 30px; }
    input { width: 100%; padding: 8px; margin: 6px 0; box-sizing: border-box; }
    button { width: 100%; padding: 10px; background-color: #4CAF50; border: none; color: white; font-size: 16px; cursor: pointer; }
    button:hover { background-color: #45a049; }
    .pay-buttons button { background-color: #008CBA; margin-top: 10px; }
    .pay-buttons button:hover { background-color: #007bb5; }
    .tabs { display: flex; justify-content: center; margin-bottom: 20px; }
    .tab { flex: 1; padding: 10px; cursor: pointer; background: #eee; text-align: center; }
    .tab.active { background: #4CAF50; color: white; }
    .hidden { display: none; }
  </style>
</head>
<body>

  <h1>Bienvenue sur Amou Myste</h1>

  <div class="tabs">
    <div id="tab-inscription" class="tab active">Inscription</div>
    <div id="tab-connexion" class="tab">Me connecter</div>
  </div>

  <!-- Fòm Enskripsyon -->
  <form id="formInscription">
    <input type="text" name="id" placeholder="ID" required>
    <input type="text" name="name" placeholder="Nom" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Mot de passe" required>
    <input type="date" name="date" required>
    <button type="submit">S’inscrire</button>
  </form>

  <!-- Fòm Koneksyon -->
  <form id="formConnexion" class="hidden">
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Mot de passe" required>
    <button type="submit">Se connecter</button>
  </form>

  <!-- Bouton Peman -->
  <div class="pay-buttons">
    <button onclick="alert('Fonksyonalite MonCash ap vini byento!')">💰 Payer avec MonCash</button>
    <button onclick="alert('Fonksyonalite Payoneer ap vini byento!')">💳 Payer avec Payoneer</button>
  </div>

<script>
// Tab switcher
const tabInscription = document.getElementById('tab-inscription');
const tabConnexion = document.getElementById('tab-connexion');
const formInscription = document.getElementById('formInscription');
const formConnexion = document.getElementById('formConnexion');

tabInscription.onclick = () => {
  tabInscription.classList.add('active');
  tabConnexion.classList.remove('active');
  formInscription.classList.remove('hidden');
  formConnexion.classList.add('hidden');
};
tabConnexion.onclick = () => {
  tabConnexion.classList.add('active');
  tabInscription.classList.remove('active');
  formConnexion.classList.remove('hidden');
  formInscription.classList.add('hidden');
};

// Enskripsyon - voye done nan SheetDB
formInscription.addEventListener('submit', function(e) {
  e.preventDefault();

  fetch('https://sheetdb.io/api/v1/al02r4r6prc1a', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: [{
        id: this.id.value,
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
        date: this.date.value
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    alert("Mèsi! Ou enskri avèk siksè.");
    this.reset();
  })
  .catch(error => {
    alert("Yon erè rive, tanpri eseye ankò.");
    console.error('Error:', error);
  });
});

// Koneksyon - senp UI (pa gen backend oswa verifikasyon pou kounye a)
formConnexion.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Fonksyon koneksyon poko disponib. Tanpri sèvi ak enskripsyon pou kounye a.");
});
</script>

</body>
</html>

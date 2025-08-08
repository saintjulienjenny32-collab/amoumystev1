document.getElementById('signupBtn').addEventListener('click',()=>showSection('signup'));
document.getElementById('loginBtn').addEventListener('click',()=>showSection('login'));
document.getElementById('aboutBtn').addEventListener('click',()=>showSection('about'));

function showSection(id){
  document.querySelectorAll('.card').forEach(c=>c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

// Simple form handlers (placeholder - integrate SheetDB/Make.com as needed)
document.getElementById('signupForm').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Merci — votre inscription a été reçue (demo).');
  this.reset();
});

document.getElementById('loginForm').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Connexion demo réussie.');
});

document.getElementById('sendMsg').addEventListener('click',function(){
  const text = document.getElementById('message').value.trim();
  if(!text){ alert('Entrez un message.'); return; }
  alert('Merci — message envoyé (demo).');
  document.getElementById('message').value='';
});
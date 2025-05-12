// Ouvrir le modal et remplir info
function openModal(spaceName, price, period) {
    document.getElementById('reservationModal').style.display = 'block';
    document.getElementById('spaceName').value = spaceName + ` - ${price} MAD ${period}`;
  }
  
  // Fermer le modal
  function closeModal() {
    document.getElementById('reservationModal').style.display = 'none';
    document.getElementById('reservationForm').reset();
    document.getElementById('sendWhatsApp').innerHTML = '';
  }
  
  // Envoi du formulaire
  document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const date = document.getElementById('date').value;
    const duration = document.getElementById('duration').value;
    const spaceInfo = document.getElementById('spaceName').value;
  
    const message = `
  📝 Nouvelle réservation:\n
  - Espace: ${spaceInfo}
  - Nom: ${nom}
  - Email: ${email}
  - WhatsApp: ${whatsapp}
  - Date: ${date}
  - Durée: ${duration}
    `;
  
    // Créer lien WhatsApp
    const whatsappLink = `https://wa.me/212771503357?text=${encodeURIComponent(message)}`;
  
    // Afficher le bouton pour envoyer via WhatsApp
    document.getElementById('sendWhatsApp').innerHTML = `
      <a href="${whatsappLink}" target="_blank" class="btn btn-success">
        <i class="fab fa-whatsapp"></i> Envoyer à WhatsApp
      </a>
    `;
  
    // Optionnel: fermer le modal après
    // closeModal();
  });
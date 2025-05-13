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
   document.addEventListener('DOMContentLoaded', function() {
                const modal = document.getElementById('contact-modal');
                const openModalBtns = document.querySelectorAll('[id*="cta"], #main-cta, #bottom-cta');
                const closeModalBtn = document.getElementById('close-modal');
                
                openModalBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        modal.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    });
                });
                
                closeModalBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                });
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
                
                const statNumbers = document.querySelectorAll('.stat-number');
                const statsSection = document.querySelector('.stats-section');
                
                function animateStats() {
                    const rect = statsSection.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 100) {
                        statNumbers.forEach(stat => {
                            const target = parseInt(stat.getAttribute('data-count'));
                            const duration = 2000;
                            const step = target / (duration / 16);
                            let current = 0;
                            
                            const timer = setInterval(() => {
                                current += step;
                                if (current >= target) {
                                    clearInterval(timer);
                                    stat.textContent = target;
                                } else {
                                    stat.textContent = Math.floor(current);
                                }
                            }, 16);
                        });
                        
                        window.removeEventListener('scroll', animateStats);
                    }
                }
                
                window.addEventListener('scroll', animateStats);
                
              document.getElementById('home-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const phoneNumber = "212612345678"; // Remplace par TON numéro WhatsApp
    const whatsappMessage = `Bonjour, je suis ${name}. Mon email est ${email}. Voici ma demande : ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');

    this.reset();
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

                
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                const navPremium = document.querySelector('.nav-premium');
                
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenuBtn.classList.toggle('active');
                    navPremium.classList.toggle('active');
                    document.body.style.overflow = navPremium.classList.contains('active') ? 'hidden' : 'auto';
                });
                
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        if (targetId === '#') return;
                        
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                            
                            if (navPremium.classList.contains('active')) {
                                mobileMenuBtn.classList.remove('active');
                                navPremium.classList.remove('active');
                                document.body.style.overflow = 'auto';
                            }
                        }
                    });
                });
                
                if (window.innerWidth < 768) {
                    const heroVideo = document.querySelector('.video-background video');
                    if (heroVideo) {
                        heroVideo.poster = "img/union-affaires-mobile.jpg";
                        heroVideo.autoplay = false;
                    }
                }
                
                const testimonials = document.querySelectorAll('.testimonial-card');
                let currentTestimonial = 0;
                
                function showTestimonial(index) {
                    testimonials.forEach((testimonial, i) => {
                        testimonial.classList.toggle('active', i === index);
                    });
                }
                
                setInterval(() => {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                }, 5000);
            });
            const menuBtn = document.getElementById('mobile-menu-btn');
const nav = document.querySelector('.nav-premium');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
  
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
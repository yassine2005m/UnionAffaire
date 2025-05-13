document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu
    if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
        
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
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

    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (burger) burger.classList.remove('toggle');
                }
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksElements = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

    // Menu mobile toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('open');
            this.classList.toggle('active');
        });
    }

    // Animation au scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    // Déclenche l'animation au chargement et au scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Ferme le menu mobile si ouvert
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Validation du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation basique
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simulation d'envoi
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.disabled = true;
                submitBtn.textContent = 'Envoi en cours...';
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message envoyé !';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Add animation styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes navLinkFade {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .burger.toggle .line1 { transform: rotate(-45deg) translate(-5px, 6px); }
        .burger.toggle .line2 { opacity: 0; }
        .burger.toggle .line3 { transform: rotate(45deg) translate(-5px, -6px); }
        
        .service-card, .testimonial-card, .feature-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .testimonial-card.animate, .feature-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleElement);

    // Témoignages slider
    const testimonials = [
        {
            text: "L'espace de coworking a transformé notre façon de travailler. L'environnement est inspirant et les services impeccables.",
            name: 'Mohamed K.',
            role: 'CEO, TechSolutions',
            img: 'atul-pandey-LvPRNMgCR5E-unsplash.jpg',
            rating: 5
        },
        {
            text: "Le service de domiciliation nous a permis d'avoir une adresse prestigieuse sans les coûts d'un bureau traditionnel.",
            name: 'Fatima Z.',
            role: 'Directrice, GreenImport',
            img: 'alexander-mass-SbhyICmA9Po-unsplash.jpg',
            rating: 5
        },
        {
            text: "Un accompagnement sur-mesure et une équipe toujours disponible. Je recommande vivement Union des Affaires.",
            name: 'Yassine B.',
            role: 'Entrepreneur',
            img: 'karsten-winegeart-ZAiuJXbF7dA-unsplash.jpg',
            rating: 5
        }
    ];

    let testimonialIndex = 0;
    const testimonialCard = document.getElementById('testimonialCard');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');

    function renderTestimonial(idx) {
        if (!testimonialCard) return;
        const t = testimonials[idx];
        testimonialCard.innerHTML = `
            <div class="testimonial-rating">
                ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <img src="${t.img}" alt="${t.name}" loading="lazy">
                <div class="author-info">
                    <h4>${t.name}</h4>
                    <small>${t.role}</small>
                </div>
            </div>
        `;
    }

    if (testimonialPrev && testimonialNext && testimonialCard) {
        testimonialPrev.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
            renderTestimonial(testimonialIndex);
        });
        
        testimonialNext.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            renderTestimonial(testimonialIndex);
        });
        
        // Initial render
        renderTestimonial(testimonialIndex);
    }
});

// Gestion du mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        document.documentElement.setAttribute('data-theme', 
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
        localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
        
        // Mise à jour de l'icône
        const icon = this.querySelector('i');
        if (icon) {
            icon.className = document.documentElement.getAttribute('data-theme') === 'dark' 
                ? 'fas fa-sun' 
                : 'fas fa-moon';
        }
    });
    
    // Vérifie la préférence sauvegardée
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Met à jour l'icône initiale
    const icon = darkModeToggle.querySelector('i');
    if (icon) {
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Optimisation des images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Animation des statistiques
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50; // 50 étapes d'animation
        const duration = 2000; // 2 secondes
        const step = duration / 50;
        
        const updateStat = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                setTimeout(updateStat, step);
            } else {
                stat.textContent = target;
            }
        };
        
        updateStat();
    });
}

// Observer pour déclencher l'animation des stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observer les sections de stats
document.querySelectorAll('.stats-grid, .hero-stats').forEach(section => {
    statsObserver.observe(section);
});

// Effet de parallaxe
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialiser le parallaxe
initParallax();

// Gestion du bouton retour en haut
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Effet de scroll reveal amélioré
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                if (entry.target.dataset.delay) {
                    entry.target.style.transitionDelay = `${entry.target.dataset.delay}ms`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
}

// Initialiser le scroll reveal
initScrollReveal();

// Animation des cartes au survol
function initHoverEffects() {
    const cards = document.querySelectorAll('.service-card, .feature-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialiser les effets de survol
initHoverEffects();
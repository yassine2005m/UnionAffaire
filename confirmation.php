<?php
$reference = htmlspecialchars($_GET['ref'] ?? '');
$whatsappUrl = $_GET['whatsapp'] ?? '';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réservation Confirmée | Union des Affaires</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="styles2.css">
    <style>
        .confirmation-page {
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem 1rem;
        }
        
        .confirmation-card {
            background: var(--card-bg);
            border-radius: var(--border-radius-lg);
            padding: 2rem;
            box-shadow: var(--shadow-md);
            max-width: 600px;
            width: 100%;
            text-align: center;
            border: 1px solid var(--border-color);
        }
        
        .confirmation-icon {
            font-size: 4rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }
        
        .confirmation-card h1 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .confirmation-card p {
            margin-bottom: 1.5rem;
        }
        
        .whatsapp-button {
            background: #25D366;
            color: white;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: var(--border-radius-md);
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            transition: all 0.3s;
        }
        
        .whatsapp-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
        }
    </style>
</head>
<body>
    <header class="main-header">
        <!-- Contenu du header -->
    </header>
    
    <section class="confirmation-page">
        <div class="confirmation-card">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h1>Demande Envoyée !</h1>
            <p>Votre demande de réservation a été envoyée avec succès.</p>
            <p><strong>Référence:</strong> <?php echo $reference; ?></p>
            
            <?php if(!empty($whatsappUrl)): ?>
            <p>Cliquez sur le bouton ci-dessous pour finaliser votre réservation via WhatsApp :</p>
            <a href="<?php echo $whatsappUrl; ?>" class="whatsapp-button" target="_blank">
                <i class="fab fa-whatsapp"></i> Continuer sur WhatsApp
            </a>
            <?php else: ?>
            <p>Nous avons envoyé une confirmation à votre adresse email.</p>
            <p>Notre équipe vous contactera prochainement pour finaliser votre réservation.</p>
            <?php endif; ?>
            
            <div style="margin-top: 2rem;">
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </a>
            </div>
        </div>
    </section>
    
    <footer class="main-footer">
    </footer>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</body>
</html>

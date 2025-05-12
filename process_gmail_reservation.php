<?php
// Désactiver l'affichage des erreurs pour la production
error_reporting(0);
ini_set('display_errors', 0);

// Récupérer les données du formulaire
$spaceName = htmlspecialchars($_POST['space_name'] ?? '');
$spaceType = htmlspecialchars($_POST['space_type'] ?? '');
$startDate = htmlspecialchars($_POST['start_date'] ?? '');
$endDate = htmlspecialchars($_POST['end_date'] ?? '');
$price = htmlspecialchars($_POST['price'] ?? '');
$clientName = htmlspecialchars($_POST['client_name'] ?? '');
$clientEmail = htmlspecialchars($_POST['client_email'] ?? '');
$clientMessage = htmlspecialchars($_POST['client_message'] ?? '');

// Générer une référence de réservation
$reference = 'UDA-' . date('Ymd') . '-' . rand(100, 999);

// Configuration email
$to = 'yassine2005w@gmail.com'; // Adresse email de l'entreprise
$subject = "Nouvelle demande de réservation: $reference";

// Corps du message
$message = "
<html>
<head>
    <title>Nouvelle demande de réservation</title>
    <style>
        body {font-family: Arial, sans-serif; line-height: 1.6;}
        .container {max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;}
        h2 {color: #1a237e;}
        .details {margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 5px;}
        .footer {margin-top: 30px; font-size: 12px; color: #777;}
    </style>
</head>
<body>
    <div class='container'>
        <h2>Nouvelle demande de réservation</h2>
        <p>Une nouvelle demande de réservation a été soumise via Gmail.</p>
        
        <div class='details'>
            <p><strong>Référence:</strong> $reference</p>
            <p><strong>Espace:</strong> $spaceName</p>
            <p><strong>Type:</strong> $spaceType</p>
            <p><strong>Période:</strong> du $startDate au $endDate</p>
            <p><strong>Prix indiqué:</strong> $price MAD</p>
        </div>
        
        <div class='details'>
            <p><strong>Client:</strong> $clientName</p>
            <p><strong>Email:</strong> $clientEmail</p>
            <p><strong>Message:</strong> $clientMessage</p>
        </div>
        
        <div class='footer'>
            <p>Ce message a été généré automatiquement depuis le site Union des Affaires.</p>
        </div>
    </div>
</body>
</html>
";

// En-têtes pour l'email HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Union des Affaires <noreply@union-affaires.ma>" . "\r\n";
$headers .= "Reply-To: $clientEmail" . "\r\n";

// Envoi de l'email
$mailSent = mail($to, $subject, $message, $headers);

// Email de confirmation au client
$clientSubject = "Confirmation de votre demande de réservation: $reference";
$clientMessage = "
<html>
<head>
    <title>Confirmation de demande de réservation</title>
    <style>
        body {font-family: Arial, sans-serif; line-height: 1.6;}
        .container {max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;}
        h2 {color: #1a237e;}
        .details {margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 5px;}
        .footer {margin-top: 30px; font-size: 12px; color: #777;}
    </style>
</head>
<body>
    <div class='container'>
        <h2>Confirmation de votre demande</h2>
        <p>Cher(e) $clientName,</p>
        <p>Nous avons bien reçu votre demande de réservation. Notre équipe la traitera dans les plus brefs délais.</p>
        
        <div class='details'>
            <p><strong>Référence:</strong> $reference</p>
            <p><strong>Espace:</strong> $spaceName</p>
            <p><strong>Période:</strong> du $startDate au $endDate</p>
            <p><strong>Prix indiqué:</strong> $price MAD</p>
        </div>
        
        <p>Nous vous contacterons prochainement par email pour confirmer votre réservation.</p>
        
        <div class='footer'>
            <p>Union des Affaires | Angle Bd Lalla Yacout, 7ème étage, Casablanca | +212 600-800747</p>
        </div>
    </div>
</body>
</html>
";

$clientHeaders = "MIME-Version: 1.0" . "\r\n";
$clientHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$clientHeaders .= "From: Union des Affaires <noreply@union-affaires.ma>" . "\r\n";

$clientMailSent = mail($clientEmail, $clientSubject, $clientMessage, $clientHeaders);

// Enregistrement dans un fichier de log
$logMessage = date('Y-m-d H:i:s') . " - Gmail - Ref: $reference - Client: $clientName - Email: $clientEmail\n";
file_put_contents('reservations.log', $logMessage, FILE_APPEND);

// Redirection vers une page de confirmation
header('Location: confirmation.php?ref=' . $reference);
exit();
?>

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
$clientPhone = htmlspecialchars($_POST['client_phone'] ?? '');
$clientMessage = htmlspecialchars($_POST['client_message'] ?? '');

// Générer une référence de réservation
$reference = 'UDA-' . date('Ymd') . '-' . rand(100, 999);

// Configuration email pour notifier l'administrateur
$to = 'yassine2005w@gmail.com'; // Adresse email de l'entreprise
$subject = "Nouvelle demande de réservation WhatsApp: $reference";

// Corps du message
$message = "
<html>
<head>
    <title>Nouvelle demande de réservation WhatsApp</title>
    <style>
        body {font-family: Arial, sans-serif; line-height: 1.6;}
        .container {max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;}
        h2 {color: #1a237e;}
        .details {margin: 20px 0; background: #f9f9f9; padding: 15px; border-radius: 5px;}
        .footer {margin-top: 30px; font-size: 12px; color: #777;}
        .whatsapp-button {background: #25D366; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; display: inline-block; margin-top: 15px;}
    </style>
</head>
<body>
    <div class='container'>
        <h2>Nouvelle demande de réservation via WhatsApp</h2>
        <p>Une nouvelle demande de réservation a été soumise pour contact par WhatsApp.</p>
        
        <div class='details'>
            <p><strong>Référence:</strong> $reference</p>
            <p><strong>Espace:</strong> $spaceName</p>
            <p><strong>Type:</strong> $spaceType</p>
            <p><strong>Période:</strong> du $startDate au $endDate</p>
            <p><strong>Prix indiqué:</strong> $price MAD</p>
        </div>
        
        <div class='details'>
            <p><strong>Client:</strong> $clientName</p>
            <p><strong>Téléphone WhatsApp:</strong> $clientPhone</p>
            <p><strong>Message:</strong> $clientMessage</p>
        </div>
        
        <a href='https://wa.me/" . preg_replace('/[^0-9]/', '', $clientPhone) . "?text=Bonjour%20" . urlencode($clientName) . ",%20nous%20avons%20bien%20reçu%20votre%20demande%20de%20réservation%20référence%20" . $reference . "%20pour%20" . urlencode($spaceName) . ".%20Comment%20puis-je%20vous%20aider%20?%20%20Union%20des%20Affaires' class='whatsapp-button'>Contacter sur WhatsApp</a>
        
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

// Envoi de l'email
$mailSent = mail($to, $subject, $message, $headers);

// Préparation du lien WhatsApp pour redirection
$phoneNumber = preg_replace('/[^0-9]/', '', $clientPhone);
$whatsappMessage = "Bonjour, je souhaite réserver le " . $spaceName . " (Référence: " . $reference . ") du " . $startDate . " au " . $endDate . ".";
if (!empty($clientMessage)) {
    $whatsappMessage .= " Message additionnel: " . $clientMessage;
}
$whatsappUrl = 'https://wa.me/212771503357?text=' . urlencode($whatsappMessage);

// Enregistrement dans un fichier de log
$logMessage = date('Y-m-d H:i:s') . " - WhatsApp - Ref: $reference - Client: $clientName - Phone: $clientPhone\n";
file_put_contents('reservations.log', $logMessage, FILE_APPEND);

// Redirection vers WhatsApp
header('Location: confirmation.php?ref=' . $reference . '&whatsapp=' . urlencode($whatsappUrl));
exit();
?>

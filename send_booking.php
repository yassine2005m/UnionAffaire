<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName = htmlspecialchars($_POST["lastName"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $company = htmlspecialchars($_POST["company"]);
    $date = htmlspecialchars($_POST["date"]);
    $message = htmlspecialchars($_POST["message"]);
    $contactMethod = htmlspecialchars($_POST["contactMethod"]);
    $space = htmlspecialchars($_POST["space"]);

    // Adresse de réception
    $to = "yassine2005w@gmail.com";
    $subject = "Nouvelle réservation - Union des Affaires";

    $body = "Une nouvelle réservation a été soumise :\n\n";
    $body .= "👤 Nom : $firstName $lastName\n";
    $body .= "📧 Email : $email\n";
    $body .= "📱 Téléphone : $phone\n";
    $body .= "🏢 Entreprise : $company\n";
    $body .= "📅 Date souhaitée : $date\n";
    $body .= "📍 Espace réservé : $space\n";
    $body .= "📝 Message : $message\n";
    $body .= "📬 Contact via : $contactMethod\n";

    // Envoi de l'e-mail
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "invalid";
}
?>

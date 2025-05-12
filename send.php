<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['telephone']);
    $espace = htmlspecialchars($_POST['espace']);
    $date = htmlspecialchars($_POST['date']);
    $msg = htmlspecialchars($_POST['message']);

    if (empty($nom) || empty($email) || empty($tel) || empty($espace) || empty($date)) {
        echo "Veuillez remplir tous les champs obligatoires.";
        exit();
    }

    $numero_whatsapp = "212771503357";

    $message = "Nouvelle demande de réservation:%0A";
    $message .= "👤 Nom: $nom%0A";
    $message .= "📧 Email: $email%0A";
    $message .= "📞 Téléphone: $tel%0A";
    $message .= "🏢 Espace souhaité: $espace%0A";
    $message .= "📅 Date: $date%0A";
    $message .= "📝 Message: $msg";

    $message_url = urlencode($message);
    $message = "Nouvelle demande de réservation:\n";
$message .= "👤 Nom: $nom\n";
$message .= "📧 Email: $email\n";
$message .= "📞 Téléphone: $tel\n";
$message .= "🏢 Espace souhaité: $espace\n";
$message .= "📅 Date: $date\n";
$message .= "📝 Message: $msg";

    header("Location: https://wa.me/$numero_whatsapp?text=$message_url");
    exit();
} else {
    echo "Accès non autorisé.";
    exit();
}
?>

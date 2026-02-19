<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// =======================
// DATABASE
// =======================
$conn = new mysqli("localhost", "root", "", "portfolio_db");
if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "DB Error"]);
  exit;
}

// =======================
// GET DATA
// =======================
$data = json_decode(file_get_contents("php://input"), true);
$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$message = $data["message"] ?? "";

if ($name == "" || $email == "" || $message == "") {
  echo json_encode(["success" => false, "message" => "Incomplete data"]);
  exit;
}

// =======================
// SAVE TO DB
// =======================
$stmt = $conn->prepare(
  "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)"
);
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

// =======================
// SEND EMAIL
// =======================
$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'wirasentanu76@gmail.com';      // GANTI
  $mail->Password   = 'xvahgnctmyfgafxi';        // GANTI
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587;

  // Email ke kamu
  $mail->setFrom('wirasentanu76@gmail.com', 'Portfolio Contact');
  $mail->addAddress('wirasentanu76@gmail.com');

  $mail->isHTML(true);
  $mail->Subject = 'New Contact Message';
  $mail->Body    = "
    <h3>New Message from Portfolio</h3>
    <p><b>Name:</b> $name</p>
    <p><b>Email:</b> $email</p>
    <p><b>Message:</b><br>$message</p>
  ";

  $mail->send();

  // =======================
  // AUTO REPLY
  // =======================
  $mail->clearAddresses();
  $mail->addAddress($email);
  $mail->Subject = 'Thank you for contacting me';
  $mail->Body = "
    <p>Hi <b>$name</b>,</p>
    <p>Thank you for reaching out. I have received your message and will reply as soon as possible.</p>
    <br>
    <p>Best regards,<br>Wira Sentanu</p>
  ";

  $mail->send();

  echo json_encode(["success" => true]);

} catch (Exception $e) {
  echo json_encode([
    "success" => false,
    "message" => $mail->ErrorInfo
  ]);
}

$conn->close();
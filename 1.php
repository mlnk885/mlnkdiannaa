<?php
$result = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = "Помилка: некоректний email!";
    } elseif (strlen($message) < 20) {
        $result = "Помилка: повідомлення має містити мінімум 20 символів!";
    } else {
        $result = "Повідомлення успішно надіслано!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Форма зворотного зв'язку</title>
</head>
<body>

<h2>Форма зворотного зв'язку</h2>

<form method="post">
    <label>Ім'я:</label><br>
    <input type="text" name="name" required><br><br>

    <label>Email:</label><br>
    <input type="text" name="email" required><br><br>

    <label>Повідомлення:</label><br>
    <textarea name="message" required></textarea><br><br>

    <button type="submit">Надіслати</button>
</form>

<p><?php echo $result; ?></p>

</body>
</html>

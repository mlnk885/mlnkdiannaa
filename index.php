<?php
session_start();

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit();
}

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $login = $_POST['login'];
    $password = $_POST['password'];

    if ($login === "admin" && $password === "admin") {
        $_SESSION['authorized'] = true;
        $_SESSION['user'] = $login;
    } else {
        $message = "Неправильний логін або пароль!";
    }
}

$user_ip = $_SERVER['REMOTE_ADDR'];
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Авторизація</title>

    <style>
        body {
            font-family: Arial;
            margin: 40px;
            background: #f2f2f2;
        }

        .container {
            background: white;
            padding: 20px;
            width: 350px;
            border-radius: 10px;
        }

        input, button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
        }

        button {
            background: #007bff;
            color: white;
            border: none;
        }

        .error {
            color: red;
        }
    </style>
</head>
<body>

<div class="container">

<?php if (isset($_SESSION['authorized'])): ?>

    <h2>Вітаємо, <?php echo $_SESSION['user']; ?>!</h2>

    <p>Ваш IP: <?php echo $user_ip; ?></p>

    <a href="?logout=true">
        <button>Вийти</button>
    </a>

<?php else: ?>

    <h2>Вхід</h2>

    <?php if ($message != ""): ?>
        <p class="error"><?php echo $message; ?></p>
    <?php endif; ?>

    <form method="POST">
        <input type="text" name="login" placeholder="Логін" required>
        <input type="password" name="password" placeholder="Пароль" required>
        <button type="submit">Увійти</button>
    </form>

    <p>Ваш IP: <?php echo $user_ip; ?></p>

<?php endif; ?>

</div>

</body>
</html>
//https://dianamelniyk66.fwh.is/?i=1

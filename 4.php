<?php
function clean($data) {
    return htmlspecialchars(trim($data));
}

$name = $email = $product = $quantity = "";
$result = "";
$errors = [];
$prices = [
    "Телефон" => 10000,
    "Ноутбук" => 25000,
    "Навушники" => 2000
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = clean($_POST["name"]);
    $email = clean($_POST["email"]);
    $product = clean($_POST["product"]);
    $quantity = clean($_POST["quantity"]);

    if (!is_numeric($quantity) || $quantity < 1 || $quantity > 100) {
        $errors["quantity"] = "Кількість має бути від 1 до 100!";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Некоректний email!";
    }

    if (empty($errors)) {
        $total = $prices[$product] * $quantity;

        $result = "Замовлення успішне!<br>
        Ім'я: $name <br>
        Email: $email <br>
        Товар: $product <br>
        Кількість: $quantity <br>
        Сума: $total грн";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Замовлення товару</title>
</head>
<body>

<h2>Форма замовлення</h2>

<form method="post">

Ім'я:<br>
<input type="text" name="name" value="<?php echo $name; ?>"><br><br>

Email:<br>
<input type="text" name="email" value="<?php echo $email; ?>">
<span style="color:red"><?php echo $errors["email"] ?? ""; ?></span>
<br><br>

Товар:<br>
<select name="product">
    <option <?php if($product=="Телефон") echo "selected"; ?>>Телефон</option>
    <option <?php if($product=="Ноутбук") echo "selected"; ?>>Ноутбук</option>
    <option <?php if($product=="Навушники") echo "selected"; ?>>Навушники</option>
</select>
<br><br>

Кількість:<br>
<input type="text" name="quantity" value="<?php echo $quantity; ?>">
<span style="color:red"><?php echo $errors["quantity"] ?? ""; ?></span>
<br><br>

<button type="submit">Замовити</button>

</form>

<p><?php echo $result; ?></p>

</body>
</html>
<?php

#[Attribute]
class LogTransactionType {
    public $type;

    public function __construct($type) {
        $this->type = $type;
        echo "<p>Останній виклик для типу '{$type}': " . date("Y-m-d H:i:s") . "</p>";
    }
}

$transactions = [
    ["amount" => 100, "type" => "in", "date" => "2026-04-01"],
    ["amount" => 50,  "type" => "out", "date" => "2026-04-02"],
    ["amount" => 200, "type" => "in", "date" => "2026-04-03"],
    ["amount" => 80,  "type" => "out", "date" => "2026-04-04"],
    ["amount" => 30,  "type" => "out", "date" => "2026-04-05"],
    ["amount" => 120, "type" => "in", "date" => "2026-04-06"],
    ["amount" => 60,  "type" => "out", "date" => "2026-04-07"],
];

function isOutgoing($transaction) {
    return $transaction['type'] === "out";
}

#[LogTransactionType(type: "out")]
function calculateTotal($transactions, $filter) {

    $filtered = array_filter($transactions, $filter);

    $total = 0;
    foreach ($filtered as $t) {
        $total += $t['amount'];
    }

    return [$filtered, $total];
}

$func = new ReflectionFunction('calculateTotal');
foreach ($func->getAttributes() as $attr) {
    $attr->newInstance();
}

list($outgoing, $total) = calculateTotal($transactions, "isOutgoing");

?>

<!DOCTYPE html>
<html>
<head>
    <title>Transactions</title>
</head>
<body>

<h2>Вихідні транзакції (out)</h2>

<table border="1">
    <tr>
        <th>Amount</th>
        <th>Type</th>
        <th>Date</th>
    </tr>

    <?php foreach ($outgoing as $t): ?>
        <tr>
            <td><?= $t['amount'] ?></td>
            <td><?= $t['type'] ?></td>
            <td><?= $t['date'] ?></td>
        </tr>
    <?php endforeach; ?>

    <tr>
        <td colspan="3">Загальна сума витрат: <?= $total ?></td>
    </tr>

</table>

</body>
</html>
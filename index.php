<?php

#[Attribute]
class OnlyAdults {
    public function __construct() {
        echo "Виклик функції фільтрації 18+\n\n";
    }
}

$users = [
    ["name" => "Anna", "age" => 17, "email" => "anna@mail.com"],
    ["name" => "Oleksandr", "age" => 22, "email" => "alex@mail.com"],
    ["name" => "Ivan", "age" => 19, "email" => "ivan@mail.com"],
    ["name" => "Maria", "age" => 25, "email" => "maria@mail.com"],
    ["name" => "Petro", "age" => 16, "email" => "petro@mail.com"],
    ["name" => "Olha", "age" => 30, "email" => "olha@mail.com"],
    ["name" => "Dmytro", "age" => 21, "email" => "dima@mail.com"],
    ["name" => "Sofia", "age" => 18, "email" => "sofia@mail.com"],
    ["name" => "Maksym", "age" => 27, "email" => "maks@mail.com"],
    ["name" => "Nazar", "age" => 15, "email" => "nazar@mail.com"]
];

#[OnlyAdults]
function filterAdults($users) {
    return array_filter($users, function($user) {
        return $user['age'] >= 18;
    });
}

function compareByNameLength($a, $b) {
    return strlen($a['name']) - strlen($b['name']);
}

$func = new ReflectionFunction('filterAdults');
foreach ($func->getAttributes() as $attr) {
    $attr->newInstance();
}

$adults = filterAdults($users);
usort($adults, "compareByNameLength");
echo "<pre>";

$w1 = 12; 
$w2 = 5;  
$w3 = 25; 

echo "+" . str_repeat("-", $w1+2) .
     "+" . str_repeat("-", $w2+2) .
     "+" . str_repeat("-", $w3+2) . "+\n";

printf("| %-{$w1}s | %-{$w2}s | %-{$w3}s |\n", "Name", "Age", "Email");

echo "+" . str_repeat("-", $w1+2) .
     "+" . str_repeat("-", $w2+2) .
     "+" . str_repeat("-", $w3+2) . "+\n";

foreach ($adults as $user) {
    printf(
        "| %-{$w1}s | %-{$w2}d | %-{$w3}s |\n",
        $user['name'],
        $user['age'],
        $user['email']
    );
}

echo "+" . str_repeat("-", $w1+2) .
     "+" . str_repeat("-", $w2+2) .
     "+" . str_repeat("-", $w3+2) . "+\n";
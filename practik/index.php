<?php

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

$request = $_GET['url'] ?? '';
$path = explode('/', trim($request, '/'));

$request = strtok($request, '?');

$path = explode('/', trim($request, '/'));

$users = json_decode(file_get_contents('users.json'), true);


if ($method === 'GET') {

    if ($path[0] === 'users' && count($path) === 1) {
        echo json_encode($users);
    }

    elseif ($path[0] === 'users' && isset($path[1])) {

        $id = (int)$path[1];

        foreach ($users as $user) {
            if ($user['id'] === $id) {
                echo json_encode($user);
                exit;
            }
        }

        echo json_encode(["message" => "Користувача не знайдено"]);
    }
}


elseif ($method === 'POST') {

    if ($path[0] === 'users') {

        $data = json_decode(file_get_contents("php://input"), true);

        $newUser = [
            "id" => count($users) + 1,
            "name" => $data['name'],
            "email" => $data['email']
        ];

        $users[] = $newUser;

        file_put_contents('users.json', json_encode($users, JSON_PRETTY_PRINT));

        echo json_encode([
            "message" => "Користувача додано",
            "user" => $newUser
        ]);
    }
}


elseif ($method === 'PUT') {

    if ($path[0] === 'users' && isset($path[1])) {

        $id = (int)$path[1];

        $data = json_decode(file_get_contents("php://input"), true);

        foreach ($users as &$user) {

            if ($user['id'] === $id) {

                $user['name'] = $data['name'];
                $user['email'] = $data['email'];

                file_put_contents(
                    'users.json',
                    json_encode($users, JSON_PRETTY_PRINT)
                );

                echo json_encode([
                    "message" => "Користувача оновлено",
                    "user" => $user
                ]);

                exit;
            }
        }

        echo json_encode(["message" => "Користувача не знайдено"]);
    }
}


elseif ($method === 'DELETE') {

    if ($path[0] === 'users' && isset($path[1])) {

        $id = (int)$path[1];

        foreach ($users as $key => $user) {

            if ($user['id'] === $id) {

                unset($users[$key]);

                $users = array_values($users);

                file_put_contents(
                    'users.json',
                    json_encode($users, JSON_PRETTY_PRINT)
                );

                echo json_encode([
                    "message" => "Користувача видалено"
                ]);

                exit;
            }
        }

        echo json_encode(["message" => "Користувача не знайдено"]);
    }
}
?>
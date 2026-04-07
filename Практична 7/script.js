document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;
        document.getElementById("password").value = user.password;
    }
});

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Заповніть всі поля!");
        return;
    }

    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Дані збережено");
});

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Немає зареєстрованого користувача");
        return;
    }

    if (email === user.email && password === user.password) {
        alert("Успішний вхід");
    } else {
        alert("Невірні дані");
    }
}

function updateUser() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Спочатку зареєструйтесь");
        return;
    }

    const newName = document.getElementById("editName").value;
    const newPhone = document.getElementById("editPhone").value;

    if (newName !== "") {
        user.name = newName;
    }

    if (newPhone !== "") {
        user.phone = newPhone;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Дані оновлено");
}

function clearData() {
    localStorage.removeItem("user");
    alert("Дані видалено");
    location.reload();
}
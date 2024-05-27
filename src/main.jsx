import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Написать орму регистрации, по полям почта, имя, фамилия, пароль.
// отвалидировать данные (выводить в консоле invalid или valid для каждого поля и результата)
// Если вся форма валидна, то при отправлении зашифровать пароль и вывести измененный объект в консоле

// -----------------------
// Email: invalid
// Name: valid
// Password: valid

// Result: invalid
// -----------------------

// -----------------------
// Email: valid
// Name: valid
// Password: valid

// Result: valid
// {....}
// -----------------------

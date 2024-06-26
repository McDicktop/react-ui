# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# r e a c t u i

Компонента Form представляет собой форму с четырьмя полями для ввода значений и кнопку Submit для отправки этих значений.

Каждое из полей обернуто в <div class="input_wrapper">. Внутри <div> находятся <label> для отображения в форме названия поля и <input> для ввода значений в форму.

            <div className="input_wrapper">
                <label htmlFor="name_sighup">Name</label>
                <input
                    className="input_style"
                    type="text"
                    placeholder="Enter name"
                    id="name_signup"
                    value={user.name}
                    onChange={e => handleChange(user, setUser, "name", e.target.value)}
                />
            </div>

Для управления значениями полей используется хук состояния, значения по умолчанию каждого поля - пустые строки:

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        pass: "",
    });

При попытке изменения пользователем значениий в полях формы, будет вызываться фунция handleChange,
куда передается константа состояния user, функция изменения состояния setUser, имя ключа соответствующего поля и текущее значение этого поля.
При выполнения функции-чейнджера setUser происходит изменение состояния, что влечет обновление компоненты.

function handleChange(user, setUser, key, value) {
setUser({ ...user, [key]: value });
}

При нажатии на кнопку отправки данных формы возникает событие submit, обрабатываемое функцией handleSubmit, куда будет передаваться текущее значение user.
В этой функции происходит валидация каждого из свойств {name, surname, email, pass}<user>. Каждое невалидное значение поля будет отображено в консоли.
Если значения всех полей валидны, происходит шифрование пароля и отправка данных из формы.

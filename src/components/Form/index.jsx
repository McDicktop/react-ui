import { useState } from "react";
import "./index.css";
import { validateEmail, validateName, validatePass } from "../../utils";
import CryptoJS from "crypto-js";
// import "dotenv/config";

// const KEY = process.env.REACT_APP_KEY;

function handleChange(user, setUser, key, value) {
    setUser({ ...user, [key]: value });
}

function handleSubmit(e, user) {
    e.preventDefault();

    let k = true;
    if (!validateName(user.name)) {
        console.log("Invalid user name");
        k = false;
    }
    if (!validateName(user.surname)) {
        console.log("Invalid user surname");
        k = false;
    }
    if (!validateEmail(user.email)) {
        console.log("Invalid user email");
        k = false;
    }
    if (!validatePass(user.pass)) {
        console.log("Invalid user password");
        k = false;
    }
    if (k) {
        // user.pass = CryptoJS.AES.encrypt(user.pass, KEY).toString();
        console.log(user);
    }
}

const Form = function () {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        pass: "",
    });

    const [isVisible, setIsVisible] = useState(false);

    return (
        <form
            className="form"
            onSubmit={(e) => {
                handleSubmit(e, user);
            }}
        >
            <div className="input_wrapper">
                <label htmlFor="name_sighup">Name</label>
                <input
                    className="input_style"
                    type="text"
                    placeholder="Enter name"
                    id="name_signup"
                    value={user.name}
                    onChange={(e) => {
                        handleChange(user, setUser, "name", e.target.value);
                    }}
                />
            </div>

            <div className="input_wrapper">
                <label htmlFor="surname_sighup">Surname</label>
                <input
                    className="input_style"
                    type="text"
                    placeholder="Enter surname"
                    id="surname_signup"
                    value={user.surname}
                    onChange={(e) => {
                        handleChange(user, setUser, "surname", e.target.value);
                    }}
                />
            </div>

            <div className="input_wrapper">
                <label htmlFor="email_sighup">Email</label>
                <input
                    className="input_style"
                    type="email"
                    placeholder="Enter email"
                    id="email_signup"
                    value={user.email}
                    onChange={(e) => {
                        handleChange(user, setUser, "email", e.target.value);
                    }}
                />
            </div>

            <div className="input_wrapper">
                <label htmlFor="pass_sighup">Password</label>
                <input
                    className="input_style"
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter password"
                    id="pass_signup"
                    value={user.pass}
                    onChange={(e) => {
                        handleChange(user, setUser, "pass", e.target.value);
                    }}
                />
                <button
                    className="hide_btn"
                    type="button"
                    id="hide_btn"
                    onClick={(e) => {
                        e.target.classList.toggle("visible");
                        setIsVisible(!isVisible);
                    }}
                ></button>
            </div>

            <button id="submit_btn">Submit</button>
        </form>
    );
};

export default Form;

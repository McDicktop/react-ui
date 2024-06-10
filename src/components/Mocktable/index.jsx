import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://666340f262966e20ef0c113d.mockapi.io/";

async function removeUser(el, users, setUsers) {
    const isConfirmed = confirm("Do you really want to delete this note?");

    if (isConfirmed) {
        try {
            await axios.delete(URL + "table/" + el.id);
            updateForm(setUsers);
        } catch (error) {
            console.log("Error deleting user", error);
        }
    }
}

async function updateForm(setUsers) {
    try {
        const data = await getData();
        setUsers(data);
    } catch (error) {
        console.error("Error fetching users", error);
    }
}

async function toggleForm(showForm, setShowForm) {
    setShowForm(!showForm);
}

async function handleSubmit(
    e,
    user,
    setUser,
    showForm,
    setShowForm,
    users,
    setUsers
) {
    e.preventDefault();
    if (user.name && user.surname && user.email) {
        try {
            await axios.post(URL + "table", user);

            toggleForm(showForm, setShowForm);
            setUsers([...users, user]);
            clearForm(user, setUser);
        } catch (error) {
            console.log(error);
        }
    }
}

function clearForm(user, setUser) {
    setUser({
        name: "",
        surname: "",
        email: "",
    });
}

function handleChange(user, setUser, key, value) {
    setUser({ ...user, [key]: value });
}

async function getData() {
    const res = await axios.get(URL + "table");
    return res.data;
}

const Mocktable = function () {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
    });

    const [users, setUsers] = useState([]);

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getData();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users", error);
            }
        };

        fetchUsers();
    }, []);

    const form = (
        <form
            className="form"
            onSubmit={(e) =>
                handleSubmit(
                    e,
                    user,
                    setUser,
                    showForm,
                    setShowForm,
                    users,
                    setUsers
                )
            }
        >
            <button
                onClick={() => {
                    clearForm(user, setUser);
                    toggleForm(showForm, setShowForm);
                }}
            >
                Close
            </button>

            <div className="input_wrapper">
                <label htmlFor="name_sighup">Name</label>
                <input
                    className="input_style"
                    type="text"
                    placeholder="Enter name"
                    id="name_signup"
                    value={user.name}
                    onChange={(e) =>
                        handleChange(user, setUser, "name", e.target.value)
                    }
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
                    onChange={(e) =>
                        handleChange(user, setUser, "surname", e.target.value)
                    }
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
                    onChange={(e) =>
                        handleChange(user, setUser, "email", e.target.value)
                    }
                />
            </div>

            <button id="submit_btn">Submit</button>
        </form>
    );

    return (
        <>
            <button
                onClick={() => {
                    setShowForm(!showForm);
                }}
            >
                Add
            </button>

            <button onClick={() => updateForm(setUsers)}>Update</button>

            {showForm && <div className="form_container">{form}</div>}

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Email</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((el, index) => {
                        return (
                            <tr key={`index_${index}`}>
                                <td>{el.name}</td>
                                <td>{el.surname}</td>
                                <td>{el.email}</td>
                                <td
                                    onClick={() =>
                                        removeUser(el, users, setUsers)
                                    }
                                >
                                    🗑️
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Mocktable;

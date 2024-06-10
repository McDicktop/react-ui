import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import Table from "./components/Table";
import Button from "./components/Button";
import Mocktable from "./components/Mocktable";
import GalleryMock from "./components/Gallery";

// const baseUrl = "https://665ad7a0003609eda45efd13.mockapi.io/";

function App() {
    // const [count, setCount] = useState(0);
    // const [users, setUsers] = useState([]);
    // const [frame, setFrame] = useState(0);

    // const interval = setInterval(() => {
    //     setFrame(frame + 1);
    // }, 250);

    // useEffect(() => {
    //     console.log(frame);
    // }, [frame]);

    // async function getUsers() {
    //     const res = await axios.get(baseUrl + "table");
    //     return res.data;
    // }

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const userRes = await getUsers();
    //             // console.log(users);
    //             setUsers(userRes);
    //         } catch (error) {
    //             console.error("Error fetching users: ", error);
    //         }
    //     };

    //     fetchUsers();
    // }, []);

    // useEffect(() => {
    //     document.title = `Вы нажали ${count} раз`;
    // }, [count]);

    // useEffect(() => {
    //     console.log("Data was gotten");
    // }, [users]);

    return (
        <>
            {/* <Button></Button>
            <Form></Form> */}
            {/* <Table></Table> */}
            {/* <Mocktable /> */}

            <GalleryMock />
        </>
    );
}

export default App;

// 1. Составить новую коллекцию
// 2. Получать первоначально все данные
// 3. Добавить фильтрацию по 1 параметру (без повторного запроса на api)

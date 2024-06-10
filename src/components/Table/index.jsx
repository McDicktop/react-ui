import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const baseUrl = "https://665ad7a0003609eda45efd13.mockapi.io/";

const Table = function () {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(
        JSON.parse(localStorage.getItem("filter")) ?? {
            short: false,
            query: "",
            reverse: false,
        }
    );

    async function getUsers() {
        const res = await axios.get(baseUrl + "table");
        return res.data;
    }

    async function shortHandler() {
        await setFilter({ ...filter, short: !filter.short });
    }

    async function queryHandler(value) {
        await setFilter({ ...filter, query: value });
    }

    async function reverseHandler() {
        await setFilter({ ...filter, reverse: !filter.reverse });
    }

    function filterString(el, query) {
        const lowerCaseQuery = query.toLowerCase();

        return (
            el.name.toLowerCase().includes(lowerCaseQuery) ||
            el.surname.toLowerCase().includes(lowerCaseQuery) ||
            el.email.toLowerCase().includes(lowerCaseQuery)
        );
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userRes = await getUsers();
                setUsers(userRes);
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        localStorage.setItem("filter", JSON.stringify(filter));
    }, [filter]);

    return (
        <>
            <button
                onClick={async () => {
                    await shortHandler();
                }}
            >
                10 items {filter.short ? "✅" : "❌"}
            </button>

            <input
                type="text"
                placeholder="Search for..."
                id="table_search"
                value={filter.query}
                onChange={async (e) => {
                    await queryHandler(e.target.value);
                }}
            />

            <table className="table">
                <thead>
                    <tr>
                        <th
                            onClick={async () => {
                                await reverseHandler();
                            }}
                        >
                            Id {filter.reverse ? "⬇️" : "⬆️"}
                        </th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>E-Mail</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody id="tbody">
                    {users.reduce((acc, current, index) => {
                        const returns = (
                            <tr key={`user_${index}`}>
                                <td>{current.id}</td>
                                <td>{current.name}</td>
                                <td>{current.surname}</td>
                                <td>{current.email}</td>
                                <td>{current.date}</td>
                            </tr>
                        );

                        if (
                            ((filter.short && index < 10) || !filter.short) &&
                            ((filter.query &&
                                filterString(current, filter.query)) ||
                                !filter.query)
                        ) {
                            if (filter.reverse) {
                                acc.unshift(returns);
                            } else {
                                acc.push(returns);
                            }
                        }

                        return acc;
                    }, [])}
                </tbody>
            </table>
        </>
    );
};

export default Table;

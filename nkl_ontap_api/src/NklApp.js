import React, { useEffect, useState } from 'react';
import './App.css';
import NklListUsers from './components/NklListUsers';
import axios from './api/nklApi';

function NklApp() {
    const [nklListUsers, setNklListUsers] = useState([]);

    // Function to fetch data from API
    const nklGetAllUsers = async () => {
        const nklResponse = await axios.get("nklUsers");
        console.log("Api Data:", nklResponse.data);
        setNklListUsers(nklResponse.data);
    }

    useEffect(() => {
        nklGetAllUsers();
        console.log("State Data:", nklListUsers);
    }, []);

    return (
        <div className="container border my-3">
            <h1>Lam viec vs Api</h1>
            <hr />
            <NklListUsers renderNklListUsers={nklListUsers} />
        </div>
    );
}

export default NklApp;

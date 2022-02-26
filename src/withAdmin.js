import React, { useEffect, useState } from 'react';
import "./App.css";
import Sidebar from './compenents/sidebar/Sidebar';
import Topbar from './compenents/topbar/Topbar';

const withAdmin = (Component) => (props) => {
    const [user, setUser] = useState(null);

    const updateUser = () => {
        fetch("http://localhost:8000/api/user", {headers: {"Authorization": "Bearer "+localStorage.getItem("token")}})
            .then(res => res.json())
            .then(res => {
                setUser(res)
                console.log(res)
            })
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            updateUser();
        } else {
            window.location = "/login"
        }
    }, [])
    return (
        <>
            <Topbar user={user}/>
            <div className='container'>
                <Sidebar user={user}/>
                <Component {...props} user={user} updateUser={updateUser}/>
            </div>
        </>
    );
}

export default withAdmin;
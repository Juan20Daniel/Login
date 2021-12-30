import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import useAuth from '../../hook/useAuth';
const Admin = () => {
    console.log(useAuth());
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className='content-admin'>
                <h1>Admin</h1>
                <h1>Admin</h1>
                <h1>Admin</h1>
                <h1>Admin</h1>
            </div>
        </>
    );
}

export default Admin;
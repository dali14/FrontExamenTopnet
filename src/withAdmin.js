import React from 'react';
import Sidebar from './compenents/sidebar/Sidebar';
import Topbar from './compenents/topbar/Topbar';

const withAdmin = (Component) => (props) => {
    return (
        <>
            <Topbar/>
            <div className='container'>
                <Sidebar/>
                <Component/>
            </div>
        </>
    );
}

export default withAdmin;
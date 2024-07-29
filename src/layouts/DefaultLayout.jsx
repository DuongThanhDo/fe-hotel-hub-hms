import React from 'react';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';

function DefaultLayout({ children }) {
    return (
        <div className='w-[100vw] h-[100vh] overflow-hidden'>
            <Header />
            <div className='flex'>
                <SideBar />
                <div className='flex-1'>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

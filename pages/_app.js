// import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
// import { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {
    const userData = useUserData();

    return (
        <UserContext.Provider value={userData}>
          
        <Navbar />
        <Component {...pageProps} />
        <Toaster />

        </UserContext.Provider>
    ) 
}

export default MyApp;
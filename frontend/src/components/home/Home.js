import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import './Home.css'
import Hirdetes from '../hirdetes/Hirdetes';

function HomePage() {
    

    return (
        <div className='mainWrapper'>
            <Header />
            <Hirdetes />
        </div>
    );
}

export default HomePage;
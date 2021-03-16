import React from 'react';
import Header from '../header/Header';
import './Home.css'
import Hirdetes from '../hirdetes/Hirdetes';

function HomePage() {
    return (
    <div className='mainWrapper'>
        <Header />
        <div className='videoWrapper'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/55OJ17cHeJA?start=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
        <Hirdetes />
    </div>
    );
}

export default HomePage;
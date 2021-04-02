import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import './Home.css'
import Hirdetes from '../hirdetes/Hirdetes';
import PostFeed from '../postFeed/PostFeed'

function HomePage() {
    const [uzenet, setUzenet] = useState('');
    //Fetch to backend if necesary
    fetch('http://localhost:8080/api/hello')
        .then(response => response.json()).then(data => {
            console.log(data.message);
            setUzenet(data.message)
        }).catch(err => console.log('FETCH ERROR ' + err))

    useEffect(() => {
        console.log('ADATOK ADATOK ADATOK: ' + uzenet)

    }, [uzenet])

    return (
        <div className='mainWrapper'>
            <Header />
            <div className='openingSection'>
               
                <div className='homePostFeedWrapper'>
                <PostFeed />
                </div>
                 <div className='videoWrapper'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s-pfqLjs-Ec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
            </div>
            <p>{uzenet}</p>
            <Hirdetes />
            
        </div>
    );
}

export default HomePage;
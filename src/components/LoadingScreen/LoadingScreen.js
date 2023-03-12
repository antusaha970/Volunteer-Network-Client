import React from 'react';
import './Loader.css';

const LoadingScreen = () => {
    return (
        <div className='loader-box'>
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    );
};

export default LoadingScreen;
import React from 'react';
import './Train.css'
import Blobs from '../decorations/Blob.jsx'

const Train = () => {
    return <div className = 'TrainingPage'>
        <div className='header'>Training</div>
        <div className='header-text'></div>
        <Blobs />
    </div>;
};

export default Train;
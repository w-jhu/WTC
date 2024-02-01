import React, { Component } from 'react';
import './Summary.css';
import BarGraph from './graphAnimations/barGraph';
import '../../decorations/Squares.css'
import slides from '../data/summaryData.json';


const Summary = () => {
    return (
        <div>
            <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div >
            <div className='summaryContainer'>
                <div className='taskGraph'>
                    <BarGraph data = {slides}/>
                </div>
            </div>
        </div>
        
    );
};

export default Summary;

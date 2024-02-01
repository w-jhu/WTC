import React from 'react';
import './Profile.css'
import '../../decorations/Squares.css'
import CustomPieChart from './graphAnimations/pieChart';
import AnimatedCounter from '../../decorations/Counter.jsx';

const slides = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

const Profile = () => {
    return (
    <div>
        <div className="area" >
            <ul className="circles">
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
            <div className='scoreSummary'>
                <div className='header-profile'>YOUR RATING</div>
                <CustomPieChart/>
                <ul className="testStatistic">
                    <li className='mainScore'>Your main score is: <AnimatedCounter targetNumber={998} duration={5} negative_power={1} /></li>
                    <li className='statisticNumber'>Competition:  <AnimatedCounter targetNumber={2} duration={5} negative_power={0} /> out of 250</li>
                </ul>
            </div>
            {/* Fuck it we ball */}
            {/* <div className='profile'>Fucking profile</div> */}
        </div>
    </div>
    );
};

export default Profile;
import React, { useEffect } from 'react';
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm';
import { loadAll } from 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm';
import './Home.css';
import logo1 from './images/FranklinDAO.png'
import logo2 from './images/Wharton-logo.png'
import logo3 from './images/WUDAC+logo.png'
import AnimatedCounter from './decorations/Counter.jsx';


const Home = () => {
  useEffect(() => {
    const initializeParticles = async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset('lightdark', {
        fullScreen: {
          enable: false
        },
        particles: {
          links: {
            enable: true,
            distance: 220,
            opacity: 0.5
          },
          move: {
            enable: true
          },
          number: {
            value: 100
          },
          opacity: {
            value: { min: 0.3, max: 0.5 }
          },
          shape: {
            type: ['circle', 'triangle']
          },
          size: {
            value: { min: 4, max: 6 }
          },
          repulse: {
            enable: true,
            distance: 50,
            duration: 0.4
          }
        }
      });

      await tsParticles.load({
        id: 'light',
        options: {
          preset: 'lightdark',
          particles: {
            color: {
              value: '#282f85'
            },
            links: {
              color: '#262460'
            },
          }
        }
      });
    };

    initializeParticles();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const pictureSources = [
    logo1, 
    logo2,
    logo3
  ];


  return <div className="FrontPage">
    <div id="light"> 
    </div>
    <ul className="board">
        <div className="WTC-global-1">
            <span className="WTC-local-1-1">WELCOME</span> TO <span class="WTC-local-1-2">WHARTON</span> 
        </div>
        <div className="WTC-global-2">
            <span className="WTC-local-2-1">TRADING</span> COMPETITION!
        </div>
        <div className = 'subheader-1'>Join our vibrant community. Over our long history we got:
        </div>
        <li className="summary-window">
            <button id="quants-button"><AnimatedCounter targetNumber={197} duration={5} /></button>
            Quants On Board
        </li>
        <li className="summary-window">
            <button id="prizes-button"><AnimatedCounter targetNumber={5000} duration={5} /></button>
            Dollars In Prizes
        </li>
        <li className="summary-window">
            <button id="hours-button"><AnimatedCounter targetNumber={698} duration={5} /></button>
            Hours Spent Solving Problems
        </li>
        <li className="summary-window">
            <button id="tasks-button"><AnimatedCounter targetNumber={1097} duration={5} /></button>
            Tasks Have Been Solved
        </li>
        <div class = 'subheader-2'>And an infinite number of great memories!
        </div>
    </ul>
    <div className="terminal-window">
      <div className="terminal-header">
        <div className = 'terminal-header-text'>MESSAGE FROM THE BOARD</div>
        <div className="button minimize" title="Minimize"><span className="underline">_</span></div>
        <div className="button maximize" title="Maximize"></div>
        <div className="button close" title="Close"><span className="cross">&#10005;</span></div>
      </div>
      <div className="terminal-content">
        <p>Thank you for joining the WTC community!</p>
        <p> Our mission is simple: provide those who are interested in quantitative
             finance with necessary skills to ace the technical interviews and with knowledge to succeed on the job.</p>
        <p>We know that everyone’s background is unique, so our website is made to be helpful to both complete novices and seasoned seniors in the field. With the help of the training section newcomers can practice their skills, while professionals can try to win cash prizes for being the best in the competition section. Yet, most importantly, we want everyone to have good fun while trying to crack fascinating quantitative finance challenges!</p> 
      </div>
    </div>
    <div class="sponsors-text">
            <span class="WTC-local-1-2">SPONSORS</span> 
    </div>
    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '10vw', marginLeft: '8vw', marginTop: '30px',}}>
      {pictureSources.map((src, index) => (
        <li key={index}>
          <img src={src} alt={`Picture ${index + 1}`} style={{ width: '20vw', height: 'auto' }} />
        </li>
      ))}
    </ul>
  </div>;
};

export default Home;

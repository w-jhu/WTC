import React, { useEffect } from 'react';
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm';
import { loadAll } from 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm';
import './Home.css';

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
            value: 60
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

  return <div className="FrontPage">
    <div id="light"> 
    </div>
    <ul className="board">
        <div class="WTC-global-1">
            <span class="WTC-local-1-1">WELCOME</span> TO <span class="WTC-local-1-2">WHARTON</span> 
        </div>
        <div class="WTC-global-2">
            <span class="WTC-local-2-1">TRADING</span> COMPETITION!
        </div>
        <li className="summary-window">
            <button id="quants-button">179</button>
            Quants On Board
        </li>
        <li className="summary-window">
            <button id="prizes-button">$5,000</button>
            Money In Prizes
        </li>
        <li className="summary-window">
            <button id="hours-button">689</button>
            Hours Spent Solving Problems
        </li>
        <li className="summary-window">
            <button id="tasks-button">1089</button>
            Tasks Have Been Solved
        </li>
    </ul>
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="button minimize" title="Minimize"></div>
        <div className="button maximize" title="Maximize"></div>
        <div className="button close" title="Close"><span className="cross">&#10005;</span></div>
      </div>
      <div className="terminal-content">
        <div className="command-line">
          <span className="prompt">C:\Users\Guest&gt;</span>
          <input type="text" className="command-input" autoFocus />
        </div>
        <p>Welcome to the Retro Terminal!</p>
      </div>
    </div>
  </div>;
};

export default Home;

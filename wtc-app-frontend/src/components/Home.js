import React, { useEffect } from 'react';
import { tsParticles } from 'https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm';
import { loadAll } from 'https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm';

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

  return <div id="light" 
  style={{
    width: '100vw',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}></div>;
};

export default Home;

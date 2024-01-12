import React, { useState } from 'react';
import './Train.css';
import Blobs from '../decorations/Blob.jsx';
import { Link } from 'react-router-dom';

const MemoizedBlobs = React.memo(Blobs);

const Train = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (selector) => {
        const selectors = ['Selector 1', 'Selector 2', 'Selector 3'];

        if (selectors.includes(selector)) {
        setSelectedOptions(selectors.filter((item) => item !== selector));
        } else {
        setSelectedOptions([...selectedOptions, selector]);
        }
    };  

    return (
        <div className='TrainingPage'>
          <MemoizedBlobs />
          <div className='header'>Training</div>
          <div className='header-text'>This part of the website exists for you to hone your craft of problem-solving.</div>
          <div className='header-text'>You can create your own task set, developed for your own ambitions and passions:</div>
          <div className='card'>
            <div className='taskSelection'>Select the stuff you want, please</div>
            <div className='subjectSelection'>
              <div className="column-title">Column Selection</div>
      
              <div className="selector">
                <input
                  type="checkbox"
                  id="selector1"
                  checked={selectedOptions.includes('Selector 1')}
                  onChange={() => handleCheckboxChange('Selector 1')}
                />
                <label htmlFor="selector1">Selector 1</label>
              </div>
      
              <div className="selector">
                <input
                  type="checkbox"
                  id="selector2"
                  checked={selectedOptions.includes('Selector 2')}
                  onChange={() => handleCheckboxChange('Selector 2')}
                />
                <label htmlFor="selector2">Selector 2</label>
              </div>
      
              <div className="selector">
                <input
                  type="checkbox"
                  id="selector3"
                  checked={selectedOptions.includes('Selector 3')}
                  onChange={() => handleCheckboxChange('Selector 3')}
                />
                <label htmlFor="selector3">Selector 3</label>
              </div>
            </div>
            <div className="menu-item"><Link to="/test">Let's Go!</Link></div>
          </div>
        </div>
      );
};

export default Train;

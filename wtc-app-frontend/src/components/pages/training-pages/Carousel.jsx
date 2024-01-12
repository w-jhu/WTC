import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate  } from "react-router-dom";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [userInput, setUserInput] = useState('');
  const isLastIndex = slide === data.length - 1;
  const navigate = useNavigate();

  if (!Array.isArray(data)) {
    console.error("Carousel: 'data' prop is not an array");
    return null;
  }

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // Logic for saving the user input
  const handleSave = () => {
    console.log('User input saved:', userInput);

  };
  const submitAnswers = () => {
    console.log('User answers submitted:', userInput);
    navigate("/summary");
  }
  // Edit this logic

  const renderButton = (idx) => {
    if (isLastIndex) {
      // Render a different button for the last slide
      return (
        <button onClick={submitAnswers} id={idx}>
          Submit
        </button>
      );
    } else {
      // Render the default button for other slides
      return (
        <button onClick={handleSave} id={idx}>
          Save
        </button>
      );
    }
  };

  return (
    <div className="carousel">
      
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <div key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'}>
          <div className='test-headliner'>Problem {idx+1}: {item.headline}</div>
          {item.text}
          <div className='userInput'>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write something..."
              />
              {renderButton(idx)}
          </div>
          </div>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          >{idx + 1}</button>
        ))}
      </span>
    </div>
  );
};

 
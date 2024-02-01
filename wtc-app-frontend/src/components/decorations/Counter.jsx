import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ targetNumber, duration, negative_power }) => {
  const [count, setCount] = useState(0);
  const intervalDuration = 1000 / 60; // 60 frames per second

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedValue = easeInOut(progress);

      setCount(Math.round(easedValue * targetNumber));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber/(10**negative_power), duration]);

  // Easing function (ease-in-out)
  const easeInOut = (t) => 0.5 * (1 - Math.cos(Math.PI * t));

  return (
    <div>{count/(10**negative_power)}
    </div>
  );
};

export default AnimatedCounter;


import React, { useRef, useEffect } from 'react';

const LineConnector: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const line = lineRef.current;
      const dot = dotRef.current;

      const scrollPercentage = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
      const lineLength = line?.getBoundingClientRect().width || 0;
      const dotPosition = scrollPercentage * lineLength;

      if (dot) {
        dot.style.transform = `translateX(${dotPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="line" ref={lineRef}></div>
      <div className="dot" ref={dotRef}></div>
    </div>
  );
};

export default LineConnector;

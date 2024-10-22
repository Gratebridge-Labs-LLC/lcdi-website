import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 100 }) => {
  const [visibleText, setVisibleText] = useState('');
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let currentIndex = 0;

    const animateText = () => {
      if (currentIndex <= text.length) {
        setVisibleText(text.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex <= text.length) {
          animationRef.current = setTimeout(animateText, delay);
        }
      }
    };

    animateText();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [text, delay]);

  return <span className="animated-text">{visibleText}</span>;
};

export default AnimatedText;
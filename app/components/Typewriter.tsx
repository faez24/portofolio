"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBeforeDelete = 2000,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // Pause before typing next word
      } else {
        timer = setTimeout(handleType, typingDelay);
      }
    };

    timer = setTimeout(handleType, typingDelay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span className="inline-block min-w-[20px]">
      {text}
      <span className="animate-[pulse_1s_infinite] ml-[2px] border-r-2 border-teal-500"></span>
    </span>
  );
}

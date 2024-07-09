import { useState, useRef, useCallback, useEffect } from "react";

export const useTimer = () => {
  const [counter, setCounter] = useState<number>(0);
  const [started, toggleStart] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (!started) {
      timerRef.current = setInterval(() => {
        setCounter((prevValue) => prevValue + 1);
      }, 1000);
      toggleStart(true);
    }
  }, [started]);

  const pause = useCallback(() => {
    toggleStart(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCounter(0);
    toggleStart(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return { counter, started, start, pause, reset };
};

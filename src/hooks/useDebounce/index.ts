import { useEffect, useState } from 'react';

export const useDebounce = (callback: Function, delay: number) => {
  const [timeoutId, setTimeoutId] = useState<any>(null);

  const debouncedCallback = (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return debouncedCallback;
};

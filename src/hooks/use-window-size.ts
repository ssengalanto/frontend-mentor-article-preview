/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
  const isClient = typeof window === 'object';

  const getSize = (): WindowSize => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = (): void => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

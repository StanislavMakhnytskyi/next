import { useEffect, useRef } from 'react';

export const useInitialRender = (): boolean => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return isInitialRender.current;
};

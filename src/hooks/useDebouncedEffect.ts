import { DependencyList, useEffect } from 'react';

const useDebounceEffect = (callback: () => void, delay: number, dependencies: DependencyList | undefined) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => { clearTimeout(handler); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useDebounceEffect;
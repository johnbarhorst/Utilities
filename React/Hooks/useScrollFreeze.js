import { useLayoutEffect } from 'react';

// put useScrollFreeze() on something like a modal. While the component is present, scroll will be disabled.

export const useScrollFreeze = () => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [])
}
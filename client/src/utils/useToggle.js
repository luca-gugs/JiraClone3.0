import { useCallback, useEffect, useRef, useState } from 'react';

export const useToggle = initialOpen => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const ref = useRef();

  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isOpen, setIsOpen };
};

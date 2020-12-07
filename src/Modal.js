import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// retrieve modal entry point
const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }
  // when it renders the first time
  useEffect(() => {
    // add wrapper modal
    modalRoot.appendChild(elRef.current);
    // run on the onmount, when you close modal
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

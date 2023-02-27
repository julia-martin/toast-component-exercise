import React from "react";

import useKeyDown from '../../hooks/useKeyDown';

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, []);
  useKeyDown('Escape', handleEscape);

  function dismissToast(id) {
    setToasts(toasts.filter(toast => toast.id !== id));
  }

  function createToast(variant, children) {
    const id = crypto.randomUUID();
    setToasts([...toasts, {
      id,
      variant,
      children,
    }]);
  }

  return (
    <ToastProviderContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastProviderContext.Provider>
  );
}

export default ToastProvider;

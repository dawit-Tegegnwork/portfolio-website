import React, { useEffect } from 'react';

function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (!visible) return undefined;
    const timer = setTimeout(onHide, 2200);
    return () => clearTimeout(timer);
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default Toast;

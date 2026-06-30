import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Toast from './Toast';

function CopyButton({ text, label = 'Copy command' }) {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setToastVisible(true);
    }
  };

  return (
    <>
      <button type="button" className="copy-btn" onClick={handleCopy} aria-label={label}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <Toast message="Command copied to clipboard" visible={toastVisible} onHide={() => setToastVisible(false)} />
    </>
  );
}

export default CopyButton;

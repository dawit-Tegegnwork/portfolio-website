import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, profile } from '../data/site';

function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      {open ? (
        <nav id="mobile-menu" className="mobile-nav__panel" aria-label="Mobile">
          <p className="mobile-nav__name">{profile.name}</p>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button--primary mobile-nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact Me
          </a>
        </nav>
      ) : null}
    </div>
  );
}

export default MobileNav;

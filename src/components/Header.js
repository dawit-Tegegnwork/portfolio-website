import React from 'react';
import { navigation, profile } from '../data/site';
import MobileNav from './MobileNav';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark">
            <span className="pulse-dot pulse-dot--live" aria-hidden="true" />
            DT
          </span>
          <span className="brand__text">{profile.title}</span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Contact Me
        </a>

        <MobileNav />
      </div>
    </header>
  );
}

export default Header;

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function closeOnOutsidePointer(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeOnEscape);
      document.addEventListener("pointerdown", closeOnOutsidePointer);
    }

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner" ref={menuRef}>
        <Link className="site-brand" href="/" onClick={closeMenu}>
          <span aria-hidden="true" className="site-brand__rule" />
          <span>Gifting Without Borders</span>
        </Link>

        <nav aria-label="Primary navigation" className="site-nav site-nav--desktop">
          {siteConfig.navigation.map((item) => (
            <Link className="site-nav__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="button button--primary site-header__donate" href={siteConfig.donateHref}>
            Donate
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-button"
            onClick={() => setIsOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <span aria-hidden="true" className="menu-button__icon">
              <span />
              <span />
              <span />
            </span>
            <span>{isOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={`site-nav site-nav--mobile ${isOpen ? "site-nav--open" : ""}`}
          id="mobile-navigation"
        >
          {siteConfig.navigation.map((item) => (
            <Link className="site-nav__link" href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--primary site-nav__donate" href={siteConfig.donateHref} onClick={closeMenu}>
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

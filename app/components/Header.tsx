"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Forside", href: "/" },
  { label: "Tjenester / Priser", href: "/tjenester"},
  { label: "Om oss / Kontakt", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand">
      <div className="mx-auto flex h-16 lg:h-24 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Firmanavn"
            className="h-12 w-auto lg:h-16"
          />
        </a>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium site-text">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-brand hover:text-on-brand rounded focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Åpne meny"
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 lg:hidden"
        >
          <div className="space-y-2">
            <span className="block h-0.5 w-7 bg-white" />
            <span className="block h-0.5 w-7 bg-white" />
            <span className="block h-0.5 w-7 bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <nav className="border-t border-white/10 px-4 py-3 sm:px-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
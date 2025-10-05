"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/60 border-b border-muted">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" aria-label="MBGku Home">
          <div className="h-8 w-8 rounded-md bg-primary/90"></div>
          <span className="font-semibold tracking-tight">MBGku</span>
        </a>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li>
            <a className="hover:text-primary transition" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition" href="#about">
              About us
            </a>
          </li>
          <li>
            <a className="hover:text-primary transition" href="#data">
              Data
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-white hover:shadow-cardHover hover:-translate-y-0.5 transition"
              href="#login"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-muted">
          <ul className="px-4 py-3 space-y-2">
            <li>
              <a className="block px-2 py-2 rounded hover:bg-muted" href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a className="block px-2 py-2 rounded hover:bg-muted" href="#about" onClick={() => setOpen(false)}>
                About us
              </a>
            </li>
            <li>
              <a className="block px-2 py-2 rounded hover:bg-muted" href="#data" onClick={() => setOpen(false)}>
                Data
              </a>
            </li>
            <li>
              <a className="block px-2 py-2 rounded bg-primary text-white" href="#login" onClick={() => setOpen(false)}>
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

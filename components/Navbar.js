"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname(); // 👈 Get current path

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // For now, just log the search term
    console.log("Search:", search);
    // Later, you can implement actual search functionality
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        background: "var(--nav-bg)",
        color: "var(--nav-text)",
        borderBottom: "1px solid #eee",
        width: "90  %", // Add this line
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Simple SVG Blog Logo */}

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="28" rx="4" fill="#4F8EF7" />
          <rect x="14" y="16" width="20" height="16" rx="2" fill="#fff" />
          <rect x="18" y="20" width="12" height="2" rx="1" fill="#4F8EF7" />
          <rect x="18" y="24" width="8" height="2" rx="1" fill="#4F8EF7" />
        </svg>
        <span style={{ fontWeight: "bold", fontSize: 20 }}>Santosh</span>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          href="/"
          className="nav-hover-effect"
          style={{
            color: pathname === "/" ? "#4F8EF7" : "var(--nav-text)",
            fontWeight: pathname === "/" ? "bold" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
          }}
        >
          Home
        </Link>
        <Link
          href="/tech"
          className="nav-hover-effect"
          style={{
            color: pathname === "/" ? "#4F8EF7" : "var(--nav-text)",
            fontWeight: pathname === "/" ? "bold" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
          }}
        >
          Tech
        </Link>
        <Link
          href="/coding"
          className="nav-hover-effect"
          style={{
            color: pathname === "/" ? "#4F8EF7" : "var(--nav-text)",
            fontWeight: pathname === "/" ? "bold" : "normal",
            textDecoration: pathname === "/" ? "underline" : "none",
          }}
        >
          Coding
        </Link>
      </div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginRight: "1rem" }}>
        <input
          type="text"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.3rem 0.6rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </form>
      {/* Social Links */}
      <a
        href="https://github.com/santoshram811"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="nav-hover-effect"
        style={{ display: "flex", alignItems: "center" }}
      >
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/santosh-kumar-ram-563234224/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="nav-hover-effect"
        style={{ display: "flex", alignItems: "center" }}
      >
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
        </svg>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <LanguageSwitcher />
        <button onClick={toggleTheme}>{dark ? "🌙 Dark" : "☀️ Light"}</button>
      </div>
    </nav>
  );
}

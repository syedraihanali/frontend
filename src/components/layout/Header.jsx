import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthContext';
import ThemeToggle from '../ui/ThemeToggle';

const navLinkClasses =
  'rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-700 dark:hover:bg-white/80 dark:focus-visible:ring-offset-slate-200';

function Header() {
  const { auth, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-300/60 dark:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-slate-700 sm:px-6">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-brand-primary transition hover:text-slate-900"
          onClick={() => setMobileMenuOpen(false)}
        >
          Destination Health
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden items-center gap-2 md:flex">
            <Link to="/" className={navLinkClasses}>
              Home
            </Link>
            <a href="#services" className={navLinkClasses}>
              Services
            </a>
            <Link to="/about-us" className={navLinkClasses}>
              About Us
            </Link>
            <Link to="/staff-portal" className={navLinkClasses}>
              Staff Portal
            </Link>
            {auth.token ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className={`${navLinkClasses} flex items-center gap-2 bg-white/80 text-slate-600 shadow-sm hover:bg-white`}
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <FaUserCircle className="text-lg text-brand-primary" />
                  Profile
                  <span className="text-xs text-slate-400">&#9662;</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-xl dark:border-slate-300/60 dark:bg-white/95">
                    <Link
                      to="/myprofile"
                      className="block rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      type="button"
                      className="mt-3 w-full rounded-full bg-slate-100 px-4 py-2 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signin"
                className="rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Sign In
              </Link>
            )}
          </nav>

          <ThemeToggle className="hidden md:inline-flex" />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200/80 bg-white/90 px-4 pb-6 pt-3 shadow-lg backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#services"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <Link
              to="/about-us"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/staff-portal"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              Staff Portal
            </Link>
            {auth.token ? (
              <div className="flex flex-col gap-2" ref={dropdownRef}>
                <Link
                  to="/myprofile"
                  className={`${navLinkClasses} bg-white text-slate-600`}
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  View Profile
                </Link>
                <button
                  type="button"
                  className="rounded-full bg-slate-100 px-4 py-2 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

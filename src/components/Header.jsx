import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const navLinkClasses =
  'rounded-md px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

function Header() {
  const { auth, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-white transition hover:text-brand-accent"
          onClick={() => setMobileMenuOpen(false)}
        >
          Destination Health
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-2 md:flex">
            <Link to="/" className={navLinkClasses}>
              Home
            </Link>
            <a href="#how-to-book" className={navLinkClasses}>
              How to Book
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
                  className={`${navLinkClasses} flex items-center gap-2`}
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <FaUserCircle className="text-lg" />
                  Profile
                  <span className="text-xs">&#9662;</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-900/95 p-2 shadow-xl">
                    <Link
                      to="/myprofile"
                      className="block rounded-md px-3 py-2 text-sm text-white transition hover:bg-white/10"
                      onClick={() => setDropdownOpen(false)}
                    >
                      View Profile
                    </Link>
                    <button
                      type="button"
                      className="mt-1 w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
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
                className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Sign In
              </Link>
            )}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900/95 px-4 pb-4 pt-2 shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#how-to-book"
              className={navLinkClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              How to Book
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
                  className={navLinkClasses}
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  View Profile
                </Link>
                <button
                  type="button"
                  className="rounded-md bg-red-500/90 px-3 py-2 text-left text-sm font-semibold text-white shadow hover:bg-red-500"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="rounded-md bg-brand-accent px-3 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500"
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

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const links = [
  {
    title: 'Services',
    items: ['Find a doctor', 'Patient portal', 'Telehealth', 'Care programs'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Support',
    items: ['Help center', 'Privacy policy', 'Terms of use', 'Accessibility'],
  },
];

function HomeFooter() {
  return (
    <footer className="mt-16 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-card shadow-blue-100/40">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_2fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">Destination Health</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Comprehensive, coordinated care starts here. Book appointments, access secure records, and stay connected to your providers from anywhere.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <a href="https://twitter.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 hover:border-brand-primary hover:text-brand-primary" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {links.map((column) => (
            <div key={column.title} className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{column.title}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {column.items.map((item) => (
                  <li key={item} className="transition hover:text-brand-primary">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Destination Health. All rights reserved.
      </div>
    </footer>
  );
}

export default HomeFooter;

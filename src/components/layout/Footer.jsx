import React from 'react';
import { FaCcMastercard, FaCcVisa, FaCcAmex, FaUniversity } from 'react-icons/fa';

const payments = [
  { label: 'Visa', icon: <FaCcVisa /> },
  { label: 'Mastercard', icon: <FaCcMastercard /> },
  { label: 'American Express', icon: <FaCcAmex /> },
  { label: 'Bank Transfer', icon: <FaUniversity /> },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-300/60 dark:bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 text-slate-600 dark:text-slate-700 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-primary">Destination Health</h2>
          <p className="max-w-sm text-sm leading-relaxed">
            Delivering compassionate care through intuitive technology. We connect patients with the right clinicians at the right moment.
          </p>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Location</h3>
            <p className="mt-2 text-sm">123 Wellness Avenue, Suite 500, Harmony City, HC 45678</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Payments we accept</h3>
          <div className="flex flex-wrap items-center gap-4 text-3xl text-brand-primary">
            {payments.map((payment) => (
              <span key={payment.label} className="flex items-center gap-2">
                {payment.icon}
                <span className="sr-only">{payment.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80 bg-white/75 py-4 text-center text-xs text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Destination Health. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

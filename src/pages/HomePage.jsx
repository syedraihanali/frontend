import React from 'react';
import { FaCheckCircle, FaClock, FaHeadset } from 'react-icons/fa';
import BookingCard from '../components/home/BookingCard';
import AuthSection from '../components/home/AuthSection';
import AboutSection from '../components/home/AboutSection';
import HomeFooter from '../components/home/HomeFooter';

const quickBenefits = [
  {
    icon: <FaCheckCircle className="text-brand-primary" />,
    title: 'Same-week availability',
    description: 'Reserve open appointments with board-certified specialists in just a few taps.',
  },
  {
    icon: <FaClock className="text-brand-primary" />,
    title: 'Coordinated reminders',
    description: 'Stay on top of upcoming visits with automated reminders and calendar sync.',
  },
  {
    icon: <FaHeadset className="text-brand-primary" />,
    title: '24/7 care support',
    description: 'Connect with our care team for scheduling help or medical questions anytime.',
  },
];

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-slate-100 pb-24">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pt-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-card shadow-blue-100/60 backdrop-blur lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Your health, organized
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Book doctor appointments with clarity and confidence.
            </h1>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Destination Health brings your care team, health history, and appointment booking into one easy-to-use home page. Create an account, find a specialist, and confirm your visit in minutes.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {quickBenefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col gap-3 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BookingCard />
        </section>

        <AuthSection />

        <AboutSection />
      </main>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <HomeFooter />
      </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'New Patient',
    description: 'Register now to create your profile and connect with a family doctor.',
    cta: { label: 'Register', to: '/register' },
  },
  {
    title: 'Family Doctor',
    description: 'Already registered? Book your next appointment quickly and easily.',
    cta: { label: 'Book Now', to: '/book-appointment' },
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-slate-800">
      <section className="rounded-3xl bg-gradient-to-tr from-brand-primary via-sky-500 to-brand-accent px-6 py-14 text-center text-white shadow-2xl">
        <h1 className="text-3xl font-semibold sm:text-4xl">Healthcare made easy.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-100 sm:text-lg">
          Your trusted portal for booking appointments and managing patient care.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2" id="how-to-book">
        <article className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-card backdrop-blur">
          <div className="space-y-5 text-left text-lg leading-relaxed">
            <p>
              Welcome to the Doctor’s Portal — your simple and secure way to manage healthcare online. This platform
              connects patients with their family doctors, making it easy to register, book appointments, and view
              upcoming visits or medical history all in one place.
            </p>
            <p>
              As a patient, you can create your profile, choose your family doctor, and instantly check available time
              slots. Booking is fast, transparent, and hassle-free, ensuring you get the care you need when you need it.
              Our portal is designed to save time, reduce waiting, and give you better control over your healthcare
              journey.
            </p>
          </div>
        </article>

        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-card backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-xl font-semibold text-brand-primary">{card.title}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-600">{card.description}</p>
                <button
                  type="button"
                  className="mt-6 w-full rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  onClick={() => navigate(card.cta.to)}
                >
                  {card.cta.label}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

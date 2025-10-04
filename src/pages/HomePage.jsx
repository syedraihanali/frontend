import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaShieldAlt, FaHeartbeat, FaClock, FaMobileAlt, FaCalendarCheck } from 'react-icons/fa';

const quickActions = [
  {
    title: 'New Patient',
    description: 'Create your profile, share your medical history, and get matched with the right doctor in minutes.',
    cta: { label: 'Register Now', to: '/register' },
    icon: <FaHeartbeat className="text-xl" />,
  },
  {
    title: 'Returning Patient',
    description: 'Securely sign in to manage appointments, update records, and message your care team.',
    cta: { label: 'Access Portal', to: '/signin' },
    icon: <FaCalendarCheck className="text-xl" />,
  },
];

const serviceHighlights = [
  {
    icon: <FaUserMd />,
    title: 'Personalized Care',
    description: 'Choose from a network of trusted family doctors and specialists tailored to your needs.',
  },
  {
    icon: <FaClock />,
    title: 'Real-Time Availability',
    description: 'Browse open appointments instantly and pick the time that works best for your schedule.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure Health Records',
    description: 'Your information is encrypted and protected, giving you peace of mind every time you log in.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Care On-The-Go',
    description: 'Manage your appointments and reminders from any device with our fully responsive experience.',
  },
];

const bookingSteps = [
  {
    step: '01',
    title: 'Create Your Profile',
    description: 'Tell us about your medical history and preferences so we can connect you with the best provider.',
  },
  {
    step: '02',
    title: 'Choose a Doctor',
    description: 'Browse vetted professionals, read reviews, and select the doctor that feels right for you.',
  },
  {
    step: '03',
    title: 'Book & Confirm',
    description: 'Pick a convenient time, receive instant confirmation, and add it to your calendar in one tap.',
  },
];

const testimonials = [
  {
    name: 'Sophie L.',
    role: 'Chronic Care Patient',
    quote:
      '“I love how easy it is to find open appointments that fit my schedule. Destination Health keeps every detail organized.”',
  },
  {
    name: 'Marcus R.',
    role: 'Caregiver',
    quote:
      '“Managing my father’s appointments used to be stressful. Now I can track everything from reminders to prescriptions in one place.”',
  },
  {
    name: 'Dr. Evelyn Park',
    role: 'Family Physician',
    quote:
      '“The portal streamlines communication with patients and helps our team reduce wait times dramatically.”',
  },
];

const stats = [
  { label: 'Average Wait Time', value: '2.5 days' },
  { label: 'Doctors in Network', value: '180+' },
  { label: 'Patient Satisfaction', value: '98%' },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 text-slate-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl" />
        <div className="absolute -right-24 top-64 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      </div>

      <section className="rounded-[2rem] border border-white/20 bg-white/10 px-8 py-14 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] backdrop-blur-2xl lg:grid lg:grid-cols-[3fr,2fr] lg:items-center lg:gap-12">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
            Trusted Digital Health Hub
          </span>
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Book doctor appointments with clarity and confidence.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-sky-100 sm:text-lg">
              Destination Health brings your care team, health history, and appointment booking together in one secure, intuitive portal so you can focus on feeling your best.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => navigate('/book-appointment')}
              className="w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/40 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
            >
              Book Appointment
            </button>
            <button
              type="button"
              onClick={() => navigate('/about-us')}
              className="w-full rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
            >
              Learn More
            </button>
          </div>

          <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-center shadow-inner backdrop-blur"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-sky-100/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:mt-0">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="flex flex-col gap-3 rounded-3xl border border-white/20 bg-white/10 px-6 py-5 shadow-[0_10px_30px_-25px_rgba(15,23,42,0.8)] backdrop-blur"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/30 text-white">
                    {action.icon}
                  </span>
                  <h2 className="text-lg font-semibold text-white">{action.title}</h2>
                </div>
                <p className="mt-2 text-sm text-sky-100">{action.description}</p>
              </div>
              <button
                type="button"
                onClick={() => navigate(action.cta.to)}
                className="inline-flex items-center justify-center self-start rounded-full bg-brand-accent/90 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:-translate-y-0.5 hover:bg-sky-500"
              >
                {action.cta.label}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-white/20 bg-white/10 p-10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)] backdrop-blur-2xl" id="how-to-book">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-100">How it works</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Book in three simple steps</h2>
          <p className="mx-auto max-w-2xl text-sm text-sky-100 sm:text-base">
            We combined intuitive design with clinical expertise so you can move from signup to scheduled appointment without the guesswork.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {bookingSteps.map((item) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-8 py-10 shadow-lg backdrop-blur"
            >
              <span className="text-4xl font-semibold text-white/80">{item.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-sky-100">{item.description}</p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-primary/20 blur-2xl" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-white/20 bg-white/10 p-10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-100">Why patients choose us</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designed for modern healthcare</h2>
          <p className="mx-auto max-w-2xl text-sm text-sky-100 sm:text-base">
            Destination Health empowers patients and providers with tools that anticipate needs, streamline communication, and improve outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceHighlights.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-8 text-left shadow-lg backdrop-blur"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/30 text-2xl text-white">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-sky-100">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/20 bg-white/10 px-10 py-12 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.8)] backdrop-blur-2xl">
        <div className="flex flex-col gap-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-100">What people say</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Real stories from patients & providers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-lg backdrop-blur"
              >
                <p className="text-sm italic text-sky-100">{testimonial.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-wide text-sky-100/80">{testimonial.role}</p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-r from-brand-primary/80 via-brand-accent/80 to-sky-500/70 px-10 py-12 text-center shadow-[0_35px_70px_-45px_rgba(15,23,42,0.85)] backdrop-blur">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <FaHeartbeat className="text-4xl text-white" />
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready for a more connected care experience?</h2>
          <p className="text-sm text-sky-100 sm:text-base">
            Join thousands of patients who trust Destination Health to coordinate their appointments, records, and reminders with ease.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/book-appointment')}
              className="w-full rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-brand-primary shadow transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              Book Your Visit
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="w-full rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
            >
              Create an Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

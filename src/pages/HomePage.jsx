import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck, FaHeartbeat, FaShieldAlt, FaUserMd } from 'react-icons/fa';

const statistics = [
  { label: 'Clinicians in our network', value: '180+' },
  { label: 'Average confirmation time', value: '90 mins' },
  { label: 'Patient satisfaction', value: '98%' },
];

const services = [
  {
    icon: <FaUserMd />,
    title: 'Personalised doctor matching',
    description: 'Search by specialty, availability, and bedside manner to find the clinician who fits your expectations.',
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Appointments without friction',
    description: 'Reserve visits in a few steps, sync them with your calendar, and receive timely confirmations every time.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure, unified records',
    description: 'Documents and notes are stored with hospital-grade security so you can share the right details with ease.',
  },
];

const workflow = [
  {
    title: 'Share your priorities',
    description: 'Create a profile, outline your care goals, and let us tailor recommendations to your needs.',
  },
  {
    title: 'Review curated options',
    description: 'Compare clinicians, availability, and experience presented in a clear, distraction-free view.',
  },
  {
    title: 'Confirm with confidence',
    description: 'Secure your visit, receive confirmations instantly, and stay informed with thoughtful reminders.',
  },
];

const testimonials = [
  {
    quote:
      'Destination Health brings welcome clarity to our scheduling. Patients arrive calm, prepared, and on time.',
    name: 'Dr. Evelyn Park',
    role: 'Family Physician',
  },
  {
    quote: 'The platform keeps my family organised. Booking follow-ups takes minutes and the reminders are discreet.',
    name: 'Sophie Laurent',
    role: 'Parent and caregiver',
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 text-slate-600 sm:px-6 lg:px-8">
      <section className="grid gap-10 rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] md:grid-cols-[1.15fr_1fr] md:items-center dark:border-slate-300/70 dark:bg-white/85">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              Private & focused care
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              A composed way to arrange care, trusted by patients and clinicians alike.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              Destination Health simplifies every appointment with measured design. Explore an extensive clinical network, confirm visits swiftly, and rely on a platform built for discretion and dependability.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-brand-primary" />
              <span>Dedicated to preventative and primary care journeys.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-brand-primary" />
              <span>Data stewardship that respects your privacy.</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/book-appointment')}
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book an appointment
            </button>
            <button
              type="button"
              onClick={() => navigate('/about-us')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Meet our team
            </button>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-600 shadow-inner dark:border-slate-300/70 dark:bg-white/80">
          <p className="text-lg font-medium text-slate-900">
            "Our ambition is to make clinical coordination feel gracious. Every interaction should balance efficiency with warmth."
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {statistics.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-center">
                <p className="text-xl font-semibold text-brand-primary">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="space-y-8 rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] dark:border-slate-300/70 dark:bg-white/85">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Services designed for clarity</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Each touchpoint has been considered so appointments, records, and communication remain orderly for every member of the care team.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-6 text-left transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white text-xl text-brand-primary">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] dark:border-slate-300/70 dark:bg-white/85">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">A measured booking journey</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Three concise stages help you move from intention to confirmation without haste.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workflow.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-brand-primary">
                0{index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] dark:border-slate-300/70 dark:bg-white/85">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Perspectives from our community</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Professional teams and families rely on Destination Health to keep their schedules deliberate and composed.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/85 p-6 text-left">
              <p className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</p>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{testimonial.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/80 bg-brand-primary px-8 py-12 text-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.65)]">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let’s plan your next appointment thoughtfully</h2>
          <p className="text-sm text-white/80 sm:text-base">
            Join a service that values precision and discretion. Register in moments or begin by reviewing our clinicians.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-brand-primary transition hover:-translate-y-0.5 hover:bg-white"
            >
              Create your profile
            </button>
            <button
              type="button"
              onClick={() => navigate('/book-appointment')}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Book now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

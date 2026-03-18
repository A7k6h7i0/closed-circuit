import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function Taglines() {
  const luxuryTaglines = [
    'Exclusively Yours. Securely Shared.',
    'Where Privacy Becomes Prestige.',
    'Reserved for Your Circle.',
    'Intimate Connections. Absolute Control.',
    'Your Private World. Perfectly Protected.',
    'Not Public. Not Social. Personal.',
    'Because Family Moments Deserve Walls, Not Walls of Noise.',
    'Invitation Only. Privacy Always.',
    'Elite Privacy for Your Inner Circle.',
    'Control the Circle. Protect the Moments.',
  ];

  const ultraPremium = [
    'Private by Design.',
    'Access by Approval.',
    'The Luxury of Privacy.',
    'Membership Requires Trust.',
    'Designed for Discretion.',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="Branding"
        title="Luxury Taglines for Closed Circuit"
        subtitle="Premium brand language that communicates exclusivity, privacy, and trust."
      />

      {/* Section 1: Image + Brand Mood left | Taglists right */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.familyHero}
                alt="Elegant private moments"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Brand Mood</h3>
              <p className="mt-3 text-sm text-slate-600">
                Discreet, premium, and protective. A private space that feels prestigious and personal.
              </p>
            </Card>
          </motion.div>
          <div className="grid gap-6">
            <Card className="p-8">
              <h2 className="font-display text-2xl font-semibold text-slate-900">Luxury Tagline Options</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {luxuryTaglines.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <h2 className="font-display text-2xl font-semibold text-slate-900">Ultra-Premium (Minimal, High-End)</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {ultraPremium.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Image left | Positioning notes right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.secure}
              alt="Premium security"
              className="h-[320px] w-full object-cover"
              loading="lazy"
            />
          </Card>
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">Positioning Notes</h3>
            <p className="mt-3 text-slate-600">
              The language emphasizes exclusivity, approval-based access, and the serenity of a private digital home.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {['Invitation-only access', 'Privacy as a luxury', 'Calm, curated experience', 'Trusted inner circle'].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 text-sm text-slate-600">
                    {item}
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

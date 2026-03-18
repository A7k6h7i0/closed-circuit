import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function DifferSocial() {
  const whatsappLimits = [
    'Messages and memories get lost in long chat histories.',
    'No proper organization for events, albums, or categories.',
    'Too many notifications and unrelated forwards.',
    'Limited privacy control with no approval system.',
    'Difficult to manage large families with multiple fragmented groups.',
  ];

  const socialLimits = [
    'Presence of strangers and public ecosystem exposure.',
    'Advertisements and distractions mixed with family posts.',
    'Privacy concerns even with platform settings.',
    'Algorithms decide what updates family members see.',
    'Not designed for private family communities or structured memories.',
  ];

  const whyPrivate = [
    'A space only for your family with approved members.',
    'Organized family memories across posts, albums, and events.',
    'Secure and controlled sharing with admin approval.',
    'Meaningful family interaction through likes and comments.',
    'A single private digital home for family stories.',
  ];

  const steps = [
    'Create your family space.',
    'Invite family members with OTP verification.',
    'Approve members before access is granted.',
    'Create groups and events for family organization.',
    'Share and preserve memories in one secure place.',
  ];

  const useCases = [
    'Wedding memories shared with family in multiple cities.',
    'Family reunions and travel updates in one place.',
    'Festival celebrations and greetings without public feeds.',
    'Childhood milestones preserved for generations.',
    'Preserving family history through photos and stories.',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="How We Differ"
        title="Why WhatsApp and Public Social Media Are Not Ideal"
        subtitle="Families need a private digital space built specifically for preserving memories and managing relationships."
      />

      {/* Section 1: Images left | Limitation Cards right */}
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
                src={visuals.message}
                alt="Messaging overload"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.community}
                alt="Private community"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
          </motion.div>
          <div className="grid gap-6">
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  Limitations of WhatsApp Groups
                </h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {whatsappLimits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                <h2 className="font-display text-2xl font-semibold text-slate-900">
                  Limitations of Public Social Media
                </h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {socialLimits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Why Private left | Image + Steps right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-2 items-start">
          <Card className="p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                Why Families Need a Private Digital Space
              </h2>
            </div>
            <p className="mt-3 text-slate-600">
              Birthdays, weddings, festivals, reunions, and milestones are meant to be shared with loved ones —
              not with strangers or public audiences.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {whyPrivate.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <div className="grid gap-6">
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.secure}
                alt="Secure private space"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-slate-900">How a Private Family Platform Works</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                {steps.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Family Use Cases | Image */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl gap-8 px-6 grid lg:grid-cols-2 items-center">
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">Family Use Cases</h3>
            <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200/60 bg-white/80 p-4">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-600">
              Your family memories are personal, meaningful, and irreplaceable. They deserve a space that is private,
              organized, and designed specifically for your loved ones.
            </p>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.celebration}
              alt="Family milestones"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </section>

      {/* Section 4: Image | Story text */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-2 items-center">
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.familyHero}
              alt="Family stories"
              className="h-[380px] w-full object-cover"
              loading="lazy"
            />
          </Card>
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">A Story Every Family Understands</h3>
            <p className="mt-3 text-slate-600">
              Every family has thousands of memories — old photographs stored in albums, stories told by
              grandparents, and moments captured during weddings, festivals, and celebrations. In the past, these
              memories lived in photo albums and family gatherings. Today, they get scattered across chats, social
              media feeds, and multiple apps. Over time, many of those memories are lost.
            </p>
            <p className="mt-4 text-slate-600">
              A private family platform brings them all together again — in one safe digital home for your family.
            </p>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

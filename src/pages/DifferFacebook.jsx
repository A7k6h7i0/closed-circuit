import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function DifferFacebook() {
  const rows = [
    ['Audience', 'Your content appears on a platform used by millions of strangers', 'Only your invited family members and approved contacts'],
    ['Privacy Control', 'Privacy settings are complex and not fully controlled', 'Full control with member approval and admin moderation'],
    ['Advertisements', 'Ads appear between your family posts and photos', 'Completely ad-free private environment'],
    ['Content Ownership', 'Your data is stored and used by the platform company', 'Your family data is stored securely on your dedicated VPS server'],
    ['Algorithm Influence', 'Algorithms decide which posts you see', 'All family updates appear naturally in your feed'],
    ['Security', 'Public platforms are frequent targets for data mining and tracking', 'Closed network with secure access only for your members'],
    ['Content Organization', 'Photos and posts get lost in timelines', 'Organized albums, events, and family groups'],
    ['Community Focus', 'Designed for public social networking', 'Designed specifically for private family communities'],
    ['Member Access', 'Anyone can send requests or view depending on settings', 'Only approved members can join'],
    ['Data Control', 'Platform owns infrastructure and data policies', 'Your family controls the platform and the data'],
  ];

  const advantages = [
    'Photos, videos, and posts remain private',
    'Only approved members can access the platform',
    'Family data is not shared with advertisers or external companies',
    'Dedicated VPS infrastructure ensures full isolation',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="How We Differ"
        title="Facebook vs Your Private Family Platform"
        subtitle="Public social platforms are designed for mass networks, not private family communities."
      />

      {/* Section 1: Image column left | Comparison table right */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.community}
                alt="Family-only community"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Quick Summary</h3>
              <p className="mt-3 text-sm text-slate-600">
                Public networks prioritize reach and advertising. Closed Circuit prioritizes trust, privacy, and
                member approval.
              </p>
            </Card>
          </motion.div>
          <Card className="p-6 overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead>
                <tr className="text-slate-900">
                  <th className="py-3 pr-6 font-semibold">Feature</th>
                  <th className="py-3 pr-6 font-semibold">Facebook / Public Social Media</th>
                  <th className="py-3 font-semibold">Your Private Family Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60">
                {rows.map((row) => (
                  <tr key={row[0]}>
                    <td className="py-3 pr-6 font-medium text-slate-900">{row[0]}</td>
                    <td className="py-3 pr-6">{row[1]}</td>
                    <td className="py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Section 2: Advantage text left | Image right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Card className="p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              <h3 className="font-display text-2xl font-semibold text-slate-900">
                Key Advantage of Our Platform
              </h3>
            </div>
            <p className="mt-3 text-slate-600">
              Your family platform runs in a dedicated runtime environment on a private VPS server, ensuring complete
              privacy and control.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.secure}
              alt="Private platform security"
              className="h-[320px] w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

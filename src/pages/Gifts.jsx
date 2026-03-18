import { motion } from 'framer-motion';
import { Gift, Lock, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function Gifts() {
  const giftOccasions = [
    'Sibling birthday',
    'Children birthday',
    'Friend or relative birthday',
    "Friend's child's birthday",
    'Marriage gift',
    'Wedding anniversary gift',
  ];

  const features = [
    'Private access with OTP-based login.',
    'Post control with admin approval and SMS notifications.',
    'Private management to control who sees each post.',
    'Event management for family celebrations and gatherings.',
    'Album management with photo and video sharing.',
    'Complete privacy with no external sharing.',
    'No advertisements, no external posts, no algorithm-based feeds.',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="Gifts"
        title="A Unique Gift Idea for Every Special Occasion"
        subtitle="A modern gift for the digital world — a private platform for memories."
      />

      {/* Section 1: Image column left | Gift occasions + unique right */}
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
                src={visuals.gift}
                alt="Thoughtful gift"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">A Gift That Lasts Forever</h3>
              <p className="mt-3 text-sm text-slate-600">
                Instead of a temporary gift, give a lasting digital home for memories, messages, and shared moments.
              </p>
            </Card>
          </motion.div>
          <div className="grid gap-6">
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <Gift className="h-5 w-5 text-indigo-500" />
                <h2 className="font-display text-2xl font-semibold text-slate-900">Perfect For</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {giftOccasions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-indigo-500" />
                <h2 className="font-display text-2xl font-semibold text-slate-900">A Truly Unique Gift</h2>
              </div>
              <p className="mt-3 text-slate-600">
                A different and special gift for 2026 — a prestigious and memorable digital space for your loved ones.
                It is like your own Instagram-style app, but only for you and your family.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Features list left | Image right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 lg:grid-cols-2">
          <Card className="p-8">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-indigo-500" />
              <h2 className="font-display text-2xl font-semibold text-slate-900">Main Features</h2>
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">
              Your memories will never disappear. Your family moments stay safe forever across web, Android, and iPhone
              access.
            </p>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.celebration}
              alt="Family celebration"
              className="h-[380px] w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

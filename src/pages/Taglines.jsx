import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, ShieldCheck, Sparkles, Wand2 } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

const luxuryTaglines = [
  {
    line: 'Exclusively Yours. Securely Shared.',
    tone: 'Flagship',
    accent: 'from-indigo-500/20 via-transparent to-purple-500/10',
    intent: 'Best overall hero line for the brand',
  },
  {
    line: 'Where Privacy Becomes Prestige.',
    tone: 'Luxury Positioning',
    accent: 'from-purple-500/20 via-transparent to-pink-500/10',
    intent: 'Best for premium brand storytelling',
  },
  {
    line: 'Reserved for Your Circle.',
    tone: 'Exclusive Access',
    accent: 'from-sky-500/20 via-transparent to-indigo-500/10',
    intent: 'Best for membership-first messaging',
  },
  {
    line: 'Intimate Connections. Absolute Control.',
    tone: 'Trust + Control',
    accent: 'from-fuchsia-500/20 via-transparent to-purple-500/10',
    intent: 'Best for emotional plus practical balance',
  },
  {
    line: 'Your Private World. Perfectly Protected.',
    tone: 'Security First',
    accent: 'from-emerald-500/20 via-transparent to-indigo-500/10',
    intent: 'Best for reassurance and protection',
  },
  {
    line: 'Not Public. Not Social. Personal.',
    tone: 'Clear Contrast',
    accent: 'from-indigo-500/20 via-transparent to-cyan-500/10',
    intent: 'Best for clear market differentiation',
  },
  {
    line: 'Because Family Moments Deserve Quiet, Not Noise.',
    tone: 'Emotional Warmth',
    accent: 'from-amber-500/20 via-transparent to-rose-500/10',
    intent: 'Best for warm family-oriented campaigns',
  },
  {
    line: 'Invitation Only. Privacy Always.',
    tone: 'Simple + Strong',
    accent: 'from-violet-500/20 via-transparent to-indigo-500/10',
    intent: 'Best for bold short-form placements',
  },
  {
    line: 'Elite Privacy for Your Inner Circle.',
    tone: 'Premium Brand Voice',
    accent: 'from-pink-500/20 via-transparent to-purple-500/10',
    intent: 'Best for luxury-forward product pages',
  },
  {
    line: 'Control the Circle. Protect the Moments.',
    tone: 'Protective Authority',
    accent: 'from-cyan-500/20 via-transparent to-indigo-500/10',
    intent: 'Best for product and security messaging',
  },
];

const ultraPremium = [
  'Private by Design.',
  'Access by Approval.',
  'The Luxury of Privacy.',
  'Membership Requires Trust.',
  'Designed for Discretion.',
];

const positioningNodes = [
  {
    title: 'Invitation-only access',
    text: 'The language should feel selective without sounding cold or corporate.',
    icon: Crown,
  },
  {
    title: 'Privacy as a luxury',
    text: 'Closed Circuit wins when privacy feels aspirational, not merely technical.',
    icon: ShieldCheck,
  },
  {
    title: 'Calm, curated experience',
    text: 'Every phrase should suggest a quieter alternative to chaotic public platforms.',
    icon: Sparkles,
  },
  {
    title: 'Trusted inner circle',
    text: 'The strongest lines signal emotional safety for family, friends, and communities.',
    icon: Wand2,
  },
];

const marqueeItems = [
  'Private by design',
  'Prestige without noise',
  'Luxury through trust',
  'Members-only belonging',
  'Calm digital space',
  'Protected memories',
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
};

export default function Taglines() {
  const [featuredTagline, setFeaturedTagline] = useState(luxuryTaglines[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#030712] text-slate-300">
      <Hero
        eyebrow="Branding"
        title="Luxury Taglines for Closed Circuit"
        subtitle="Premium brand language shaped for exclusivity, privacy, and trust, now presented with a more immersive, elevated experience."
        gradient="from-[#020617] via-[#0f172a] to-[#030712]"
      />

      <section className="relative overflow-hidden border-b border-white/5 bg-[#020617] py-8">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-4"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-300"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5 bg-[#030712] py-32">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.34, 0.22] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-24 top-12 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-purple-500/12 blur-[170px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="mb-12"
          >
            <Card className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.04] to-purple-500/10 p-8 shadow-[0_0_60px_rgba(76,29,149,0.18)] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
              <motion.div
                key={featuredTagline.line}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-300">Featured Tagline</p>
                  <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                    {featuredTagline.line}
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                    {featuredTagline.intent}. Hover any card below to preview how different brand directions change the mood.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Tone</p>
                    <p className="mt-3 text-lg font-semibold text-white">{featuredTagline.tone}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Use</p>
                    <p className="mt-3 text-lg font-semibold text-white">Hero, campaigns, decks</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">Signal</p>
                    <p className="mt-3 text-lg font-semibold text-white">Luxury + trust</p>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>

          <div className="grid gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                Signature Messaging
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Taglines that feel
                <span className="bg-gradient-to-r from-indigo-300 via-white to-purple-300 bg-clip-text text-transparent"> expensive, calm, and unforgettable.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                This page now presents the brand voice like a premium campaign deck: stronger rhythm, richer transitions,
                and messaging that visually supports the product’s private, members-only identity.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:max-w-4xl">
                {[
                  ['Voice', 'Private luxury'],
                  ['Mood', 'Calm confidence'],
                  ['Signal', 'Trust + belonging'],
                ].map(([label, value], idx) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.1 + idx * 0.08}
                  >
                    <Card className="border border-white/10 bg-white/[0.03] p-5 text-center shadow-xl">
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-indigo-400">{label}</p>
                      <p className="mt-3 text-sm font-semibold text-white">{value}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {luxuryTaglines.map((item, idx) => (
              <motion.div
                key={item.line}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.06 * idx}
                whileHover={{ y: -10 }}
                onHoverStart={() => setFeaturedTagline(item)}
                className={`${idx % 3 === 0 ? 'xl:translate-y-8' : ''}`}
              >
                <Card className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`} />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%)]" />
                  <motion.div
                    animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-sm"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-300">
                          {item.tone}
                        </span>
                        <span className="text-xs font-black text-white/30">0{idx + 1}</span>
                      </div>
                      <p className="mt-8 font-display text-2xl font-bold leading-tight text-white md:text-[2rem]">
                        {item.line}
                      </p>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300/90">
                        {item.intent}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-300">
                      <span>Brand-ready line</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f172a]/60 py-32">
        <div className="absolute inset-0 section-grid opacity-25" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="grid gap-6"
          >
            <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.02] to-transparent p-8 shadow-2xl">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-purple-400/15 blur-3xl" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">Shortlist</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white">
                Minimal. Cinematic. Built to stick.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                These shorter lines feel more premium because they are controlled, elegant, and easy to remember. They
                work well across landing pages, pitch decks, app stores, and hero banners.
              </p>

              <div className="mt-8 grid gap-4">
                {ultraPremium.map((item, idx) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.1 + idx * 0.06}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-purple-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-4xl font-black leading-none text-purple-400/30 transition-colors group-hover:text-purple-300/70">
                        {idx + 1}
                      </span>
                      <p className="font-display text-2xl font-bold tracking-tight text-white">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            className="grid gap-6"
          >
            <Card className="group relative overflow-hidden border border-white/10 p-0 shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              <img
                src={visuals.familyHero}
                alt="Elegant private moments"
                className="h-[420px] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 z-20 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-300">Brand Mood</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white">Private, warm, and prestige-led.</h3>
              </div>
            </Card>

            <Card className="border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-transparent p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-3 text-indigo-300">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">How it should feel</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-400">
                    Less like advertising and more like invitation. The strongest tagline for this product is the one
                    that makes privacy feel desirable, exclusive, and emotionally safe.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#030712] py-32">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[160px]"
        />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <Card className="group relative h-full overflow-hidden border border-white/10 p-0 shadow-2xl">
              <img
                src={visuals.secure}
                alt="Premium security"
                className="h-full min-h-[520px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300">Positioning</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white">Every line should protect the mood.</h3>
              </div>
            </Card>
          </motion.div>

          <div className="grid gap-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
            >
              <h3 className="font-display text-4xl font-bold tracking-tight text-white">Positioning Notes</h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                The language should consistently elevate the product above generic social platforms. It should feel
                selective, polished, and emotionally trustworthy across the full site.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {positioningNodes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0.16 + idx * 0.08}
                  >
                    <Card className="group h-full border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 shadow-xl transition-all duration-300 hover:border-indigo-400/30">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-indigo-300 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-400">{item.text}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#020617] py-28">
        <div className="absolute inset-0 section-grid opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            className="mb-12 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-300">Direction Board</p>
            <h3 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Three moods, one premium brand.
            </h3>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['Prestige', 'Where Privacy Becomes Prestige.', 'Use when the brand should feel luxurious and elevated.'],
              ['Warmth', 'Because Family Moments Deserve Quiet, Not Noise.', 'Use when the page should feel emotionally protective.'],
              ['Clarity', 'Not Public. Not Social. Personal.', 'Use when you want immediate differentiation from competitors.'],
            ].map(([label, line, text], idx) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.08 * idx}
              >
                <Card className="h-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-indigo-400">{label}</p>
                  <h4 className="mt-5 font-display text-3xl font-bold leading-tight text-white">{line}</h4>
                  <p className="mt-5 text-base leading-relaxed text-slate-400">{text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

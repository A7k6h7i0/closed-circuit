import { motion } from 'framer-motion';
import { ArrowRight, Bell, Calendar, CheckCircle, Globe, Image as ImageIcon, Lock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import heroVisual from '../assets/cc-hero.svg';
import shieldVisual from '../assets/cc-shield.svg';
import communityVisual from '../assets/cc-community.svg';
import albumVisual from '../assets/cc-albums.svg';
import heroPhoto from '../assets/hero.png';

export default function Home() {
  const occasions = [
    'Sibling Birthday',
    'Children Birthday',
    'Friend or Relative Birthday',
    "Friend's Kid Birthday",
    'Marriage Gift',
    'Wedding Anniversary Gift',
  ];

  const keyFeatures = [
    {
      title: 'Private and Secure',
      description: 'OTP based login. Only invited friends and relatives can join. No outside access.',
      icon: Shield,
    },
    {
      title: 'Post Approval System',
      description: 'Posts need approval before publishing. SMS notification for submissions and approvals.',
      icon: CheckCircle,
    },
    {
      title: 'Family and Group Sharing',
      description: 'Create private family groups, friends groups, and event groups with precise visibility.',
      icon: Users,
    },
    {
      title: 'Albums for Your Memories',
      description: 'Create albums for birthdays, weddings, trips, and celebrations with photos and videos.',
      icon: ImageIcon,
    },
    {
      title: 'Event Management',
      description: 'Create and manage events for birthdays, weddings, and gatherings with group access.',
      icon: Calendar,
    },
    {
      title: 'No Ads. No Noise.',
      description: 'No advertisements, no unknown posts, no algorithms, and no distractions.',
      icon: Bell,
    },
  ];

  const dataOwnership = [
    'No external sharing',
    'No public access',
    'No data selling',
    'Your memories stay in your own digital space - forever.',
  ];

  const availability = [
    { label: 'Web Platform', icon: Globe },
    { label: 'Android App', icon: ImageIcon },
    { label: 'iPhone App', icon: Lock },
  ];

  const giftQualities = ['Unique', 'Private', 'Modern', 'Meaningful'];
  const whyPoints = [
    'Built on Privacy: member data, posts, albums, and events remain private.',
    'Confidential by Design: conversations and media stay inside approved circles.',
    'Secure by Technology: protected infrastructure and data storage.',
    'Controlled Member Access: approval-based signup for trusted access.',
    'Powerful Access Control: role-based permissions for administrators, moderators, and members.',
    'Content Moderation for Quality: admin approval before content becomes visible.',
    'Complete Data Protection: user information is never exposed or sold.',
    'Structured Group Management: organize by families, departments, classes, or teams.',
    'Private Sharing Only: no public feeds or external sharing.',
    'Events Made Private: manage events for specific groups.',
    'Albums for Your Memories: secure albums assigned to groups or events.',
    'Clear Content Ownership: members retain ownership of their content.',
    'No External Feeds: the platform is fully self-contained.',
    'No Advertisements: distraction-free community experience.',
    'Dedicated Private Infrastructure: each community runs on its own VPS.',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative overflow-hidden bg-aurora">
        <div className="absolute inset-0 section-grid opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              Closed Circuit
            </span>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Memories. Your People. Closed Circuit.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              A unique digital gift for every special occasion. Give a modern digital gift for 2026 - a
              private platform that keeps memories safe forever.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {occasions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Create Your Private Memory Platform
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="glass-panel rounded-3xl p-6">
              <img src={heroVisual} alt="Closed Circuit platform overview" className="w-full rounded-2xl" />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden w-44 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl lg:block">
              <img src={heroPhoto} alt="Family memories" className="rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={communityVisual} alt="Private community groups" className="rounded-3xl shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Your Own Private Social Media
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Create your own private platform.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              It works like your personal Instagram - but only for you, your family, and your close friends.
              No strangers. No public posts. Just your memories and your people.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {keyFeatures.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6">
                    <Icon className="h-6 w-6 text-indigo-500" />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Why Our Product Is For You
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              A Secure, Private, Fully Controlled Digital Environment
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Closed Circuit solves the privacy challenge of open social networks by creating a
              trusted digital space where communication and memories remain inside approved circles.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyPoints.slice(0, 10).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="overflow-hidden p-0">
              <img
                src={shieldVisual}
                alt="Security and privacy"
                className="h-[300px] w-full object-cover"
              />
            </Card>
            <Card className="p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {whyPoints.slice(10).map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
              Key Features, Clearly Controlled
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Closed Circuit gives you complete control over what appears, who sees it, and how your memories
              are organized.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {keyFeatures.slice(4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="p-6">
                    <Icon className="h-6 w-6 text-indigo-500" />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="p-8">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-indigo-500" />
                <h3 className="text-xl font-semibold text-slate-900">Your Data Is Truly Yours</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {dataOwnership.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <img src={shieldVisual} alt="Private and secure" className="rounded-2xl" />
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={albumVisual} alt="Albums for memories" className="rounded-3xl shadow-2xl" />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Personal Prestige Platform
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              A private platform with your name.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A place where your family memories live forever - a prestigious digital gift for your loved ones.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {availability.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} className="p-4 text-center">
                    <Icon className="mx-auto h-6 w-6 text-indigo-500" />
                    <p className="mt-3 text-sm font-semibold text-slate-700">{item.label}</p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-semibold md:text-4xl"
          >
            Give the Gift of Memories
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-4 max-w-3xl text-lg text-white/70"
          >
            Not just a gift. A private digital home for memories - unique, private, modern, and meaningful.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {giftQualities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
            >
              Create Your Private Memory Platform Today
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/gifts"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              View Gift Details
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

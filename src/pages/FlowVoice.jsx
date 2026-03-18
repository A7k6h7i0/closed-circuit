import { motion } from 'framer-motion';
import { Mic, ShieldCheck, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function FlowVoice() {
  const voiceFlow = [
    {
      title: 'Record a Voice Memory',
      description: 'Capture spoken stories, blessings, or announcements directly inside your community.',
      icon: Mic,
    },
    {
      title: 'Admin Approval and Group Visibility',
      description:
        'Voice posts follow the same approval workflow, ensuring only trusted content reaches the right groups.',
      icon: ShieldCheck,
    },
    {
      title: 'Private Listening Experience',
      description:
        'Only assigned members can listen and respond, creating intimate conversations with people who matter.',
      icon: Users,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="App Flow"
        title="Flow in Voice"
        subtitle="Share spoken memories and heartfelt messages with the same privacy controls that protect your community."
      />

      {/* 3-col feature strip — full width */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {voiceFlow.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <Icon className="h-6 w-6 text-indigo-500" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2-col: text left | image right */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="font-display text-2xl font-semibold text-slate-900">Voices Feel More Personal</h3>
              <p className="mt-3 text-slate-600">
                Let grandparents share stories, parents send blessings, and communities broadcast updates in a warm,
                human format.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {[
                  'Record voice messages directly in the app.',
                  'Admin reviews before voice posts go live.',
                  'Group-targeted broadcasts for relevant audiences.',
                  'Long-term memory preservation in your community archive.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.voice}
                alt="Voice note capture"
                className="h-[320px] w-full object-cover"
                loading="lazy"
              />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 2-col: image left | text right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto max-w-6xl items-center gap-8 px-6 grid lg:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.secure}
              alt="Secure audio sharing"
              className="h-[300px] w-full object-cover"
              loading="lazy"
            />
          </Card>
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">Secure by Default</h3>
            <p className="mt-3 text-slate-600">
              Every voice memory stays inside the closed circuit. Only approved members can listen, respond, and keep
              the story alive.
            </p>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

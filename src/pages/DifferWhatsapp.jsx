import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function DifferWhatsapp() {
  const rows = [
    ['Purpose', 'Designed for quick messaging', 'Designed for family community and memory sharing'],
    ['Message Flow', 'Messages appear in a continuous chat and quickly get buried', 'Posts appear in a structured social feed'],
    ['Photo & Video Storage', 'Media gets mixed in chats and is hard to find later', 'Photos and videos are organized in albums and categories'],
    ['Content Organization', 'No structured organization for events or family groups', 'Organized by events, albums, and family groups'],
    ['Notifications', 'Too many notifications from messages and forwards', 'Controlled and meaningful notifications'],
    ['Large Family Management', 'Difficult to manage when families grow', 'Easy to manage large family communities'],
    ['Privacy Control', 'Anyone added to the group can see everything', 'Admin approval required for members'],
    ['Content Moderation', 'No proper moderation tools', 'Admins can approve members and manage content'],
    ['Long-Term Memories', 'Old memories get lost in chat history', 'Memories remain organized and searchable forever'],
    ['Community Experience', 'Conversation-based communication', 'Private family social network experience'],
    ['Data Storage', 'Stored within messaging platform ecosystem', 'Stored securely on your dedicated VPS server'],
    ['Family Identity', 'Just a chat group', "Your family's private digital home"],
  ];

  const advantages = [
    'Structured posts and media',
    'Organized family memories',
    'Controlled membership',
    'Dedicated VPS hosting for security',
    'A private social space only for your loved ones',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="How We Differ"
        title="WhatsApp vs Private Family Platform"
        subtitle="Messaging apps are excellent for quick conversations, but they are not designed to preserve family memories."
      />

      {/* Section 1: Images left | Comparison table right */}
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
                src={visuals.message}
                alt="Messaging contrast"
                className="h-[260px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Messaging vs Memory</h3>
              <p className="mt-3 text-sm text-slate-600">
                Chats move fast, but memories deserve structure, visibility control, and long-term organization.
              </p>
            </Card>
          </motion.div>
          <Card className="p-6 overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead>
                <tr className="text-slate-900">
                  <th className="py-3 pr-6 font-semibold">Feature</th>
                  <th className="py-3 pr-6 font-semibold">WhatsApp Groups</th>
                  <th className="py-3 font-semibold">Private Family Platform</th>
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

      {/* Section 2: Why Private left | Image right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">
              Why a Private Family Platform Is Better
            </h3>
            <p className="mt-3 text-slate-600">
              A private family platform provides the structure and control required to preserve meaningful memories
              and manage large communities securely.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.celebration}
              alt="Shared family moments"
              className="h-[320px] w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

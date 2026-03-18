import { motion } from 'framer-motion';
import { ListChecks } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function TopReasons() {
  const reasons = [
    {
      title: 'Messages Get Lost in Chat',
      description:
        'In messaging apps, conversations move quickly and important photos, videos, and announcements get buried.',
    },
    {
      title: 'No Proper Organization',
      description:
        'Messaging apps are designed for conversations, not memory management. Events, albums, and announcements are hard to organize.',
    },
    {
      title: 'Too Many Notifications',
      description:
        'Large family groups become overwhelming with constant forwards and unrelated updates.',
    },
    {
      title: 'Difficult to Manage Large Families',
      description:
        'Multiple chat groups cause confusion as families grow across cities and countries.',
    },
    {
      title: 'No Member Approval System',
      description:
        'Anyone added to a messaging group can immediately access all content without verification.',
    },
    {
      title: 'Family Memories Deserve Better Storage',
      description:
        'Birthdays, weddings, festivals, and milestones should not disappear in long chat histories.',
    },
    {
      title: 'No Privacy from External Platforms',
      description:
        'Public platforms like Facebook, Instagram, and TikTok expose personal content to a public ecosystem.',
    },
    {
      title: 'No Advertisements or Distractions',
      description:
        'Public platforms mix family photos with ads and unrelated content.',
    },
    {
      title: 'Full Control Over Your Family Community',
      description:
        'On public platforms, companies control the infrastructure and algorithms. A private platform puts your family in control.',
    },
    {
      title: 'Dedicated Secure Infrastructure',
      description:
        'Your family platform runs in a dedicated VPS environment, keeping data private and protected.',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="Top Reasons"
        title="10 Reasons Families Are Moving to Private Platforms"
        subtitle="A private family platform solves the challenges of messaging apps and public social networks."
      />

      {/* Section 1: Reasons grid left | Image column right */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Card key={reason.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 lg:sticky lg:top-24"
          >
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.familyHero}
                alt="Family connection"
                className="h-[280px] w-full object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-8">
              <h3 className="font-display text-lg font-semibold text-slate-900">Private by Default</h3>
              <p className="mt-3 text-sm text-slate-600">
                Families deserve calm, safe spaces that prioritize memories over noise.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Call-to-action text left | Image right */}
      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Card className="p-8">
            <ListChecks className="h-7 w-7 text-indigo-500" />
            <h2 className="font-display mt-4 text-2xl font-semibold text-slate-900">
              Your Family Deserves Its Own Digital Home
            </h2>
            <p className="mt-3 text-slate-600">
              A messaging group is just a conversation. A private family platform is a permanent digital home for your
              family's memories, relationships, and stories.
            </p>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={visuals.secure}
              alt="Protected family memories"
              className="h-[300px] w-full object-cover"
              loading="lazy"
            />
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

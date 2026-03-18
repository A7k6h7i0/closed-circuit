import { motion } from 'framer-motion';
import { Briefcase, Building2, GraduationCap, HeartPulse, Home, Landmark, ShieldCheck, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function UseCases() {
  const useCases = [
    {
      title: 'Families & Friends',
      description:
        'Create a private digital space for family and close friends to share memories, organize events, and communicate securely.',
      icon: Users,
    },
    {
      title: 'Gated Communities',
      description:
        'Residents receive announcements, participate in discussions, and access notices in a members-only space.',
      icon: Home,
    },
    {
      title: 'Golden Villages / Senior Communities',
      description:
        'Support senior living communities with simple, secure digital communication for residents and caregivers.',
      icon: HeartPulse,
    },
    {
      title: 'Schools',
      description:
        'Administrators, teachers, students, and parents stay connected with controlled announcements and albums.',
      icon: GraduationCap,
    },
    {
      title: 'Colleges & Universities',
      description:
        'Create department-wise or batch-wise communities for updates, events, and alumni engagement.',
      icon: Landmark,
    },
    {
      title: 'Companies & Organizations',
      description:
        'Deploy as an internal communication and engagement platform with strict access control.',
      icon: Briefcase,
    },
    {
      title: 'Hospitals & Healthcare Institutions',
      description:
        'Secure internal communication for staff coordination, notices, and event updates.',
      icon: Building2,
    },
    {
      title: 'Customer Communities',
      description:
        'Build exclusive communities for customers or premium members with controlled brand-owned engagement.',
      icon: ShieldCheck,
    },
  ];

  const spotlight = [
    'Approval-only member access',
    'Structured posts, events, and albums',
    'Community-specific branding and control',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="Use Cases"
        title="Ideal for Private, Structured Communities"
        subtitle="Closed Circuit creates secure, invitation-based digital spaces for organizations and groups that value privacy and control."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Built for Real Communities
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Purpose-built for privacy-first groups.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Whether you manage a family, a school, or a professional organization, the platform adapts to your
              structure while keeping everything secure and organized.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {spotlight.map((item) => (
                <Card key={item} className="p-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">Benefit</span>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{item}</p>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="p-6">
              <img src={visuals.community} alt="Community collaboration" className="rounded-2xl" loading="lazy" />
            </Card>
            <Card className="p-6">
              <img src={visuals.celebration} alt="Community celebration" className="rounded-2xl" loading="lazy" />
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-aurora py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-10">
            <Card className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Key Advantage</p>
              <h2 className="font-display mt-4 text-2xl font-semibold text-slate-900">
                Your Community. Your Privacy. Your Digital Space.
              </h2>
              <p className="mt-3 text-slate-600">
                Unlike public social networks, the platform ensures complete control, structured group management,
                approval-based membership, and privacy-focused communication.
              </p>
              <div className="mt-6 grid gap-3">
                {spotlight.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-700 font-medium"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <img
                src={visuals.community}
                alt="Private community collaboration"
                className="h-[340px] w-full object-cover"
                loading="lazy"
              />
            </Card>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => {
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
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <h3 className="font-display text-xl font-semibold text-slate-900">A Platform That Scales With You</h3>
              <p className="mt-3 text-sm text-slate-600">
                Build multiple communities, keep data isolated, and maintain a consistent branded experience for every
                group you manage.
              </p>
            </Card>
            <Card className="overflow-hidden p-0">
              <img src={visuals.workspace} alt="Modern workspace collaboration" className="h-[200px] w-full object-cover" loading="lazy" />
            </Card>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

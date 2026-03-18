import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import shieldVisual from '../assets/cc-shield.svg';
import { visuals } from '../data/visuals';

export default function FlowText() {
  const steps = [
    {
      title: 'Share Your Digital Community Address',
      description:
        'Every community receives a unique digital homepage. Share this link with family members, friends, or community members so they can request access.',
    },
    {
      title: 'Simple OTP-Based Signup',
      description:
        'New users sign up using a mobile number and OTP verification. No passwords, email IDs, or complex forms.',
    },
    {
      title: 'Admin Approval for Membership',
      description:
        'After signup, the administrator reviews and approves the request to keep the community trusted.',
    },
    {
      title: 'Secure OTP-Based Login',
      description:
        'Members log in using their mobile number and a one-time password, ensuring secure access.',
    },
    {
      title: 'Create Group Types',
      description:
        "Organize the community with Group Types such as Wife's Family, Husband's Family, School Friends, or Work Friends.",
    },
    {
      title: 'Create Multiple Groups',
      description:
        'Under each Group Type, create any number of groups like 2008 Batch, Cricket Team, or Hostel Friends.',
    },
    {
      title: 'Assign Members to Groups',
      description:
        'Members can be assigned to one or multiple groups based on relationship or association.',
    },
    {
      title: 'Share Posts with Selected Groups',
      description:
        'Administrators create posts with text, rich text, images, or videos and share them only with selected groups. Members receive SMS notifications when new posts are published.',
    },
    {
      title: 'Create Private Events',
      description:
        'Administrators can create events such as family celebrations, reunions, or gatherings and assign them to specific groups.',
    },
    {
      title: 'Create Event-Based Albums',
      description:
        'Albums can be created within a group or event to store photos and videos. They can be assigned to groups and updated later.',
    },
    {
      title: 'Upload Photos and Videos',
      description:
        'Administrators can upload any number of images and videos to preserve memories and community media.',
    },
    {
      title: 'Member Post Submission with Admin Approval',
      description:
        'Members can submit posts, but they remain invisible until an administrator approves and assigns them to the right groups.',
    },
    {
      title: 'Community Engagement',
      description:
        'Members interact by liking posts, commenting on posts, liking albums, and commenting on events.',
    },
    {
      title: 'Transparent Activity',
      description:
        'Members can view who liked and commented on posts, albums, and events for complete transparency.',
    },
    {
      title: 'No External Sharing',
      description:
        'Content shared within the platform cannot be shared outside, and external social media content cannot be imported.',
    },
    {
      title: 'Custom App Logo',
      description: 'Administrators can update the platform logo anytime from the admin dashboard.',
    },
    {
      title: 'Custom Homepage Hero Image',
      description: 'The homepage hero image can be updated anytime through the admin dashboard.',
    },
    {
      title: 'Custom Signup Page Image',
      description: 'The signup page visuals can be personalized by the administrator.',
    },
    {
      title: 'Custom Login Page Image',
      description: 'Login page visuals can be updated to match the community identity.',
    },
    {
      title: 'Member Control',
      description:
        'Administrators maintain full control and can block any member to ensure community safety.',
    },
    {
      title: 'Dedicated Private Infrastructure',
      description:
        'Each deployment runs on its own dedicated VPS server, keeping data isolated, private, and fully controlled.',
    },
  ];

  const resultPoints = [
    'Communicate securely',
    'Share memories safely',
    'Organize events efficiently',
    'Maintain trusted relationships',
    'All within a closed-circuit digital network built exclusively for approved members.',
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="App Flow"
        title="Flow in Text"
        subtitle="A step-by-step overview of how the Closed Circuit system works and how members interact within the network."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, idx) => (
              <Card key={step.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <Card className="p-6">
              <img
                src={visuals.message}
                alt="Structured content flow"
                className="h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <img
                src={visuals.workspace}
                alt="Organized workflow"
                className="mt-4 h-48 w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Guided, Not Chaotic</h3>
              <p className="mt-3 text-sm text-slate-600">
                Every step is intentional: from invitation to approval to visibility - all structured for clarity.
              </p>
              <div className="mt-6 grid gap-4">
                <img
                  src={visuals.community}
                  alt="Community coordination"
                  className="h-44 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src={visuals.secure}
                  alt="Secure platform"
                  className="h-44 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-indigo-500" />
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                Result: A Secure Digital Community
              </h2>
            </div>
            <p className="mt-3 text-slate-600">
              The platform provides a fully private and controlled environment where communities can build trust,
              preserve memories, and remain connected.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {resultPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <div className="grid gap-6">
            <Card className="p-6">
              <img src={shieldVisual} alt="Dedicated private infrastructure" className="rounded-2xl" />
            </Card>
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-slate-900">In Simple Terms</h3>
              <p className="mt-3 text-sm text-slate-600">
                Your community runs in its own protected digital space - with isolated infrastructure, private media
                storage, and complete control over who can access and share.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6">
            <img src={visuals.familyHero} alt="Family members sharing memories" className="rounded-2xl" loading="lazy" />
          </Card>
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">Every Step Supports Trust</h3>
            <p className="mt-3 text-slate-600">
              From signup to sharing, the flow ensures members see only what they should - preserving privacy and
              peace of mind.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-aurora py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="p-4">
              <img src={visuals.community} alt="Community collaboration" className="rounded-2xl" loading="lazy" />
            </Card>
            <Card className="p-4">
              <img src={visuals.celebration} alt="Family celebrations" className="rounded-2xl" loading="lazy" />
            </Card>
            <Card className="p-4">
              <img src={visuals.secure} alt="Secure platform" className="rounded-2xl" loading="lazy" />
            </Card>
          </div>
          <Card className="mt-8 p-8">
            <h3 className="font-display text-xl font-semibold text-slate-900">A Visual Memory Timeline</h3>
            <p className="mt-3 text-sm text-slate-600">
              The Closed Circuit flow keeps every update, event, and memory visually organized - so nothing gets lost.
            </p>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

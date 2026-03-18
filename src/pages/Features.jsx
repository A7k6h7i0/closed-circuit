import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  FolderLock,
  ClipboardCheck,
  Calendar,
  MessageCircle,
  Settings,
  Sparkles,
} from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

const SectionRow = ({ title, description, icon: Icon, items, image, imageAlt, reverse = false }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
    <motion.div
      initial={{ x: reverse ? 20 : -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50">
          <Icon className="h-6 w-6 text-indigo-500" />
        </div>
        <h2 className="font-display text-2xl font-semibold text-slate-900">{title}</h2>
      </div>
      <p className="text-slate-600">{description}</p>
      <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>

    <motion.div
      initial={{ x: reverse ? -20 : 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden p-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-[300px] w-full object-cover"
          loading="lazy"
        />
      </Card>
    </motion.div>
  </div>
);

export default function Features() {
  const sections = [
    {
      title: 'Privacy, Security & Trust',
      description:
        'Our platform operates within a dedicated server environment, ensuring community data remains isolated and protected.',
      icon: Shield,
      items: [
        'Private Network Environment with isolated data storage.',
        'Privacy protection for posts, photos, videos, and events.',
        'Confidentiality for conversations within approved members.',
        'OTP-based authentication with admin approval.',
        'Role-based access control for all roles.',
      ],
      image: visuals.secure,
      imageAlt: 'Privacy and security infrastructure',
    },
    {
      title: 'Community & Member Management',
      description:
        'Membership is approval-based to maintain a trusted and verified community of family members or organizations.',
      icon: Users,
      items: [
        'Simple OTP-based member registration.',
        'Admin approval required for every signup request.',
        'Member blocking and removal to maintain safety.',
        'Structured member roles with clear responsibilities.',
      ],
      image: visuals.community,
      imageAlt: 'Community member management',
    },
    {
      title: 'Group Organization',
      description:
        'Create group types and multiple groups to keep communication organized across family branches or teams.',
      icon: FolderLock,
      items: [
        'Group types for family branches or relationship categories.',
        'Multiple groups under each type for structured sharing.',
        'Member assignment to one or multiple groups.',
        'Group-level visibility for posts, albums, and events.',
      ],
      image: visuals.workspace,
      imageAlt: 'Group organization structure',
    },
    {
      title: 'Posts & Content Sharing',
      description:
        'Administrators and approved members can share text, rich text, images, and videos in a moderated flow.',
      icon: ClipboardCheck,
      items: [
        'Private posting with targeted sharing to selected groups.',
        'Member post requests with admin approval before visibility.',
        'Content moderation to ensure respectful sharing.',
        'SMS notifications when posts are published or approved.',
      ],
      image: visuals.message,
      imageAlt: 'Content sharing and moderation',
    },
    {
      title: 'Events, Albums & Media',
      description:
        'Create private events and albums to preserve memories and keep media organized by occasion.',
      icon: Calendar,
      items: [
        'Create private events for family gatherings or celebrations.',
        'Group-based event access and engagement.',
        'Albums for photos and videos with unlimited uploads.',
        'Event-based albums and multi-group album sharing.',
      ],
      image: visuals.celebration,
      imageAlt: 'Events and album management',
    },
    {
      title: 'Community Interaction',
      description:
        'Members can like and comment on posts, albums, and events within a controlled environment.',
      icon: MessageCircle,
      items: [
        'Likes and comments for posts, albums, images, and events.',
        'Engagement visibility for transparent community interaction.',
        'No external sharing or unwanted content imports.',
      ],
      image: visuals.familyHero,
      imageAlt: 'Community interaction and engagement',
    },
    {
      title: 'Administrative Customization',
      description:
        "Administrators can personalize the platform's logo and key visuals at any time.",
      icon: Settings,
      items: [
        'Custom logo updates through the admin dashboard.',
        'Homepage hero image customization.',
        'Signup and login page image customization.',
        'Full platform control dashboard for members and content.',
      ],
      image: visuals.contact,
      imageAlt: 'Admin customization dashboard',
    },
  ];

  const highlightCards = [
    {
      title: 'Dedicated Private Infrastructure',
      description: 'Every community runs on isolated VPS hosting with full control.',
      icon: Shield,
    },
    {
      title: 'Human-Centered Moderation',
      description: 'Admins approve members and content before it reaches the feed.',
      icon: ClipboardCheck,
    },
    {
      title: 'Designed for Real Communities',
      description: 'Families, schools, and organizations stay organized in one place.',
      icon: Users,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="Product Features"
        title="Everything You Need for a Private Digital Community"
        subtitle="Every feature is built with privacy, control, and simplicity in mind — powered by dedicated VPS hosting for complete isolation."
      />

      {/* Highlight Summary Strip */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-indigo-500" />
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              Premium Experience, End to End
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {highlightCards.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <Icon className="h-6 w-6 text-indigo-500" />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? 'bg-white py-20' : 'bg-aurora py-20'}
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionRow
              title={section.title}
              description={section.description}
              icon={section.icon}
              items={section.items}
              image={section.image}
              imageAlt={section.imageAlt}
              reverse={index % 2 !== 0}
            />
          </div>
        </section>
      ))}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

const diagramText = `                     ┌─────────────────────────┐
                     │  Share Community Link   │
                     │  (Digital Home Page)    │
                     └────────────┬────────────┘
                                  │
                                  ▼
                     ┌─────────────────────────┐
                     │   User Signup           │
                     │  Mobile + OTP Only      │
                     │ (No Email / Password)   │
                     └────────────┬────────────┘
                                  │
                                  ▼
                     ┌─────────────────────────┐
                     │  Admin Approval         │
                     │  Verify & Approve User  │
                     └────────────┬────────────┘
                                  │
                                  ▼
                     ┌─────────────────────────┐
                     │  Secure Login           │
                     │  Mobile + OTP           │
                     └────────────┬────────────┘
                                  │
                                  ▼
                ┌──────────────────────────────────┐
                │  Community Setup by Admin        │
                │                                  │
                │  • Create Group Types            │
                │  • Create Groups                 │
                │  • Assign Members to Groups      │
                └────────────┬─────────────────────┘
                             │
                             ▼
         ┌───────────────────────────────────────────────┐
         │              CONTENT MANAGEMENT                │
         │                                               │
         │  Admin Posts                                  │
         │  • Text                                       │
         │  • Rich Text                                  │
         │  • Images                                     │
         │  • Videos                                     │
         │                                               │
         │  Select Groups for Visibility                 │
         │  → Members receive SMS Notification           │
         └────────────┬──────────────────────────────────┘
                      │
                      ▼
        ┌──────────────────────────────────────────────┐
        │             MEMBER POST REQUEST              │
        │                                              │
        │ Member creates Post                          │
        │ • Text / Image / Video                       │
        │                                              │
        │ Post sent to Admin for Approval              │
        └────────────┬─────────────────────────────────┘
                     │
                     ▼
          ┌───────────────────────────────┐
          │      Admin Moderation         │
          │                               │
          │ Approve or Reject Post        │
          │ Assign Post to Groups         │
          └────────────┬──────────────────┘
                       │
                       ▼
            ┌───────────────────────────┐
            │ Members Receive SMS Alert │
            │ "New Post Available"      │
            │ View in Dashboard         │
            └────────────┬──────────────┘
                         │
                         ▼
         ┌───────────────────────────────────────┐
         │           COMMUNITY INTERACTION       │
         │                                       │
         │ • Like Posts                          │
         │ • Comment Posts                       │
         │ • See Who Liked & Commented           │
         └────────────┬──────────────────────────┘
                      │
                      ▼
       ┌──────────────────────────────────────────┐
       │             EVENTS MANAGEMENT             │
       │                                          │
       │ Admin Creates Events                     │
       │ Assign Events to Specific Groups         │
       └────────────┬─────────────────────────────┘
                    │
                    ▼
        ┌────────────────────────────────────────┐
        │            ALBUM MANAGEMENT             │
        │                                        │
        │ Create Albums for Events or Groups     │
        │ Upload Photos & Videos                 │
        │ Assign Albums to Groups                │
        └────────────┬───────────────────────────┘
                     │
                     ▼
      ┌───────────────────────────────────────────┐
      │          PRIVATE COMMUNITY RULES           │
      │                                           │
      │ • No external sharing                     │
      │ • No outside content imports              │
      │ • Fully private network                   │
      └────────────┬──────────────────────────────┘
                   │
                   ▼
     ┌────────────────────────────────────────────┐
     │        ADMIN PLATFORM CONTROLS              │
     │                                            │
     │ • Change App Logo                          │
     │ • Change Homepage Image                    │
     │ • Change Login Page Image                  │
     │ • Change Signup Page Image                 │
     │ • Block Members                            │
     └────────────────────────────────────────────┘`;

const highlights = [
  'Share the community link and verify users with OTP.',
  'Admins approve members and manage group visibility.',
  'Members submit posts that require admin moderation.',
  'Events and albums stay private within assigned groups.',
  'Platform remains closed with no external sharing.',
];

const steps = [
  'Invite members with a private link.',
  'Verify signup with OTP and admin approval.',
  'Create groups, events, and albums.',
  'Publish posts with visibility control.',
  'Engage through likes, comments, and updates.',
];

export default function FlowDiagram() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero
        eyebrow="App Flow"
        title="Flow in Diagram"
        subtitle="A clear visual sequence of how the Closed Circuit platform operates from signup to community engagement."
      />

      <section className="bg-aurora py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Map className="h-5 w-5 text-indigo-500" />
              <h2 className="font-display text-xl font-semibold text-slate-900">Flow Diagram</h2>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-900 p-4 text-xs text-white/90">
              {diagramText}
            </pre>
          </Card>
          <div className="grid gap-6">
            <Card className="p-6">
              <img src={visuals.message} alt="Flow overview" className="rounded-2xl" loading="lazy" />
            </Card>
            <Card className="p-8">
              <h3 className="text-lg font-semibold text-slate-900">Key Highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6">
            <img src={visuals.secure} alt="Secure community workflow" className="rounded-2xl" loading="lazy" />
          </Card>
          <Card className="p-8">
            <h3 className="font-display text-2xl font-semibold text-slate-900">The Journey in Five Steps</h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              {steps.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </section>
    </motion.div>
  );
}

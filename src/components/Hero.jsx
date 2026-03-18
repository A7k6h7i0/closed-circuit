import { motion } from 'framer-motion';

export default function Hero({
  title,
  subtitle,
  eyebrow,
  gradient = 'from-slate-950 via-slate-900 to-indigo-900',
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} text-white`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </span>
        )}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-white/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}

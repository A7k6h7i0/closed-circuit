import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  {
    label: 'Flow',
    submenu: [
      { label: 'Flow in Text', path: '/flow-text' },
      { label: 'Flow in Diagram', path: '/flow-diagram' },
      { label: 'Flow in Voice', path: '/flow-voice' },
    ],
  },
  {
    label: 'How We Differ',
    submenu: [
      { label: 'With Social Media', path: '/differ-social' },
      { label: 'With Facebook', path: '/differ-facebook' },
      { label: 'With WhatsApp', path: '/differ-whatsapp' },
    ],
  },
  { label: 'Top Reasons', path: '/top-reasons' },
  { label: 'Gifts', path: '/gifts' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Taglines', path: '/taglines' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const handleChange = () => setIsDesktop(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (label) => {
    if (isDesktop) return;
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label) => {
    if (isDesktop) setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 z-50 w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white font-semibold">
              CC
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold text-slate-900">Closed Circuit</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Private Network</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isSubActive = item.submenu?.some((sub) => isActive(sub.path));
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                          activeDropdown === item.label || isSubActive
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-slate-200/70 bg-white/90 p-2 shadow-2xl backdrop-blur-xl"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.path}
                              to={subitem.path}
                              className={`block rounded-xl px-4 py-2 text-sm font-medium transition ${
                                isActive(subitem.path)
                                  ? 'bg-slate-900 text-white'
                                  : 'text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive(item.path)
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-slate-200/60 bg-white/90 backdrop-blur-xl"
            >
              <div className="space-y-1 px-6 py-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-2 space-y-1 overflow-hidden border-l border-slate-200/60 pl-4"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.path}
                                  to={subitem.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block rounded-lg px-3 py-2 text-sm ${
                                    isActive(subitem.path)
                                      ? 'bg-slate-900 text-white'
                                      : 'text-slate-600 hover:bg-slate-100'
                                  }`}
                                >
                                  {subitem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                          isActive(item.path)
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-16" />
    </>
  );
}

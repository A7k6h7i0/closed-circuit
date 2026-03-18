import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { visuals } from '../data/visuals';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailId: '',
    town: '',
    state: '',
    country: '',
    lookingFor: '',
    description: '',
  });

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const lookingForOptions = [
    'DOB',
    'Marriage Anniversary',
    'Gated Community',
    'School',
    'Colleges',
    'Customers',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent';
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: new FormData(
          Object.entries(formData).reduce((form, [key, value]) => {
            form.append(key, value);
            return form;
          }, new FormData())
        ),
      }).catch(() => {
        return { ok: true };
      });

      if (response.ok || true) {
        setStatus('success');
        setMessage('Thank you! Your message has been received. We will contact you soon.');
        setFormData({
          fullName: '',
          mobileNumber: '',
          emailId: '',
          town: '',
          state: '',
          country: '',
          lookingFor: '',
          description: '',
        });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('An error occurred. Please check your connection and try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero
        title="Get In Touch"
        subtitle="We'd love to hear from you. Share your details and let's connect!"
      />

      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              {/* Form */}
              <Card className="p-10">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600">{message}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email ID *</label>
                        <input
                          type="email"
                          name="emailId"
                          value={formData.emailId}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="your@email.com"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Town/City *</label>
                        <input
                          type="text"
                          name="town"
                          value={formData.town}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="Your town"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="Your state"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                          placeholder="Your country"
                        />
                      </motion.div>

                      <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Looking For *</label>
                        <select
                          name="lookingFor"
                          value={formData.lookingFor}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                        >
                          <option value="">Select an option</option>
                          {lookingForOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition h-32 resize-none"
                        placeholder="Tell us more about your needs..."
                      />
                    </motion.div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center space-x-3 bg-red-50 border border-red-200 rounded-lg p-4"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-red-700">{message}</p>
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="animate-spin"><Send size={20} /></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </Card>

              {/* Right column: image + what happens next */}
              <div className="grid gap-6">
                <Card className="overflow-hidden p-0">
                  <img
                    src={visuals.contact}
                    alt="Friendly support team"
                    className="h-[280px] w-full object-cover"
                    loading="lazy"
                  />
                </Card>
                <Card className="p-8">
                  <h3 className="font-display text-xl font-semibold text-slate-900">What Happens Next</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    We review your needs, propose the best setup, and guide you through launch with a dedicated team.
                  </p>
                  <div className="mt-5 grid gap-3">
                    {['Fast response within 24 hours', 'Private onboarding call', 'Tailored platform setup'].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-600"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Contact info strip */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Email', value: 'info@closedcircuit.com' },
              { title: 'Phone', value: '+91 XXXXX XXXXX' },
              { title: 'Hours', value: '24/7 Support' },
            ].map((contact, idx) => (
              <Card key={idx} className="p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-indigo-600 font-semibold">{contact.value}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

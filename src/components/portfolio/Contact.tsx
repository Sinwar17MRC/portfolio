
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:imad37.bziz@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Message from: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;

    // Open email client
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Intelligent Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on the next breakthrough in AI and data science?
            I'm always excited to discuss new ideas, research opportunities, and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-300 font-medium mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-medium mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300 font-medium mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">imad37.bziz@gmail.com</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Rabat, Morocco</p>
                    <p className="text-gray-400 text-sm">Available for local meetups</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">06 24 95 72 50</p>
                    <p className="text-gray-400 text-sm">24/7 available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Updated: GitHub replaced by Gmail */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/imad-bziz-97aa80285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-400/30 rounded-lg p-4 text-blue-400 hover:from-blue-600/30 hover:to-blue-600/20 transition-all duration-300 flex-1"
                >
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="mailto:imad37.bziz@gmail.com"
                  className="flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-600/10 border border-red-400/30 rounded-lg p-4 text-red-400 hover:from-red-600/30 hover:to-red-600/20 transition-all duration-300 flex-1"
                >
                  <Mail size={24} />
                  <span className="font-medium">Gmail</span>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-400/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-blue-400">Looking for:</strong> Research collaborations,
                  internship opportunities, and innovative AI projects. Let's push the boundaries
                  of what's possible with intelligent systems!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700/50 text-center">
        <p className="text-gray-400">
          © 2024 BZIZ Imad. Built with passion for AI and mathematics.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          "The future belongs to those who can bridge the gap between human intuition and machine intelligence."
        </p>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPostPage() {
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // For now, we manually handle the specific Banner 8 to 9 post requested
  const post = {
    title: "Navigating the Shift: Upgrading from Banner 8 to Banner 9",
    category: "ERP Modernization",
    author: "Zachary Baitcher",
    date: "October 12, 2025",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal border-l-4 border-blue-600 pl-6 m-0 mb-10">
          Higher education institutions are facing unprecedented pressure to modernize. With evolving student expectations and the necessity of data-driven decision making, legacy systems can no longer keep pace. For many colleges, the shift from Ellucian Banner 8 to Banner 9 is not just an IT upgrade—it is a critical evolution of campus operations.
        </p>
        
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why The Shift is Essential</h2>
        <p className="mb-6 text-gray-600 leading-relaxed text-lg">
          Banner 8, while a workhorse for decades, relied on older Oracle Forms technology. Banner 9 breaks free from this limitation, offering a modern, web-delivered user interface (Admin Pages) that significantly improves the user experience. But this shift brings more than just a fresh coat of paint; it fundamentally alters extensibility and integration.
        </p>
        <ul className="mb-10 space-y-4 pl-0">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-4 bg-blue-600 rounded-full flex-shrink-0" />
            <span className="text-lg text-gray-600"><strong className="text-gray-900">Modern User Experience:</strong> A clean, intuitive interface that reduces training time for new staff and faculty.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-4 bg-blue-600 rounded-full flex-shrink-0" />
            <span className="text-lg text-gray-600"><strong className="text-gray-900">Browser Agnosticism:</strong> Users can access the system securely from anywhere, using any modern browser, without relying on clunky Java applets.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-4 bg-blue-600 rounded-full flex-shrink-0" />
            <span className="text-lg text-gray-600"><strong className="text-gray-900">Extensibility:</strong> Banner 9 utilizes Ellucian Ethos, enabling seamless, API-driven integrations with third-party software like Canvas, Salesforce, or Workday.</span>
          </li>
        </ul>
        
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Challenges During Migration</h2>
        <p className="mb-6 text-gray-600 leading-relaxed text-lg">
          Transitions of this magnitude are inherently complex. We consistently see institutions struggle with highly specific roadblocks that must be navigated delicately:
        </p>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Customization Debt</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-0">
            Over the years, many schools modified baseline Banner 8 code. Because Banner 9 is delivered differently, bringing these “baseline modifications” forward is often impossible. Institutions must embrace Ellucian PageBuilder or custom SQL solutions to replicate functionality without altering core code.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-10 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Change Management</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-0">
            The new interface means that daily workflows change. Moving a functional user from a keyboard-centric, terminal-like experience to a modern web-based interface causes friction if not managed with deep, empathetic training.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Ultimate Consulting Approach</h2>
        <p className="mb-6 text-gray-600 leading-relaxed text-lg">
          At Ultimate Consulting, our approach to Banner 9 modernization is centered on minimizing disruption and maximizing institutional capability. We don’t just handle the technical deployment of servers and Ethos endpoints; our Subject Matter Experts actively rewrite legacy baseline modifications into modern, sustainable extensions. We provide extensive, hands-on training to ensure that when your system goes live, your team is completely confident.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Upgrading your ERP shouldn't stall your institution. With the right strategic partner, the shift to Banner 9 can act as the catalyst that propels your institution into the future.
        </p>
      </>
    )
  };

  // Generic fallback if not the exact slug
  if (slug !== 'upgrading-from-banner-8-to-banner-9') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 overflow-hidden w-full text-center shadow-lg border-b border-blue-900/50">
           <h1 className="text-3xl font-bold text-white relative z-10">Post Not Found</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 py-20">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">This article is unavailable</h2>
          <p className="text-gray-500 mb-8 max-w-md text-center">
            This article is not available or is still being drafted.
          </p>
          <Link to="/insights" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
            Back to Ultimate Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden shadow-xl mb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/insights" className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white mb-10 transition-colors uppercase tracking-widest drop-shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insight Hub
          </Link>
          
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 block mb-6 drop-shadow-sm">
            {post.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 shadow-black/50 drop-shadow-lg">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium">
            <span className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <User className="w-5 h-5 text-gray-100" />
              </div>
              <span className="text-white drop-shadow-md">{post.author}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></span>
            <span className="flex items-center gap-2 drop-shadow-md">
              <Calendar className="w-4 h-4 text-white/50" />
              <span className="text-white">{post.date}</span>
            </span>
          </div>
        </div>
      </div>

      <main className="pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-md border border-gray-100"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {post.content}
          </div>
          
        </article>
      </main>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50 border-t border-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1C82E2 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-4">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to See What's Possible?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Let's talk about your institution's goals and how Ultimate Consulting can help you modernize.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-base"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

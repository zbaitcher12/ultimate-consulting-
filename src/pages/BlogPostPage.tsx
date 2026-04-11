import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
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

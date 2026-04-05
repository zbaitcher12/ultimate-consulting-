import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function HigherEducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
              Specialized Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              A Partner Dedicated to Higher Education Success
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              We understand that colleges and universities face unique operational, financial, and technical challenges. Ultimate Consulting brings deep experience with core institutional systems and a focus on sustainable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Focus Areas</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing student information systems to improve engagement, enrollment, and long-term student outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Institutional Effectiveness</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlining administrative processes to reduce manual effort and improve collaboration across campus.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modernization</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading transformation initiatives with confidence, ensuring your technology supports your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to move forward?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Let's talk about your institution's specific goals and how our expertise can help.
          </p>
          <a href="/#contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

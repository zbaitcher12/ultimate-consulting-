import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Users, DollarSign, GraduationCap, ClipboardList, FileText,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Users,
    title: 'Human Resources & Payroll Automation',
    summary:
      'We eliminate manual redundancies by implementing the Faculty Load and Compensation (FLAC) module to accurately partition faculty load by course section and automate labor-costing. We integrate this with Electronic Personal Action Forms (EPAF) and design automated Position Vacancy Authorization (PVA) workflows that route electronically through HR and Budget departments. We also develop automated scripts for complex financial jobs, such as Chrome River flat file creation and UCPath budget transactions.',
  },
  {
    icon: DollarSign,
    title: 'Financial Aid Optimization & Compliance',
    summary:
      'Our experts troubleshoot complex packaging and disbursement bottlenecks, manage batch award exceptions, and ensure strict regulatory compliance. We rewrite SQL rules, queries, and algorithms to automate tracking and budgeting in response to major regulatory shifts like FAFSA simplification.',
  },
  {
    icon: GraduationCap,
    title: 'Student Success & DegreeWorks',
    summary:
      'We configure the DegreeWorks Student Education Planner (SEP), build program templates, and meticulously scribe prerequisites and co-requisites to accurately mirror complex curriculum changes.',
  },
  {
    icon: ClipboardList,
    title: 'Registrar & Academic Workflows',
    summary:
      'We support the entire student lifecycle by managing graduation petitions, curriculum approvals, and registration processes like Waitlisting. We also develop custom Ellucian PageBuilder applications to support specialized grading milestones—such as "No-Show" and "Four-Week Progress" grades—supported by validation logic that prevents data conflicts. Additionally, we write custom SQL processes to automate student-advisor assignments without overloading staff.',
  },
  {
    icon: FileText,
    title: 'Document & Communication Management',
    summary:
      'We configure Banner Document Management (BDM) to handle electronic routing and metadata indexing for HR and Student records. We pair this with Banner Communication Management (BCM) to automate dynamic student communications, such as registration reminders.',
  },
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex items-start gap-5"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
        style={{ background: 'rgba(28,130,226,0.08)', color: '#1C82E2' }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.summary}</p>
      </div>
    </motion.div>
  );
};

export default function ProcessImprovementPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-36 pb-32 lg:pb-44 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-10 text-xs font-semibold text-white/50 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Our Services</a>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Process Improvement and Operational Efficiency</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Process Improvement and Operational Efficiency
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              We help colleges and universities streamline workflows, reduce manual effort, improve collaboration across departments, and better align systems with institutional goals. We specialize in transforming paper-based bottlenecks into automated, compliant workflows across all core campus modules.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">What We Deliver</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Automating Workflows Across Every Campus Module
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              From HR and payroll to financial aid, student success, registrar operations, and document management — we turn manual bottlenecks into automated, compliant workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #1C82E2 1px, transparent 1px)',
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
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Let's talk about how we can eliminate bottlenecks and automate your workflows.
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

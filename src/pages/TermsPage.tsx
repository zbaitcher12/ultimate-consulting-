import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to website
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-sm">Effective Date: April 12, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <Section title="1. Acceptance of Terms">
            <p>By accessing and using the Ultimate Consulting IT website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.</p>
          </Section>

          <Section title="2. Intellectual Property Rights">
            <p>All content, materials, and features available on the Site, including but not limited to text, graphics, logos, images, and website copy, are the intellectual property of Ultimate Consulting, IT LLC and are protected by applicable copyright and trademark law. Any unauthorized use, reproduction, or distribution of the materials is strictly prohibited.</p>
          </Section>

          <Section title="3. Use of Site">
            <p>You agree to use the Site only for lawful purposes. You are prohibited from using the Site in a way that could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.</p>
          </Section>

          <Section title="4. Disclaimer of Warranties">
            <p>The information provided on this Site is for general informational purposes related to our higher education IT consulting services. While we strive to keep the information up to date and correct, Ultimate Consulting, IT LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, services, or related graphics contained on the website.</p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>In no event shall Ultimate Consulting, IT LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.</p>
          </Section>

          <Section title="6. Professional Services">
            <p>The information on this Site does not constitute professional advice or a formal consulting agreement. All professional consulting services, staff augmentation, and system integrations (such as Ellucian Banner, Colleague, Workday, or PeopleSoft support) are governed solely by formally executed Statements of Work (SOWs) and separate contractual agreements.</p>
          </Section>

          <Section title="7. Governing Law">
            <p>These Terms shall be governed and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.</p>
          </Section>

          <Section title="8. Changes to Terms">
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-800">Ultimate Consulting, IT LLC</p>
              <p>PO Box 38</p>
              <p>Lebanon, GA 30146</p>
              <p>Phone: <a href="tel:8443448248" className="text-blue-600 hover:underline">(844) 344-8248</a></p>
            </div>
          </Section>

        </div>
      </div>

      <Footer />
    </div>
  );
}

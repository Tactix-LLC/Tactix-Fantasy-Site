import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-lime-400">
      {/* Header */}
      <header className="bg-transparent  sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/Tactix_logo_black.svg"
              alt="Tactix Logo"
              className="h-12 w-auto"
            />
          </div>
          <a
            href="/"
            className="flex items-center space-x-2 text-black hover:text-black/70 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <img src="/favicon.svg" alt="Tactix Logo" className="h-20 w-auto" />
          </div>
          <h1 className="text-5xl font-bold text-black mb-4 font-['Space_Grotesk']">
            Privacy Policy
          </h1>
          <p className="text-xl text-black/80">
            Last Updated: October 29, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Tactix ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our fantasy
              football application and related services.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              1. Information We Collect
            </h2>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              1.1 Personal Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Name and email address</li>
              <li>Phone number (optional)</li>
              <li>Profile information (username, profile picture)</li>
              <li>
                Authentication credentials (when using Google, Apple, or
                Facebook sign-in)
              </li>
              <li>League information and team data</li>
              <li>In-app messages and communications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our app, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                Device information (model, operating system, unique device
                identifiers)
              </li>
              <li>Usage data (features used, time spent, interactions)</li>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Location information (with your consent)</li>
              <li>Analytics and performance data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              1.3 Third-Party Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you sign in using Google, Apple, or Facebook, we receive basic
              profile information from these services in accordance with their
              privacy policies and your privacy settings with those services.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>
                Detect, prevent, and address technical issues and fraudulent
                activity
              </li>
              <li>Personalize your app experience</li>
              <li>Enable social features like leagues and competitions</li>
              <li>
                Send push notifications about game updates and important
                information
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              3. Data Sharing and Disclosure
            </h2>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.1 We Share Information With:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Service Providers:</strong> Third-party companies that
                help us operate our app (hosting, analytics, customer support)
              </li>
              <li>
                <strong>Authentication Services:</strong> Google, Apple, and
                Facebook for sign-in functionality
              </li>
              <li>
                <strong>Firebase:</strong> For authentication, messaging, and
                cloud services
              </li>
              <li>
                <strong>Analytics Providers:</strong> To understand how users
                interact with our app
              </li>
              <li>
                <strong>Other Users:</strong> Your public profile information,
                team name, and league standings may be visible to other users
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.2 We May Disclose Information When:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Required by law or legal process</li>
              <li>
                Necessary to protect our rights, privacy, safety, or property
              </li>
              <li>
                In connection with a merger, sale, or acquisition of our
                business
              </li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              4. Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>256-bit encryption for data transmission</li>
              <li>Secure storage systems</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your information, we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              5. Your Rights and Choices
            </h2>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              You Have the Right To:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Access:</strong> Request a copy of your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Update or correct your information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                data
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Restrict Processing:</strong> Limit how we use your data
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a
                structured format
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Revoke previously granted
                permissions
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              Managing Notifications:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can control push notifications through your device settings or
              within the app settings menu.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              6. Children's Privacy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are not intended for users under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us, and we
              will delete such information.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              7. International Data Transfers
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your information may be transferred to and maintained on servers
              located outside your country where data protection laws may
              differ. By using our services, you consent to the transfer of your
              information to these locations.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              8. Data Retention
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your personal information for as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes, and enforce our agreements. When you delete your
              account, we will delete or anonymize your personal information
              within 90 days, except where we are required to retain it by law.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              9. Cookies and Tracking Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies, local storage, and similar tracking technologies
              to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Authenticate users and prevent fraud</li>
              <li>Analyze app performance and user behavior</li>
              <li>Provide personalized content and features</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              10. Third-Party Services
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our app integrates with third-party services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Firebase:</strong> Authentication, cloud storage, and
                push notifications
              </li>
              <li>
                <strong>Google Sign-In:</strong> Authentication service
              </li>
              <li>
                <strong>Apple Sign-In:</strong> Authentication service
              </li>
              <li>
                <strong>Facebook Login:</strong> Authentication service
              </li>
              <li>
                <strong>Cloudinary:</strong> Image hosting and management
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              These services have their own privacy policies. We encourage you
              to review them.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              11. Changes to This Privacy Policy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes by posting the new policy on
              this page and updating the "Last Updated" date. We encourage you
              to review this Privacy Policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              12. Contact Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> support@jointactix.app
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 509 608 8947
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> Washington, Spokane Valley
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              13. Consent
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              By using our app, you consent to our Privacy Policy and agree to
              its terms. If you do not agree with this policy, please do not use
              our services.
            </p>

            <div className="bg-lime-300 rounded-xl p-6 mt-10">
              <p className="text-black font-semibold text-center">
                Your privacy matters to us ! <br />
                We're committed to protecting your data and providing
                transparency about how we use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black text-sm font-bold">
            &copy; {new Date().getFullYear()} Tactix™ Fantasy Football. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

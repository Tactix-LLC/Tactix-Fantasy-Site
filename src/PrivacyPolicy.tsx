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
            Last Updated: November 24, 2025
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
              1.3 Subscription and Payment Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you purchase a subscription through the App, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Subscription status and plan information (monthly or yearly)</li>
              <li>Subscription start and expiration dates</li>
              <li>Transaction identifiers from third-party payment processors (Apple App Store, Google Play Store)</li>
              <li>Subscription renewal and cancellation information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Note:</strong> We do not collect or store credit card numbers, bank account information, or other direct payment details. All payment processing is handled securely by Apple App Store and Google Play Store through RevenueCat, our subscription management platform.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              1.4 Third-Party Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you sign in using Google, Apple, or Facebook, we receive basic profile information from these services in accordance with their privacy policies and your privacy settings with those services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We also receive subscription information from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>RevenueCat (subscription management platform)</li>
              <li>Apple App Store (for iOS subscriptions)</li>
              <li>Google Play Store (for Android subscriptions)</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Calculate and display your fantasy points and rankings</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Process and manage your subscription purchases and renewals</li>
              <li>Provide subscription benefits (such as ad-free experience)</li>
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
              3. Subscriptions and Payment Processing
            </h2>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.1 Payment Processing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All subscription payments are processed through third-party payment processors:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>iOS Subscriptions:</strong> Processed by Apple App Store</li>
              <li><strong>Android Subscriptions:</strong> Processed by Google Play Store</li>
              <li><strong>Subscription Management:</strong> Managed by RevenueCat</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not have access to your payment card information or other sensitive payment details. All payment information is securely stored and processed by Apple and Google in accordance with their respective privacy policies.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.2 Subscription Data
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use RevenueCat to manage your subscriptions and sync subscription status across devices. RevenueCat receives:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your user identifier (app-specific user ID)</li>
              <li>Subscription status and entitlements</li>
              <li>Subscription renewal information</li>
              <li>Transaction identifiers from Apple/Google</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              This information is used solely to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Manage your subscription and provide subscription benefits</li>
              <li>Sync subscription status across your devices</li>
              <li>Process subscription renewals and cancellations</li>
              <li>Provide customer support for subscription-related issues</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.3 Subscription Management
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage your subscription at any time through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>iOS:</strong> Settings &gt; [Your Name] &gt; Subscriptions in the App Store</li>
              <li><strong>Android:</strong> Google Play Store &gt; Subscriptions</li>
              <li><strong>App:</strong> Profile &gt; Premium Subscription &gt; Manage Subscription</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.4 Auto-Renewal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You will be charged the subscription fee through your App Store or Google Play account within 24 hours before the end of the current period. Auto-renewal can be disabled at any time through your device's subscription settings.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.5 Subscription Cancellation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you cancel a subscription:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Your subscription will remain active until the end of the current billing period</li>
              <li>You will continue to receive subscription benefits until the period ends</li>
              <li>You will not be charged for subsequent periods</li>
              <li>Your subscription status will be updated in our system</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              4. Data Sharing and Disclosure
            </h2>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.1 We Share Information With:
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
                <strong>Subscription Management:</strong> RevenueCat for managing subscriptions and syncing status across devices
              </li>
              <li>
                <strong>Payment Processors:</strong> Apple App Store and Google Play Store for processing subscription payments
              </li>
              <li>
                <strong>Other Users:</strong> Your public profile information,
                team name, and league standings may be visible to other users
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.2 Subscription Information Sharing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For subscription management, we share the following with RevenueCat:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>User identifier (app-specific user ID)</li>
              <li>Subscription status</li>
              <li>Subscription entitlements</li>
              <li>Transaction identifiers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              RevenueCat shares this information with Apple App Store and Google Play Store to manage your subscriptions. This sharing is necessary to provide subscription services and is done in accordance with their privacy policies.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.3 We May Disclose Information When:
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
              5. Data Security
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Encryption of sensitive data</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure transmission of subscription data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your information, we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              6. Your Rights and Choices
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
                data (Note: Deleting your account does not automatically cancel your subscription. You must cancel your subscription separately through your device's subscription settings)
              </li>
              <li>
                <strong>Subscription Cancellation:</strong> Cancel your subscription at any time through your device's subscription settings or the App
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
              7. Children's Privacy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are not intended for users under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us, and we
              will delete such information.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              8. International Data Transfers
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We take appropriate measures to ensure your information is protected in accordance with this Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subscription data may be processed by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>RevenueCat (United States)</li>
              <li>Apple App Store (various locations)</li>
              <li>Google Play Store (various locations)</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              9. Data Retention
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide the App and services to you</li>
              <li>Manage your subscription and provide subscription benefits</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subscription information is retained for as long as your subscription is active and for a reasonable period thereafter to support subscription management and customer service. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it by law.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              10. Cookies and Tracking Technologies
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies, local storage, and similar tracking technologies
              to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Remember your preferences and settings</li>
              <li>Analyze app usage</li>
              <li>Improve user experience</li>
              <li>Track subscription status across devices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can control cookies through your device settings, though this may affect App functionality.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              11. Third-Party Services
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
              <li>
                <strong>RevenueCat:</strong> Subscription management and payment processing
              </li>
              <li>
                <strong>Apple App Store:</strong> iOS subscription payments
              </li>
              <li>
                <strong>Google Play Store:</strong> Android subscription payments
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              These services have their own privacy policies. We encourage you to review their privacy policies, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Apple App Store Privacy Policy</li>
              <li>Google Play Store Privacy Policy</li>
              <li>RevenueCat Privacy Policy</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              12. Changes to This Privacy Policy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Posting the updated Privacy Policy in the App</li>
              <li>Sending you a notification</li>
              <li>Updating the "Last Updated" date</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your continued use of the App after such changes constitutes acceptance of the updated Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              13. California Privacy Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              14. Contact Us
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> support@jointactix.app
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 509 608 8947
              </p>
              <p className="text-gray-700">
                <strong>Tactix LLC</strong><br />
                5021 E Glennaire Dr.<br />
                Spokane, WA, 99223<br />
                USA
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 mt-4">
              For subscription-related inquiries, please contact us at support@jointactix.app or manage your subscription through your device's subscription settings.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              15. Consent
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              By using the App, you consent to the collection and use of your information as described in this Privacy Policy, including subscription and payment information as outlined in Section 3.
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


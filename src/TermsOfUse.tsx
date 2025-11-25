import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
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
            Terms and Conditions
          </h1>
          <p className="text-xl text-black/80">
            Last Updated: November 25, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By downloading, installing, accessing, or using the Tactix Fantasy Football Manager application ("the App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The App is provided by Tactix LLC. These Terms constitute a legally binding agreement between you and Tactix LLC.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              2. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App is available to users of all ages. If you are under the age of 13, you represent that you have obtained parental or guardian consent to use the App. By using the App, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>You have the legal capacity to enter into these Terms (or have parental/guardian consent)</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>You are not prohibited from using the App under any applicable law</li>
              <li>All information you provide is accurate and truthful</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              3. Account Registration
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.1 Account Creation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use the App, you must create an account by providing accurate, current, and complete information. You may register using:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Email and password</li>
              <li>Google Sign-In (via Firebase)</li>
              <li>Apple Sign-In (via Firebase)</li>
              <li>Facebook Sign-In</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.2 Account Security
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Not share your account credentials with any third party</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Maintain the security of your account information</li>
              <li>Use strong, unique passwords</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              3.3 Account Termination
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in any fraudulent, abusive, or illegal activity.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              4. Subscriptions and Payments
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.1 Subscription Plans
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App offers premium subscription plans that provide additional features and benefits, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Monthly subscription plan (Tactix Premium Monthly)</li>
              <li>Yearly subscription plan (Tactix Premium Yearly)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription plans may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Ad-free experience</li>
              <li>Premium features and benefits</li>
              <li>Enhanced user experience</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.2 Subscription Pricing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subscription prices are displayed in the App at the time of purchase and may vary by region. Prices are subject to change, but any price changes will not affect your current subscription period. You will be notified of price changes at least 30 days in advance.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.3 Payment Processing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All subscription payments are processed through third-party payment processors:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>iOS Subscriptions:</strong> Processed by Apple App Store through your Apple ID</li>
              <li><strong>Android Subscriptions:</strong> Processed by Google Play Store through your Google account</li>
              <li><strong>Subscription Management:</strong> Managed by RevenueCat</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not collect, store, or process credit card information or other direct payment details. All payment information is securely stored and processed by Apple and Google in accordance with their respective terms and privacy policies.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.4 Payment Terms
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              By purchasing a subscription, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Pay the subscription fee through your App Store or Google Play account</li>
              <li>Authorize automatic renewal of your subscription</li>
              <li>Accept responsibility for all charges incurred through your account</li>
              <li>Comply with Apple's or Google's payment terms, as applicable</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.5 Auto-Renewal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You will be charged the subscription fee through your App Store or Google Play account within 24 hours before the end of the current period. Auto-renewal can be disabled at any time through your device's subscription settings.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To cancel auto-renewal:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>iOS:</strong> Settings &gt; [Your Name] &gt; Subscriptions &gt; Select your subscription &gt; Cancel Subscription</li>
              <li><strong>Android:</strong> Google Play Store &gt; Subscriptions &gt; Select your subscription &gt; Cancel Subscription</li>
              <li><strong>App:</strong> Profile &gt; Premium Subscription &gt; Manage Subscription</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.6 Subscription Cancellation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may cancel your subscription at any time. When you cancel:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your subscription will remain active until the end of the current billing period</li>
              <li>You will continue to receive subscription benefits until the period ends</li>
              <li>You will not be charged for subsequent periods</li>
              <li>Your subscription will not automatically renew</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cancellation takes effect at the end of the current billing period. No refunds will be provided for the remaining period of a canceled subscription.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.7 Subscription Refunds
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refund requests are subject to Apple's and Google's refund policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>iOS:</strong> Refund requests must be made through Apple's refund process</li>
              <li><strong>Android:</strong> Refund requests must be made through Google Play's refund process</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not directly process refunds. All refund requests must be submitted through the appropriate App Store or Google Play platform.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.8 Free Trial
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If offered, free trials may be available for new subscribers. Free trials automatically convert to paid subscriptions unless canceled before the trial period ends. You will be charged at the end of the trial period if you do not cancel.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.9 Subscription Status
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subscription status is managed through RevenueCat and synced across your devices. You can check your subscription status in the App or through your App Store or Google Play account settings.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              4.10 Changes to Subscription Terms
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify subscription prices, features, or terms at any time. Changes to pricing will not affect your current subscription period but will apply to renewals. We will notify you of material changes to subscription terms at least 30 days in advance.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              5. Use of the App
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              5.1 Permitted Use
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use the App for personal, non-commercial purposes in accordance with these Terms. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Use the App only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights of other users</li>
              <li>Not interfere with or disrupt the App's functionality</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              5.2 Prohibited Activities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
              <li>Use automated systems or bots to access the App</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Create multiple accounts to gain an unfair advantage</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              6. Fantasy Football Game Rules
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.1 Team Selection
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must select a squad of 15 players consisting of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>2 Goalkeepers</li>
              <li>5 Defenders</li>
              <li>5 Midfielders</li>
              <li>3 Forwards</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              A maximum of 3 players can be selected from the same team. You start with 100 Tactix Coins as your budget.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.2 Transfers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tactix offers unlimited transfers between game weeks, allowing you to optimize your team strategy freely. Transfers can be made until the game week deadline.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.3 Game Week Participation
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>You must set your team lineup before each game week deadline</li>
              <li>Once a game week begins, you cannot make changes to your lineup</li>
              <li>Points are calculated based on real-world player performances</li>
              <li>Final points (including captain bonuses) are calculated after the game week ends</li>
              <li>During live matches, you'll see base points; captain/vice-captain bonuses are applied after the game week is finalized</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.4 Captain and Vice-Captain
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Your captain's points are doubled (if they play at least one minute)</li>
              <li>If your captain doesn't play, your vice-captain's points are automatically doubled</li>
              <li>Captains and vice-captains are not eligible for auto-substitution</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.5 Points and Scoring
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Points are awarded based on real-world match performances</li>
              <li>Points are finalized after matches are completed</li>
              <li>We reserve the right to correct any scoring errors</li>
              <li>All scoring decisions are final</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              6.6 Auto-Substitution
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If a player in your starting 11 doesn't play, the system automatically substitutes them with a player from your bench who did play, provided your bench players are in the correct positions.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              7. Intellectual Property
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              7.1 Ownership
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content, features, and functionality of the App, including but not limited to text, graphics, logos, images, and software, are owned by Tactix LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              7.2 Limited License
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the App for your personal, non-commercial use.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              7.3 Restrictions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Copy, modify, or distribute the App or its content</li>
              <li>Use our trademarks or logos without written permission</li>
              <li>Create derivative works based on the App</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              8. User Content
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              8.1 User-Generated Content
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may submit content through the App, including team names, profile pictures, and messages. You retain ownership of your content but grant us a worldwide, royalty-free, perpetual license to use, display, and distribute your content in connection with the App.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              8.2 Content Standards
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to submit content that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Is illegal, offensive, or harmful</li>
              <li>Infringes on any third-party rights</li>
              <li>Contains spam or unsolicited communications</li>
              <li>Violates any applicable laws</li>
              <li>Contains hate speech or discriminatory content</li>
            </ul>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              9. Disclaimers
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              9.1 No Warranties
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              9.2 Availability
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not guarantee that the App will be available at all times or that it will be error-free. We may modify, suspend, or discontinue any part of the App at any time without prior notice.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              9.3 Game Results
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are not responsible for the actual outcomes of football matches or player performances. Our scoring system is based on publicly available football data, and we are not affiliated with any football league or organization.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TACTIX LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              This limitation of liability applies to both free and paid subscription services.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              11. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to indemnify and hold harmless Tactix LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of or relating to your use of the App or violation of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              12. Modifications to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms in the App or by other reasonable means. Your continued use of the App after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              13. Termination
            </h2>
            
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              13.1 Termination by You
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may terminate your account at any time by contacting us or using the account deletion feature in the App. Note that deleting your account does not automatically cancel your subscription. You must cancel your subscription separately through your device's subscription settings.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              13.2 Termination by Us
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to the App immediately, without prior notice, for any breach of these Terms. Upon termination:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Your right to use the App will cease immediately</li>
              <li>We may delete your account and associated data</li>
              <li>Any active subscriptions will be canceled (no refunds provided)</li>
              <li>You will lose access to premium features</li>
            </ul>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-3 mt-6">
              13.3 Effect of Termination
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upon termination, all licenses granted to you under these Terms will immediately terminate, and you must cease all use of the App.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              14. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of Washington, United States of America, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              15. Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising out of or relating to these Terms or the App shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Washington, USA. Alternatively, disputes may be resolved in the state or federal courts located in Washington, USA.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For subscription-related disputes, you may also contact Apple or Google support, as applicable.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              16. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
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
              17. Severability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              18. Entire Agreement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms constitute the entire agreement between you and Tactix LLC regarding the use of the App and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              19. No Waiver
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our failure to enforce any provision of these Terms shall not be deemed a waiver of such provision or of the right to enforce such provision.
            </p>

            <h2 className="text-3xl font-bold text-black mb-4 mt-10 font-['Space_Grotesk']">
              20. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App integrates with third-party services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Apple App Store (for iOS subscriptions and payments)</li>
              <li>Google Play Store (for Android subscriptions and payments)</li>
              <li>RevenueCat (for subscription management)</li>
              <li>Firebase (for authentication and backend services)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your use of these third-party services is subject to their respective terms and conditions and privacy policies. We are not responsible for the practices of these third-party services.
            </p>

            <div className="bg-lime-300 rounded-xl p-6 mt-10">
              <p className="text-black font-semibold text-center">
                Thank you for using Tactix! <br />
                We're committed to providing you with the best fantasy football experience.
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

export default TermsOfUse;

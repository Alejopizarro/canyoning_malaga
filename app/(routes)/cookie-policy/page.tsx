import CookieSettingsButton from "@/components/ui/cookie-settings-button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for TUUR Adventure Experts. Learn about how we use cookies and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Legal Entity:</strong> TUUR Adventure Experts S.L.
            </p>
            <p className="text-gray-700">
              <strong>CIF:</strong> B93745461
            </p>
            <p className="text-gray-700">
              <strong>Website:</strong> www.tuuradventure.com
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website. They
              are widely used to make websites work more efficiently, provide a
              better user experience, and give website owners useful
              information.
            </p>
            <p className="text-gray-700">
              Cookies can be &quot;persistent&quot; or &quot;session&quot;
              cookies. Persistent cookies remain on your device when you go
              offline, while session cookies are deleted as soon as you close
              your web browser.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              TUUR Adventure Experts uses cookies for several purposes,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ensuring our website functions properly</li>
              <li>Remembering your preferences and settings</li>
              <li>
                Understanding how visitors use our website to improve our
                services
              </li>
              <li>Measuring the effectiveness of our marketing campaigns</li>
              <li>Providing relevant advertisements</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Types of Cookies We Use
            </h2>

            {/* Necessary Cookies */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Necessary Cookies (Always Active)
              </h3>
              <p className="text-gray-700 mb-4">
                These cookies are essential for the website to function
                properly. They enable basic functions like page navigation and
                access to secure areas. The website cannot function properly
                without these cookies.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Cookie Name
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Provider
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Purpose
                      </th>
                      <th className="text-left py-2 font-medium text-gray-600">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        tuur_cookie_consent
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        TUUR Adventure
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Stores your cookie consent preferences
                      </td>
                      <td className="py-2 text-gray-600">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Analytics Cookies
              </h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                This helps us improve our website and your experience.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Cookie Name
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Provider
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Purpose
                      </th>
                      <th className="text-left py-2 font-medium text-gray-600">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">_ga</td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google Analytics
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used to distinguish users
                      </td>
                      <td className="py-2 text-gray-600">2 years</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        _ga_*
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google Analytics 4
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used to persist session state
                      </td>
                      <td className="py-2 text-gray-600">2 years</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        _gid
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google Analytics
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used to distinguish users
                      </td>
                      <td className="py-2 text-gray-600">24 hours</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        _gat
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google Analytics
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used to throttle request rate
                      </td>
                      <td className="py-2 text-gray-600">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Marketing Cookies
              </h3>
              <p className="text-gray-700 mb-4">
                These cookies are used to track visitors across websites to
                display relevant advertisements. They help us measure the
                effectiveness of our advertising campaigns.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Cookie Name
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Provider
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Purpose
                      </th>
                      <th className="text-left py-2 font-medium text-gray-600">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        _gcl_au
                      </td>
                      <td className="py-2 pr-4 text-gray-600">Google Ads</td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used for conversion tracking
                      </td>
                      <td className="py-2 text-gray-600">90 days</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">IDE</td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google DoubleClick
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used for targeted advertising
                      </td>
                      <td className="py-2 text-gray-600">1 year</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        DSID
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Google DoubleClick
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Used to identify signed-in users
                      </td>
                      <td className="py-2 text-gray-600">2 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                Functional Cookies
              </h3>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality and personalization,
                such as remembering your preferences, language settings, and
                providing a more personalized experience.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Cookie Name
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Provider
                      </th>
                      <th className="text-left py-2 pr-4 font-medium text-gray-600">
                        Purpose
                      </th>
                      <th className="text-left py-2 font-medium text-gray-600">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-mono text-gray-700">
                        language_preference
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        TUUR Adventure
                      </td>
                      <td className="py-2 pr-4 text-gray-600">
                        Remembers your language preference
                      </td>
                      <td className="py-2 text-gray-600">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services that may set cookies on
              your device:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to
                analyze website traffic and understand how visitors interact
                with our site. For more information, visit{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google Tag Manager:</strong> Used to manage website tags
                and tracking scripts efficiently.
              </li>
              <li>
                <strong>Google Ads:</strong> Used for conversion tracking and
                remarketing to show relevant advertisements.
              </li>
              <li>
                <strong>Bokun:</strong> Our booking system provider. For more
                information, visit{" "}
                <a
                  href="https://www.bokun.io/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Bokun&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-700 mb-4">
              You can manage your cookie preferences at any time by clicking the
              button below:
            </p>
            <div className="my-6">
              <CookieSettingsButton
                variant="inline"
                label="Manage Cookie Preferences"
              />
            </div>
            <p className="text-gray-700 mb-4">
              You can also control cookies through your browser settings. Most
              browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Please note that blocking certain cookies may affect your
              experience on our website and limit the services we can provide.
            </p>
          </section>

          {/* Browser Settings */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Browser-Specific Instructions
            </h2>
            <p className="text-gray-700 mb-4">
              For more information on how to manage cookies in your browser,
              please visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We encourage you to review this page
              periodically for the latest information on our cookie practices.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@tuuradventure.com"
                  className="text-green-600 hover:text-green-700"
                >
                  info@tuuradventure.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Calle San Javier No 16, 4-B, (29670)
                San Pedro Alcántara, Málaga, Spain.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Related Policies
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: February 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

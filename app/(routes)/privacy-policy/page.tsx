import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Privacy Policy</h1>
      <p className="text-center text-gray-500 mb-12">
        Last updated: February 25, 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* 1. Data Controller */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. Data Controller
          </h2>
          <p>
            The entity responsible for processing your personal data is:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Company:</strong> TUUR Adventure Experts
            </li>
            <li>
              <strong>Address:</strong> C. San Javier N&ordm; 16 4-B, San Pedro
              de Alc&aacute;ntara, M&aacute;laga, Spain
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:tuurcanyoning@gmail.com"
                className="text-blue-600 hover:underline"
              >
                tuurcanyoning@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+34699199158"
                className="text-blue-600 hover:underline"
              >
                +34 699 199 158
              </a>
            </li>
            <li>
              <strong>Active Tourism Registry:</strong> RTA AT/MA00141
            </li>
          </ul>
        </section>

        {/* 2. Data We Collect */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            2. What Personal Data We Collect
          </h2>
          <p>
            We may collect the following personal data when you interact with
            our website or book an activity:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Identity data:</strong> full name, age, nationality
            </li>
            <li>
              <strong>Contact data:</strong> email address, phone number
            </li>
            <li>
              <strong>Booking data:</strong> activity preferences, group size,
              preferred dates
            </li>
            <li>
              <strong>Health data:</strong> medical conditions, allergies, or
              relevant medication that you voluntarily declare for safety
              purposes
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, and
              browsing behaviour collected through cookies
            </li>
            <li>
              <strong>Images:</strong> photographs and videos taken during
              activities
            </li>
          </ul>
        </section>

        {/* 3. Purpose */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            3. Purpose and Legal Basis for Processing
          </h2>
          <p>We process your personal data for the following purposes:</p>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">
                    Purpose
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">
                    Legal Basis (GDPR)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">
                    Managing bookings and providing our adventure services
                  </td>
                  <td className="px-4 py-3">
                    Performance of a contract (Art. 6.1.b)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Responding to enquiries via our contact form, email, phone,
                    or WhatsApp
                  </td>
                  <td className="px-4 py-3">Legitimate interest (Art. 6.1.f)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Ensuring participant safety (processing health data)
                  </td>
                  <td className="px-4 py-3">
                    Explicit consent &amp; vital interests (Art. 9.2.a / 9.2.c)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Sending promotional communications and offers
                  </td>
                  <td className="px-4 py-3">Consent (Art. 6.1.a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Sharing activity photos via WhatsApp
                  </td>
                  <td className="px-4 py-3">Consent (Art. 6.1.a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Complying with legal and tax obligations
                  </td>
                  <td className="px-4 py-3">Legal obligation (Art. 6.1.c)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Data Sharing */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            4. Data Sharing and Third Parties
          </h2>
          <p>
            We do not sell your personal data. We may share your data with the
            following categories of recipients only when necessary:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Insurance providers:</strong> to manage civil liability and
              accident insurance policies
            </li>
            <li>
              <strong>Transport companies:</strong> when transfer services are
              included in your booking
            </li>
            <li>
              <strong>Public authorities:</strong> when required by law (e.g.,
              tax authorities, emergency services)
            </li>
            <li>
              <strong>Technology providers:</strong> hosting, email, and
              analytics services that process data on our behalf under data
              processing agreements
            </li>
          </ul>
        </section>

        {/* 5. International Transfers */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            5. International Data Transfers
          </h2>
          <p>
            Some of the third-party services we use (such as hosting or
            analytics) may process data outside the European Economic Area
            (EEA). In such cases, we ensure appropriate safeguards are in place,
            including Standard Contractual Clauses (SCCs) approved by the
            European Commission.
          </p>
        </section>

        {/* 6. Data Retention */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            6. Data Retention
          </h2>
          <p>We retain your personal data for the following periods:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Booking and contract data:</strong> for the duration of the
              contractual relationship and up to 5 years after, in accordance
              with Spanish tax obligations
            </li>
            <li>
              <strong>Contact form enquiries:</strong> up to 12 months from your
              last communication
            </li>
            <li>
              <strong>Marketing communications:</strong> until you withdraw your
              consent
            </li>
            <li>
              <strong>Activity photos:</strong> up to 12 months after the
              activity date
            </li>
          </ul>
        </section>

        {/* 7. Your Rights */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            7. Your Rights
          </h2>
          <p>
            Under the General Data Protection Regulation (GDPR) and Spanish data
            protection law (LOPDGDD), you have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Access</strong> your personal data
            </li>
            <li>
              <strong>Rectify</strong> inaccurate or incomplete data
            </li>
            <li>
              <strong>Erase</strong> your data (&quot;right to be
              forgotten&quot;)
            </li>
            <li>
              <strong>Restrict</strong> or <strong>object to</strong> processing
            </li>
            <li>
              <strong>Data portability</strong> — receive your data in a
              structured, machine-readable format
            </li>
            <li>
              <strong>Withdraw consent</strong> at any time, without affecting
              the lawfulness of prior processing
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:tuurcanyoning@gmail.com"
              className="text-blue-600 hover:underline"
            >
              tuurcanyoning@gmail.com
            </a>
            . We will respond within 30 days.
          </p>
          <p className="mt-2">
            You also have the right to lodge a complaint with the Spanish Data
            Protection Agency (AEPD) at{" "}
            <span className="font-medium">www.aepd.es</span>.
          </p>
        </section>

        {/* 8. Cookies */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            8. Cookies
          </h2>
          <p>
            Our website uses cookies to improve your browsing experience and
            analyse site traffic. You can manage your cookie preferences at any
            time through your browser settings. For more details, please see our{" "}
            <Link
              href="/cookies-policy"
              className="text-blue-600 hover:underline"
            >
              Cookies Policy
            </Link>
            .
          </p>
        </section>

        {/* 9. Security */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            9. Security Measures
          </h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. These include encrypted communications
            (SSL/TLS), access controls, and regular security reviews.
          </p>
        </section>

        {/* 10. Minors */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            10. Data of Minors
          </h2>
          <p>
            Some of our activities are available for children from 6 years of
            age. In such cases, we require the consent of a parent or legal
            guardian for the processing of the minor&apos;s personal data,
            including any health information necessary for safe participation.
          </p>
        </section>

        {/* 11. Changes */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any significant changes by posting the updated policy on this
            page with a new &quot;Last updated&quot; date.
          </p>
        </section>

        {/* 12. Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            12. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal data, please contact us:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:tuurcanyoning@gmail.com"
                className="text-blue-600 hover:underline"
              >
                tuurcanyoning@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+34699199158"
                className="text-blue-600 hover:underline"
              >
                +34 699 199 158
              </a>
            </li>
            <li>
              <strong>Address:</strong> C. San Javier N&ordm; 16 4-B, San Pedro
              de Alc&aacute;ntara, M&aacute;laga, Spain
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

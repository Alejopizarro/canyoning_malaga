import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "General Terms & Conditions for TUUR Adventure Experts S.L. Read our policies on bookings, cancellations, safety, and more.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            General Terms & Conditions
          </h1>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Legal Entity:</strong> TUUR Adventure Experts S.L.
            </p>
            <p className="text-gray-700">
              <strong>CIF:</strong> B93745461
            </p>
            <p className="text-gray-700">
              <strong>Registered Address:</strong> Calle San Javier No 16, 4-B,
              (29670) San Pedro Alcántara, Málaga, Spain.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. General Responsibility
            </h2>
            <p className="text-gray-700 mb-4">
              The client booking the activity is responsible for ensuring that
              all participants in their group are fully aware of and accept
              these General Conditions. This includes awareness of timetables,
              location, difficulty levels, required physical condition, and
              mandatory materials. TUUR Adventure Experts is not responsible for
              any consequences arising from the omission of this information to
              participants.
            </p>
            <p className="text-gray-700">
              <strong>Participant details:</strong> The client responsible for
              the group and who made the reservation is responsible for sending
              the required details to TUUR Adventure Experts or filling in the
              relevant activity-specific forms with the required data for all
              participants. They are also responsible for sending the data sheet
              prepared by TUUR Adventure Experts to all participants, indicating
              the place and time of the activity, as well as the required
              physical and technical level.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Health and Physical Fitness Declaration
            </h2>
            <p className="text-gray-700 mb-4">
              By accepting these Terms & Conditions and proceeding with the
              booking, each participant (or their legal guardian) expressly
              declares:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                That they are in good health and possess a physical and
                technical level consistent with the chosen activity.
              </li>
              <li>
                That they do not suffer from any illness, injury, disability, or
                cardiovascular condition that could pose a risk to themselves or
                others during the activity.
              </li>
              <li>
                That they are not under the influence of alcohol, drugs,
                narcotics, or medication that may affect their reaction capacity
                or balance.
              </li>
              <li>
                The client is obligated to inform the guide of any specific
                allergies or medical conditions before the start of the
                activity.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Timetables and Punctuality Policy
            </h2>
            <p className="text-gray-700 mb-4">
              Punctuality is essential for the safety and organization of the
              group.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Arrival:</strong> Participants must arrive at the
                designated meeting point 15 minutes before the scheduled start
                time for the safety briefing and gear fitting.
              </li>
              <li>
                <strong>Courtesy Time:</strong> A maximum 15-minute courtesy
                waiting time is granted for accidental delays.
              </li>
              <li>
                <strong>Forfeiture:</strong> After this 15-minute period, the
                activity will commence without absent participants. Those who
                arrive late will automatically lose all rights to the service
                and no refund will be issued, as delays incur additional
                operational costs regarding gear, vehicles, and technical fees.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Mandatory Footwear and Equipment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Technical Gear:</strong> TUUR provides high-quality,
                regularly inspected safety gear (wetsuits, helmets, harnesses).
              </li>
              <li>
                <strong>Footwear Requirements:</strong> Participants are
                required to bring closed sports shoes with good grip that can
                get wet. Flip-flops, sandals, or soft-soled water shoes are
                strictly prohibited. We have professional canyoning shoes
                available for hire.
              </li>
              <li>
                <strong>Right of Admission:</strong> The guide reserves the
                right to refuse admission, without refund, to any participant
                who does not bring the required basic material or inappropriate
                footwear, as it poses a safety risk to the group.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Personal Belongings and Liability
            </h2>
            <p className="text-gray-700 mb-4">
              TUUR Adventure Experts is not responsible for the loss, theft, or
              damage of personal items (including vehicles, mobile phones,
              jewellery, or cameras) before, during, or after the activity.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Storage:</strong> As a courtesy, we offer limited
                storage space in our company vans for essential belongings.
                However, the use of this space does not imply liability for the
                items stored.
              </li>
              <li>
                <strong>Vehicles:</strong> Participants arriving by car are
                responsible for ensuring their vehicle is properly locked and
                that no valuables are left inside.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Authority of the Professional Guide
            </h2>
            <p className="text-gray-700 mb-4">
              All activities are led by certified professional guides. The guide
              has the definitive power to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Modify or suspend the activity due to weather conditions or
                situations posing a danger to the group.
              </li>
              <li>
                Exclude any participant who fails to follow safety instructions
                or whose physical condition puts the group&apos;s safety or
                schedule at risk.
              </li>
              <li>
                The guide declines any responsibility for consequences arising
                from a participant&apos;s non-compliance with directives.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Image Rights Declaration
            </h2>
            <p className="text-gray-700">
              By accepting these terms, the participant consents to the use of
              any photographs or videos taken during the course of the
              activities for TUUR Adventure Experts&apos; information, social
              media, and advertising campaigns. If a participant does not wish
              to have their image used, they must explicitly indicate this to
              the guide at the start of the activity.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Insurance
            </h2>
            <p className="text-gray-700">
              All activities include Accident Insurance and Civil Responsibility
              Insurance in compliance with the current regulations for Active
              Tourism companies in Andalusia (Decreto 20/2002).
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Cancellation and Refund Policy
            </h2>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
              A. Groups of less than 20 people:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Cancellations with more than 36 hours notice:</strong>{" "}
                100% refund of the activity cost (minus non-refundable external
                services such as pre-booked transport or catering).
              </li>
              <li>
                <strong>Cancellations with less than 36 hours notice:</strong>{" "}
                100% of the total cost will be charged; no refund will be
                issued.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
              B. Groups of more than 20 people:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>More than 1 month notice:</strong> 10% retention for
                booking and administrative fees.
              </li>
              <li>
                <strong>Less than 1 month notice:</strong> 50% retention for
                human resources blocking and administrative fees.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
              C. Force Majeure (Weather, Flight Cancellations, etc.):
            </h3>
            <p className="text-gray-700 mb-4">
              In case of heavy rain or adverse weather that prevents a safe
              descent, TUUR will offer:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>A postponement to a new date.</li>
              <li>An alternative adventure route.</li>
              <li>A 100% refund if the above options are not possible.</li>
            </ol>
            <p className="text-gray-700 mt-4">
              TUUR is not responsible for external expenses (accommodation,
              personal transport, etc.) caused by such cancellations.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Jurisdiction and Claims
            </h2>
            <p className="text-gray-700">
              Any dispute arising from these conditions shall be subject to the
              exclusive jurisdiction of the Courts and Tribunals of Málaga,
              Spain. Official complaint forms (Hojas de Reclamaciones) are
              available to the public upon request at our registered address.
            </p>
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

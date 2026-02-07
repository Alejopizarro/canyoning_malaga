import WhatsappIcon from "@/public/whatsapp";

const PrivateTourCTA = () => {
  return (
    <section className="py-12 px-6 max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold mb-3 leading-tight">
        Want a Private Tour just for you?
      </h2>

      <p className="text-base text-gray-500 leading-relaxed mb-4">
        We also offer private tours for you and your group. You will be led by
        one or several professional canyon guides during the parkour, and no
        other participants will join your group.
      </p>

      <p className="font-semibold text-gray-500 mb-6">
        Contact us to check availability and prices.
      </p>

      <button className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-teal-600 rounded-md text-teal-600 text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-teal-600 hover:text-white">
        <WhatsappIcon />
        Ask for a private tour
      </button>
    </section>
  );
};

export default PrivateTourCTA;

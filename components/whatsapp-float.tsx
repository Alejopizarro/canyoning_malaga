import WhatsappIcon from "@/public/whatsapp";
import Link from "next/link";

export default function WhatsAppFloat() {
  const phoneNumber = "34699199158";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-25 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon />
    </Link>
  );
}

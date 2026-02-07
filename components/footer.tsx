import Image from "next/image";
import Link from "next/link";
import { excursions } from "@/app/data";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const canyoningExcursions = excursions.filter(
    (exc) => exc.category === "Canyoning",
  );
  const viaFerrataExcursions = excursions.filter(
    (exc) => exc.category === "Via Ferrata",
  );
  const hikingExcursions = excursions.filter(
    (exc) => exc.category === "Hiking",
  );
  const moreActivitiesExcursions = excursions.filter(
    (exc) => exc.category === "More Activities",
  );

  return (
    <footer className="relative z-20 bg-gradient-to-b from-neutral-900 to-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-tuur.webp"
                width={120}
                height={120}
                alt="Tuur Canyoning Malaga"
                className="cursor-pointer"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Expert guides for unforgettable adventures in Andalusia.
              Canyoning, Via Ferrata, Hiking and more.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Canyoning */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Canyoning</h3>
            <ul className="space-y-2">
              {canyoningExcursions.map((excursion) => (
                <li key={excursion.route}>
                  <Link
                    href={`/${excursion.categoryPath || "canyoning"}/${
                      excursion.route
                    }`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {excursion.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Via Ferrata */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Via Ferrata</h3>
            <ul className="space-y-2">
              {viaFerrataExcursions.map((excursion) => (
                <li key={excursion.route}>
                  <Link
                    href={`/${excursion.categoryPath || "via-ferrata"}/${
                      excursion.route
                    }`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {excursion.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hiking & More Activities */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Hiking</h3>
            <ul className="space-y-2 mb-6">
              {hikingExcursions.map((excursion) => (
                <li key={excursion.route}>
                  <Link
                    href={`/${excursion.categoryPath || "hiking"}/${
                      excursion.route
                    }`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {excursion.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-4 text-primary">
              More Activities
            </h3>
            <ul className="space-y-2">
              {moreActivitiesExcursions.slice(0, 4).map((excursion) => (
                <li key={excursion.route}>
                  <Link
                    href={`/${excursion.categoryPath || "activities"}/${
                      excursion.route
                    }`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {excursion.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/activities"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  All Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/team-building"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Team Building
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="tel:+34123456789"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  +34 699 19 91 58
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@tuurcanyoning.com"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  tuurcanyoning@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-400">
                  C. San Javier Nº 16 4-B, San Pedro de Alcántara, Málaga
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Tuur Canyoning Malaga. All
              rights reserved.
            </p>
            <p className="text-xs text-gray-400 max-w-md md:text-center">
              Registered in "Registro de Turismo Activo" No: RTA AT/MA00141
              Civil Liability Insurance Policy No: RC/0316/1
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookies-policy"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

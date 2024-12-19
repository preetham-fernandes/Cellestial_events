import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-red-900 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Side: Phone and Email */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="tel:+919151187844"
              className="flex items-center text-white font-sans hover:text-black"
            >
              <FaPhoneAlt className="mr-2" />
              (+91) 915 118 7844
            </Link>
          </li>
          <li>
            <Link
              href="mailto:cellestialevents@gmail.com"
              className="flex items-center text-white font-sans hover:text-black"
            >
              <FaEnvelope className="mr-2" />
              cellestialevents@gmail.com
            </Link>
          </li>
        </ul>

        {/* Right Side: Social Media Icons */}
        <ul className="flex space-x-4 ">
          {/* Phone Icon - Hidden above 750px */}
          <li className="block md:hidden">
            <Link
              href="tel:+919151187844"
              target="_blank"
              className="flex items-center text-white"
            >
              <FaPhoneAlt className="w-6 h-6 hover:text-black" />
            </Link>
          </li>
          {/* Email Icon - Hidden above 750px */}
          <li className="block md:hidden">
            <Link
              href="mailto:cellestialevents@gmail.com"
              target="_blank"
              className="flex items-center text-white"
            >
              <FaEnvelope className="w-6 h-6 hover:text-black" />
            </Link>
          </li>
          {/* Whatsapp Icon */}
          <li>
            <Link
              href="https://wa.me/+919151187844"
              target="_blank"
              className="flex items-center text-white hover:text-gray-400"
            >
              <FaWhatsapp className="w-6 h-6 hover:text-green-500" />
            </Link>
          </li>
          {/* Instagram Icon */}
          <li>
            <Link
              href="https://www.instagram.com/cellestialevents?igsh=bGJnZWQxcWQ0NWN4"
              target="_blank"
              className="flex items-center text-white hover:text-gray-400"
            >
              <FaInstagram className="w-6 h-6 hover:text-black" />
            </Link>
          </li>
          {/* Facebook Icon */}
          <li>
            <Link
              href="https://www.facebook.com/yourpage"
              target="_blank"
              className="flex items-center text-white hover:text-gray-400"
            >
              <FaFacebook className="w-6 h-6 hover:text-blue-700" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

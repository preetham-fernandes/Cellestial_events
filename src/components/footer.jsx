import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Importing icons

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Cellestial Events</h3>
            <p>Crafting unforgettable events, one celebration at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <Link href="#about" className="hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-red-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-red-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-red-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="mb-2">
              Address: CR9H+RRW, Shirdi Nagar, Ambawadi, Nalasopara East, Nala
              Sopara, Maharashtra 401209
            </p>
            <p className="mb-2">Phone: (+91) 915 118 7844</p>
            <p className="mb-2">Email: cellestialevents@gmail.com </p>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="https://wa.me/+919151187844"
                  target="_blank"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <FaWhatsapp className="mr-2 text-white w-6 h-6 hover:text-green-500" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/cellestialevents?igsh=bGJnZWQxcWQ0NWN4"
                  target="_blank"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <FaInstagram className="mr-2 text-white w-6 h-6 hover:text-red-600 " />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  className="flex items-center text-white hover:text-gray-400"
                >
                  <FaFacebook className="mr-2 text-white w-6 h-6 hover:text-blue-700" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; 2024 Cellestial Events. All rights reserved. Developed by pfernandes
          </p>
        </div>
      </div>
    </footer>
  );
}

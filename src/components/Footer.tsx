import React from "react";
import logo from "@/assets/Back.png"; // <-- update path if needed

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* Logo (no box wrapper) */}
              <img
                src={logo}
                alt="Kimoel Trading Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">KIMOEL TRADING Inc.</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Leading provider of water storage solutions in the Philippines. We
              deliver innovative and reliable water management systems for
              industrial, commercial, and residential applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>📍 Brgy. Lodlod, Lipa City, Batangas</li>
              <li>📞 +63 912 345 6789</li>
              <li>📧 info@kimoeltrading.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} KIMOEL TRADING Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Requires react-icons package

const Footer = () => {
  return (
    <div className="relative min-h-screen">

        <footer className="bg-gray-800 text-white mt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Section 1: Company Info */}
            <div>
                <h2 className="text-2xl font-bold text-teal-400">MyCompany</h2>
                <p className="mt-4 max-w-xs text-gray-400">
                A brief description of the company or website.
                </p>
                <div className="mt-6 flex gap-4">
                {/* Social Media Icons */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <FaInstagram className="h-6 w-6" />
                </a>
                </div>
            </div>

            {/* Section 2 & 3: Navigation Links (Responsive Grid) */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
                <div>
                <p className="font-medium text-white">Services</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                    <a href="#" className="hover:opacity-75">Analytics</a>
                    <a href="#" className="hover:opacity-75">Engagement</a>
                    <a href="#" className="hover:opacity-75">Security</a>
                    <a href="#" className="hover:opacity-75">Integrations</a>
                </nav>
                </div>

                <div>
                <p className="font-medium text-white">Company</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                    <a href="#" className="hover:opacity-75">About Us</a>
                    <a href="#" className="hover:opacity-75">Careers</a>
                    <a href="#" className="hover:opacity-75">Blog</a>
                    <a href="#" className="hover:opacity-75">Contact Us</a>
                </nav>
                </div>

                {/* Empty div for spacing on large screens */}
                <div className="hidden lg:block"></div>

                <div>
                <p className="font-medium text-white">Legal</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
                    <a href="#" className="hover:opacity-75">Terms of Service</a>
                    <a href="#" className="hover:opacity-75">Privacy Policy</a>
                    <a href="#" className="hover:opacity-75">Cookie Policy</a>
                </nav>
                </div>
            </div>
            </div>

            {/* Bottom copyright section */}
            <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} MyCompany, Inc. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;

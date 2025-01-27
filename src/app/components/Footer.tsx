"use client"
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { useState } from 'react';

const Footer = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      // Here you can handle the form submission logic, such as sending the message to a backend or an email.
      setSubmitted(true);
      setMessage('');
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">About Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              We are a passionate team creating the best products and experiences for our customers.
              <br />
              Join us in our journey to revolutionize the industry.
            </p>
            <Link href="/about">
              <span className="text-sm text-primeColor hover:text-gray-300 font-semibold cursor-pointer">
                Learn more
              </span>
            </Link>
          </div>

          {/* Middle Section (Links) */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:text-[#EFE2BA] cursor-pointer">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="hover:text-[#EFE2BA] cursor-pointer">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-[#EFE2BA] cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="hover:text-[#EFE2BA] cursor-pointer">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section (Social Icons) */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">Follow Us</h3>
            <div className="flex space-x-6 text-gray-400">
              <Link href="https://www.facebook.com" passHref>
                <FaFacebook size={24} className="hover:text-[#EFE2BA] cursor-pointer" />
              </Link>
              <Link href="https://twitter.com" passHref>
                <FaTwitter size={24} className="hover:text-[#EFE2BA] cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com" passHref>
                <FaInstagram size={24} className="hover:text-[#EFE2BA] cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com" passHref>
                <FaLinkedin size={24} className="hover:text-[#EFE2BA] cursor-pointer" />
              </Link>
              <Link href="https://github.com" passHref>
                <IoLogoGithub size={24} className="hover:text-[#EFE2BA] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Message Bar Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center md:flex-row justify-between">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Send Us A Feedback</h3>
              <textarea
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primeColor"
                rows={3}
                placeholder="Write your message here..."
                value={message}
                onChange={handleMessageChange}
              />
              <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-red-500 font-semibold text-black rounded-full hover:bg-red-400 transition duration-200"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
              {submitted && (
                <p className="mt-2 text-sm text-[#EFE2BA]">Thank you for your message. We will get back to you shortly.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center md:flex-row justify-between">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} My Website. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">Built by ❤️ Abudul Rehman Ansari</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

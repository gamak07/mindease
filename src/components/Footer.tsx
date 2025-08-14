import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* about mindease */}
          <div>
            <h5 className="mb-4 text-lg font-semibold">About Mindease</h5>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Our Mission
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                How It Works
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Research
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Team
              </li>
            </ul>
          </div>

          {/*  privacy and safety*/}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Privacy & Safety</h5>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Privacy Policy
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Terms of Service
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Data Security
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Crisis Resources
              </li>
            </ul>
          </div>

          {/* contact and support */}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Contact & Support</h5>
            <ul className="space-y-2">
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Help Center
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Contact Us
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Feedback
              </li>
              <li className="cursor-pointer text-gray-300 hover:text-white">
                Community
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap items-center gap-1 justify-center text-gray-400 text-center">
            &copy; 2025 MindEase. All rights reserved. |
            <FaExclamationTriangle className="text-yellow-500" />
            For emergencies, contact your local crisis hotline or emergency
            services.
          </div>
        </div>
      </div>
    </footer>
  );
}

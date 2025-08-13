import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* about mindease */}
          <div>
            <h5 className="text-lg font-semibold mb-4">About Mindease</h5>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Our Mission
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                How It Works
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Research
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Team
              </li>
            </ul>
          </div>

          {/*  privacy and safety*/}
          <div>
            <h5 className="text-lg font-semibold mb-4">Privacy & Safety</h5>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Data Security
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Crisis Resources
              </li>
            </ul>
          </div>

          {/* contact and support */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact & Support</h5>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Help Center
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Feedback
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer">
                Community
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            &copy; 2025 MindEase. All rights reserved. |{" "}
            <FaExclamationTriangle className="text-yellow-500 mx-1" /> For
            emergencies, contact your local crisis hotline or emergency
            services.
          </p>
        </div>
      </div>
    </footer>
  );
}

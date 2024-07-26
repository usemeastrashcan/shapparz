import React from 'react';
import Layout from '../components/Layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-2">
            Welcome to Shapparz! This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-2">
            We collect information you provide directly to us, such as your name, email address, and payment details, as well as information collected automatically through your use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <p className="mb-2">
            We use your information to process transactions, provide customer support, and improve our services. We may also use your information to send promotional emails, from which you can unsubscribe at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
          <p className="mb-2">
            We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Your Rights</h2>
          <p className="mb-2">
            You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
          <p className="mb-2">
            We implement appropriate security measures to protect your personal information from unauthorized access and disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
          <p className="mb-2">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy, please contact us at support@shapparz.com.
          </p>

          <p className="mt-6 text-gray-600">Last updated: 23-05-2024</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

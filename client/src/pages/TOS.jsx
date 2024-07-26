import React from 'react';
import Layout from '../components/Layout/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="mb-2">
            Welcome to Shapparz! These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to comply with and be bound by these terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
          <p className="mb-2">
            By using our services, you agree to these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Changes to Terms</h2>
          <p className="mb-2">
            We reserve the right to update or change these terms at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
          <p className="mb-2">
            You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for any content you post and for ensuring that it does not violate any laws or regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
          <p className="mb-2">
            All content on our website, including text, graphics, logos, and images, is the property of Shapparz or its content suppliers and is protected by intellectual property laws. You may not use or reproduce any content without our express written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Disclaimers and Limitation of Liability</h2>
          <p className="mb-2">
            Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted or error-free. We are not liable for any damages arising from the use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Governing Law</h2>
          <p className="mb-2">
            These terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in [Your Country/State].
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about these Terms of Service, please contact us at support@shapparz.com.
          </p>

          <p className="mt-6 text-gray-600">Last updated: 23-05-2024</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;

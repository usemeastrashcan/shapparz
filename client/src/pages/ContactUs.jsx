import React from 'react';
import Layout from '../components/Layout/Layout';

const ContactUs = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            If you have any questions, comments, or concerns, please feel free to reach out to us. We are here to assist you!
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Our Contact Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <span className="font-semibold">Email:</span> support@shapparz.com
            </li>
            <li className="mb-2">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </li>
            <li className="mb-2">
              <span className="font-semibold">Address:</span> 123 Shapparz Street, Suite 100, City, State, ZIP Code
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Business Hours</h2>
          <p className="mb-4">
            Our customer support team is available during the following hours:
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM
            </li>
            <li className="mb-2">
              <span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM
            </li>
            <li className="mb-2">
              <span className="font-semibold">Sunday:</span> Closed
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Follow Us</h2>
          <p className="mb-4">
            Stay connected with us on social media for the latest updates and promotions:
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-pink-600 hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

import React from 'react';
import Layout from '../components/Layout/Layout';

const ReturnPolicy = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
          <p className="mb-2">
            At Shapparz, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer a hassle-free return policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Eligibility for Returns</h2>
          <p className="mb-2">
            To be eligible for a return, the item must be unused, in the same condition that you received it, and in its original packaging. Certain items such as perishable goods, custom products, and personal care items are not eligible for return.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Time Frame for Returns</h2>
          <p className="mb-2">
            You have 30 days from the date of purchase to initiate a return. If 30 days have passed since your purchase, unfortunately, we cannot offer you a refund or exchange.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Process for Returning Items</h2>
          <p className="mb-2">
            To return an item, please email our customer service team at returns@shapparz.com with your order number and details about the product you would like to return. We will respond with instructions on how to proceed.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Refunds</h2>
          <p className="mb-2">
            Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Exchanges</h2>
          <p className="mb-2">
            We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at returns@shapparz.com.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Shipping</h2>
          <p className="mb-2">
            To return your product, you should mail your product to: [Insert Return Address]. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
          <p className="mb-2">
            For any questions or concerns regarding your return, please contact us at returns@shapparz.com.
          </p>

          <p className="mt-6 text-gray-600">Last updated: 23-05-2024</p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;

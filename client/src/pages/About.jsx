import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-400 min-h-screen flex flex-col lg:flex-row pt-10">
        {/* Left Section: Image */}
        <div className="flex-1 bg-gray-400 p-4 lg:p-8 ">
          <img
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text */}
        <div className="flex-1 bg-gray-400 p-4 lg:p-8">
          <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">About Shapparz</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Shapparz, your go-to destination for exceptional shopping experiences. Since our founding in [Year], we've been dedicated to offering a diverse range of high-quality products to meet your needs.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver top-notch service and products, and we strive to be a leader in the industry through continuous innovation and improvement. Our team is passionate about ensuring your satisfaction with every purchase.
          </p>
          <p className="text-gray-700 mb-4">
            At Shapparz, we redefine the shopping experience with a blend of quality, innovation, and unparalleled customer service. Founded with the vision to create a shopping destination that combines the best products with a seamless online experience, Shapparz stands out as a beacon in the world of e-commerce.
          </p>
          <p className="text-gray-700 mb-4">
            Our journey began with a simple yet powerful idea: to offer a curated selection of high-quality items that cater to the diverse needs and tastes of our customers. From everyday essentials to exclusive finds, every product in our collection is meticulously chosen to ensure it meets our rigorous standards of excellence.
          </p>
          <p className="text-gray-700 mb-4">
            At Shapparz, we believe that shopping should be more than just a transaction; it should be an experience that delights and inspires. That’s why we are committed to providing a platform where every interaction is effortless and enjoyable. Our user-friendly website, combined with our responsive customer service team, ensures that your shopping experience is smooth from start to finish.
          </p>
          <p className="text-gray-700 mb-4">
            We take pride in our dedication to innovation and customer satisfaction. Our team works tirelessly to stay ahead of trends and continually enhance our offerings, so you always have access to the latest and greatest products. Whether you're looking for the perfect gift or treating yourself to something special, Shapparz is here to make your shopping experience exceptional.
          </p>
          <p className="text-gray-700">
            Join us on our journey as we continue to explore new horizons and deliver a shopping experience that exceeds your expectations. At Shapparz, we’re not just about products; we’re about creating moments that make you smile.
          </p>
        </div>
      </div>

      {/* CEO's Message */}
      <div className="bg-blue-800 text-white text-center py-8">
        <h2 className="text-3xl font-bold mb-4">A Message from Our CEO</h2>
        <div className="flex justify-center mb-6">
          <img
            src="https://scontent.flhe2-3.fna.fbcdn.net/v/t39.30808-6/339944833_3199319090367749_4667144305041599445_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEX8rzBYbU-rrPLoyr2PfvbQyReNK09YE5DJF40rT1gTg_6Oo2j10DePZwcx8ou533YCqv-V5B9H5sfgc0TwWkV&_nc_ohc=-1SGjh8OAxoQ7kNvgER_Ozp&_nc_zt=23&_nc_ht=scontent.flhe2-3.fna&oh=00_AYAg7L_cD4Fg5CdM3xCO_0eJGnXR9AcgOft_eo86gwRNpA&oe=66A8A2C1"
            alt="CEO"
            className="w-32 h-32 rounded-full border-4 border-yellow-400 object-cover"
          />
        </div>
        <p className="text-lg px-4">
          Hello and welcome to Shapparz! I’m Hasnat Ahmad, the founder of Shapparz.<br></br> It is my pleasure to share with you the journey and vision behind our brand. <br></br>At Shapparz, we are driven by a passion for delivering the finest shopping experiences and ensuring that every interaction with our brand is memorable and fulfilling. <br></br>Thank you for being a part of our story. We look forward to serving you with excellence and innovation.
        </p>
      </div>
    </Layout>
  );
};

export default About;

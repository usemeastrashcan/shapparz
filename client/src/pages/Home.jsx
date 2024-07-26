import React from 'react';
import Layout from '../components/Layout/Layout';
import { Carousel } from 'antd';
const Home = () => {

  const contentStyle = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#ffff',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  };


  return (
    <Layout>
      <div>
      <div className="relative w-full">
        <img
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png"
          alt="Example"
          className="w-full"
        />
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-auto p-3">
          <h1 className="text-purple-700 text-3xl md:text-6xl font-bold">Ayo!! Shapar Oye!</h1>
          <p className="text-white text-xl font-bold md:text-2xl pt-4 md:pt-4 ">Welcome To The One And Only Online Platform</p>
          <p className="text-white text-lg font-bold md:text-xl">Jaha Shapar Gine Nahi Jate, Bhare Jate Hein</p>
        </div>
      </div>

      <div className=" bg-red-700 h-28 w-full mx-auto"></div>

      <div className="">
      <Carousel arrows:true autoplay autoplaySpeed={1000} infinite={true} effect='fade'>
      <div className=''>
        <h3 style={contentStyle}><img
          className='object-contain	h-full w-full'
          src="https://static.garmincdn.com/en/products/010-02564-10/g/full_width-desktop-34834a86-c94e-48c4-b710-e84cf06b4290.jpg"
        /></h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          className='object-contain	h-full w-full'
          src="https://gandbpro.com/cdn/shop/files/fullsizeleatherpink5.jpg?v=1709133352&width=1214"
        />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          className='object-contain	h-full w-full'
          src="https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/171/17172/17172184.jpeg"
        />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img
          className='object-contain	h-full w-full'
          src="https://media.shakespeare.org.uk/images/FullSizeRender-7-1024x580.width-770.jpg"
        />
        </h3>
      </div>
    </Carousel>
    <br />
      </div>
      <div className=" bg-red-700 h-28 w-full mx-auto"></div>

      </div>
    </Layout>

  );

};

export default Home;

import React from 'react';
import Mouse502 from '../../assets/images/products/Mouse502.svg' 

const MainSection = () => (
    <div className="flex items-center justify-center bg-background h-screen w-full lg:mt-24">
      <div className="flex flex-col w-11/12 md:w-7/12 lg:w-5/12 z-10 mb-64 md:mb-0">
        <h1 className="text-4xl md:text-6xl text-mainText font-black">G502 HERO</h1>
        <h3 className="text-2xl md:text-4xl text-mainText font-black text-opacity-75 lg:text-opacity-25 md:w-4/5">Log-tech High Performance Wireless Gaming Mouse</h3>
        <p className="text-mainText text-lg md:w-9/12">The Razer Ouroboros is outfitted with the most advanced & configurable sensor yet, 
          the all-new 8200dpi 4G laser sensor. It tracks so precisely, you always hit targets exactly where you need to.</p>
        <h3 className="text-4xl text-primary font-bold md:w-2/3">USD 99.99</h3>
        <div>
        <button className="h-10 w-32 lg:w-48 lg:h-12 rounded-sm text-mainText bg-primary">ADD TO CARD</button>
        <button className="border rounded-sm border-white h-10 w-32 lg:h-12 lg:w-48 text-mainText text-opacity-50 ml-6">MORE</button>
        </div>
      </div>
      <Mouse502 className="w-5/6 md:w-2/6 h-mouseH absolute md:static z-0 opacity-25 md:opacity-100 mt-48 md:mt-0" />
    </div>
  );
export default MainSection;

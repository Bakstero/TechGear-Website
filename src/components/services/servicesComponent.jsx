import React from 'react';

const ServicesComponent = ({ title, paragraph, image }) => (
  <div className="flex flex-col xl:flex-row items-center justify-around rounded-lg h-auto w-10/12 xl:w-services bg-white bg-opacity-25 p-6">
    {image}
    <div className="flex flex-col rounded-lg ml-0 xl:ml-8 w-2/3 text-left">
      <h3 className=" text-sm xl:text-2xl text-mainText font-black ">{title}</h3>
      <p className=" text-base xl:text-lg text-mainText font-medium ">{paragraph}</p>
    </div>
  </div>
);
export default ServicesComponent;

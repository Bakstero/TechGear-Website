import React from 'react';
import { Link } from 'gatsby';
import RightArrow from '../assets/images/other/RightArrow.svg';

const TitleComponent = ({ title, paragraph, link, action }) => (
  <div className="flex flex-col items-center justify-start bg-background w-full h-auto">
    <h1 className=" text-2xl md:text-5xl lg:text-7xl tracking-wide text-primary font-black opacity-50">{title}</h1>
    <h2 className=" text-sm md:text-xl lg:text-4xl text-mainText m-4 md:m-8 lg:m-20 absolute font-black">{paragraph}</h2>
    <Link to={link}>
      <div className="flex items-center justify-center">
        <h4 className=" text-sm md:text-lg lg:text-xl tracking-widest text-primary font-black">{action}</h4>
        <RightArrow className="w-8 ml-2" />
      </div>
    </Link>
  </div>
);
export default TitleComponent;

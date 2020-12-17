import React from 'react';

const Member = ({ title, image }) => (
  <div className="flex flex-col items-center justify-end rounded-lg h-membersBox w-membersBox bg-white bg-opacity-25 mb-12 xl:mb-0 p-6 xl:ml-8">
    {image}
    <h3 className="text-lg text-mainText font-normal mt-8">{title}</h3>
  </div>
);
export default Member;

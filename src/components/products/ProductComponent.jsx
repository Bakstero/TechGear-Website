import React from 'react';

const ProductComponent = ({title, image}) => (
    <div className="flex flex-col items-center justify-around rounded-lg md:ml-12 mb-12 md:mb-0">
        <div className="pb-12 lg:pb-24 xl:pb-48 absolute flex items-center justify-center">
            {image}
        </div>
        <div className="flex flex-col items-center justify-end rounded-lg h-64 md:h-48 w-64 md:w-48 xl:h-64 xl:w-product bg-white bg-opacity-25 p-6">
            <p className=" text-lg xl:text-2xl text-mainText font-black">{title}</p>
        </div>
    </div>
);
export default ProductComponent;

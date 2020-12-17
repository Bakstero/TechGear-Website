import React from 'react';
import GamingMouse from '../../assets/images/products/gamingMouse.svg'
import MxVertical from '../../assets/images/products/mxVertical.svg'
import NormalMouse from '../../assets/images/products/normalMouse.svg'
import TitleComponent from '../titleComponent'
import ProductComponent from './ProductComponent'

const ProductsSection = () => (
    <div id="products" className="flex flex-col items-center justify-start bg-background w-full h-auto md:h-screen">
      <TitleComponent 
        title='PRODUCTS' 
        paragraph='Which type of gear are you looking for?'
        link='/'
        action='View more' 
      />
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-12 xl:mt-64">
        <ProductComponent title='Gaming' image={<GamingMouse className=" w-2/3 xl:w-full xl:h-full" />} /> 
        <ProductComponent title='Graphic Design' image={<MxVertical className=" w-2/3 xl:w-full xl:h-full" />} /> 
        <ProductComponent title='Office & Others' image={<NormalMouse className=" w-2/3 xl:w-full xl:h-full" />} /> 
      </div>
    </div>
  );
export default ProductsSection;

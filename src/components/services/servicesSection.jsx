import React from 'react';
import TitleComponent from '../titleComponent'
import ServicesComponent from './servicesComponent'
import ServicesShield from '../../assets/images/services/ServicesShield.svg'
import ServicesPiggybank from '../../assets/images/services/ServicesPiggybank.svg'
import ServicesLaptop from '../../assets/images/services/ServicesLaptop.svg'
import ServicesSupport from '../../assets/images/services/ServicesSupport.svg'

const ServicesSection = () => (
  <div id="services" className="flex flex-col items-center justify-start bg-background w-full h-auto xl:h-screen">
      <TitleComponent 
        title='SERVICES' 
        paragraph='We provide more than high-tech products!'
        link='/'
        action='View more' 
      />
    <div className=" mt-32 mb-32 flex flex-col items-center justify-center xl:grid grid-rows-2 grid-flow-col gap-4">
      <ServicesComponent 
        image={<ServicesShield />}
        title='Lifetime Guarantee'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
      <ServicesComponent 
        image={<ServicesLaptop />}
        title='Lifetime Guarantee'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
      <ServicesComponent 
        image={<ServicesPiggybank />}
        title='Lifetime Guarantee'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
      <ServicesComponent 
        image={<ServicesSupport />}
        title='Lifetime Guarantee'
        paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
      />
    </div>
  </div>
  );
export default ServicesSection;

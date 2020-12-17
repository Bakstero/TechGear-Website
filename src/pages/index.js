import React from 'react';
import Header from '../components/header/header'
import MainSection from '../components/main/mainSection'
import ProductsSection from '../components/products/productsSection'
import ServicesSection from '../components/services/servicesSection'
import MembersSection from '../components/members/membersSection'
import ContactSection from '../components/contact/contactSection'

const HomePage = () => (
  <div className="flex flex-col items-center justify-center bg-gray-800 w-full">
    <Header />
    <MainSection />
    <ProductsSection />
    <ServicesSection />
    <MembersSection />
    <ContactSection />
  </div>
);

export default HomePage;

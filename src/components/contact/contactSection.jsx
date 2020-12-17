import React from 'react';
import TitleComponent from '../titleComponent'
import FormComponent from './formComponent'
import InfoComponent from './infoComponent'
import FooterSection from './footerSection'

const ContactSection = () => (
  <div id="contacts" className="flex flex-col items-center justify-start bg-background w-full h-screen">
    <TitleComponent 
      title='CONTACTS' 
      paragraph='Some ways for you to contact us'
      link='/'
      action='View more'
    />
    <section className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center lg:justify-around w-9/12 h-screen">
        <InfoComponent />
        <FormComponent />
    </section>
    <FooterSection />
  </div>
  );
export default ContactSection;
  

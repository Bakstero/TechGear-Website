import React from 'react';
import Member from './membersComponent'
import TitleComponent from '../titleComponent'
import ElectrosLogo from '../../assets/images/members/ElectrosLogo.svg'
import TeraTechLabLogo from '../../assets/images/members/TeraTechLabLogo.svg'
import TCPredatorGamingLogo from '../../assets/images/members/TCPredatorGamingLogo.svg'
import SpacePlayLogo from '../../assets/images/members/SpacePlayLogo.svg'

const MembersSection = () => (
  <div id="members" className="flex flex-col items-center justify-start bg-background w-full  h-auto xl:h-screen">
      <TitleComponent 
        title='MEMBERS' 
        paragraph='We proudly introduce our powerful members'
        link='/'
        action='View more' 
      />
      <div className="flex flex-col xl:flex-row items-center justify-center mt-10 xl:mt-32">
        <Member 
          image={<ElectrosLogo />}
          title='Electros Softwares' 
        />
        <Member 
          image={<TeraTechLabLogo />}
          title='Tera Tech Lab' 
        />
        <Member 
          image={<TCPredatorGamingLogo />}
          title='TC Predator Gaming' 
        />
        <Member 
          image={<SpacePlayLogo />}
          title='Space Play' 
        />
      </div>
  </div>
);

export default MembersSection;

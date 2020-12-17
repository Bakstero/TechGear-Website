import React from 'react';
import { Link } from "gatsby"
import BigLogo from '../../assets/images/social/BigLogo.svg' 
import PhoneImg from '../../assets/images/social/PhoneImg.svg' 
import EmailImg from '../../assets/images/social/EmailImg.svg' 

import FBLogo from '../../assets/images/social/FBLogo.svg' 
import InstaLogo from '../../assets/images/social/InstaLogo.svg' 
import TwitterLogo from '../../assets/images/social/TwitterLogo.svg' 
import AiLogo from '../../assets/images/social/AiLogo.svg' 
import GitLogo from '../../assets/images/social/GitLogo.svg' 

const InfoComponent = () => (
    <div className="flex flex-col bg-background items-center lg:items-start h-auto mt-12 w-full">
        <Link to="/"><BigLogo /></Link>
        <h3 className='text-white text-lg font-black mt-12'>Direct Channels</h3>
        <div className='mt-2 flex items-center'>
            <PhoneImg />
            <h3 className='text-white text-lg ml-5'>+509 1234 5678</h3>
        </div>
        <div className='mt-2 flex items-center'>
            <EmailImg />
            <h3 className='text-white text-lg ml-5'>support@techgear.io</h3>
        </div>
        <h3 className='text-white text-lg font-bold mt-8'>Social Media</h3>
        <div className='flex items-center mt-4'>
            <Link to='/' className="ml-4"><FBLogo /></Link>
            <Link to='/' className="ml-4"><InstaLogo /></Link>
            <Link to='/' className="ml-4"><TwitterLogo /></Link>
            <Link to='/' className="ml-4"><AiLogo /></Link>
            <Link to='/' className="ml-4"><GitLogo /></Link>
        </div>
    </div>
  );
export default InfoComponent;

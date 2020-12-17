import React, { useState } from 'react';
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Logo from '../../assets/images/logo/Logo.svg' 

const Header = () => {
const [ open, setOpen ] = useState(false)

const OpenMenu = () => (
    open === true ? setOpen(false) : setOpen(true)
)

return (
    <div className="flex items-center justify-around bg-background h-24 top-0 left-0 w-full absolute ">
        <AnchorLink to="/"><Logo /></AnchorLink>
        <nav className="hidden lg:flex items-center justify-evenly h-full w-3/5 xl:w-2/5">
            <AnchorLink to="/" className="text-primary tracking-wider hover:text-primary">HOME</AnchorLink>
            <AnchorLink to="/#products" className="text-mainText text-opacity-75 tracking-wider hover:text-primary">PRODUCTS</AnchorLink>
            <AnchorLink to="/#services" className="text-mainText text-opacity-75 tracking-wider hover:text-primary">SERVICES</AnchorLink>
            <AnchorLink to="/#members" className="text-mainText text-opacity-75 tracking-wider hover:text-primary">MEMBERS</AnchorLink>
            <AnchorLink to="/#contacts" className="text-mainText text-opacity-75 tracking-wider hover:text-primary">CONTACTS</AnchorLink>
            <button className="border rounded-sm border-white w-32 h-10 text-mainText text-opacity-50  hover:text-primary">SIGN IN</button>
        </nav>
        <button className="absolute lg:hidden right-0 mr-10" onClick={() => OpenMenu()}>
        <svg 
            className="block h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke="white" 
            aria-hidden="true"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>  
        {open === true ? ( 
        <div className="flex flex-col items-center justify-around bg-background top-0 left-0 w-full h-screen fixed z-50">
            <div className="flex items-center justify-around bg-background h-24 top-0 left-0 w-full absolute">
                <Link to="/"><Logo /></Link>
                <button className="absolute right-0 mr-10" onClick={() => OpenMenu()}>
                    <svg 
                        className="block h-6 w-6" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke="white" 
                        aria-hidden="true"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>  
            </div>
            <nav className="flex flex-col items-center justify-evenly h-auto w-3/5">
                <Link to="/" className="text-primary tracking-wider hover:text-primary mt-10">HOME</Link>
                <Link to="/" className="text-mainText text-opacity-75 tracking-wider hover:text-primary mt-10">PRODUCTS</Link>
                <Link to="/" className="text-mainText text-opacity-75 tracking-wider hover:text-primary mt-10">SERVICES</Link>
                <Link to="/" className="text-mainText text-opacity-75 tracking-wider hover:text-primary mt-10">MEMBERS</Link>
                <Link to="/" className="text-mainText text-opacity-75 tracking-wider hover:text-primary mt-10">CONTACTS</Link>
                <button className="border rounded-sm border-white w-32 h-10 text-mainText text-opacity-50  hover:text-primary mt-10">SIGN IN</button>
            </nav>
        </div> 
        ) : (null)
        }
    </div>
  );
}
export default Header;

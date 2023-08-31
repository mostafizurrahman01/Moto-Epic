"use client"
import { useContext, useEffect, useState} from "react";

//next image
import Image from 'next/image';

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons
import {BiMenuAltRight, BiX} from 'react-icons/bi'

export default function Header() {
  const [header,setHeader] = useState(false);
  const [nav,setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 40){
        setHeader(true)
      }else{
        setHeader(false)
      }
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);

    //remove event listener
    return() => {
      window.removeEventListener('scroll',handleScroll);
    };


  });

 
  return(
    <header 
      className={`${
        header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center
      xl:justify-between'>
        <div className='flex justify-between items-center px-4'>
          {/*logo */}
          <Link
            to='home'
            smooth={desktopMode}
            spy={true}
            className='cursor-pointer'
          >
            <Image src={'/icons/Logo.svg'} width={394} height={640} alt=''></Image>
          </Link>
          {/* nav open menu */}
          <div  className='cursor-pointer xl:hidden'>
            { nav ? (
              <BiX className='text-4xl' />
            ) : (
              <BiMenuAltRight className='text-4xl' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

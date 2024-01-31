import React from 'react'
import Button from './Button';
import { MdArrowOutward } from 'react-icons/md';
import Link from './Link';

export const Header = () => {
    const navLinks = [
    "explore",
    "services",
    "individuals",
    "business",
    "blog",
    "FAQs",
  ];
  return (
    <div className="max-w-7xl mx-auto relative">
        <header className="w-full p-4 flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <img src="/leaflogo.svg" />
            <h1 className="uppercase font-bold font-poppins hidden lg:block">harvestgrove</h1>
          </div>
                  <nav className="gap-5 hidden lg:flex  ">
                      
          {navLinks.map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}
            
          </nav>
              </div>
              <Button icon={<MdArrowOutward />}>contact us</Button>          

      </header>
      <div className="relative lg:p-2 p-1">
        <img src="/grovepic.png" alt="" className="hidden lg:block"/>
        <img src="/mobilefarm.png" alt="" className="lg:hidden"/>

        <div className="absolute lg:left-[25%] top-0">
        <h2 className="relative lg:leading-[5rem] text-3xl p-4 lg:text-6xl capitalize">nurturing nature, <br/> harvesting excelence</h2>
        <p className="relative text-xs lg:text-base lg:left-[22%] left-[5%] lg:max-w-[60%] max-w-[90%] p-2">At HarvestGrove, we are passionate about agriculture and committed to providing the highest quality produce and services to our customers. With a legacy of farming excellence spanning 10 years, </p>
        <img src="/customers.jpg" alt="" className="relative lg:left-[45%] left-[35%] lg:pt-12 pt-10 max-w-[25%]"/>
        </div>
        <img src="/grovecard.jpg" alt="" className="absolute lg:rounded-2xl rounded-xl max-w-[50%] lg:top-[30%] top-[45%] left-[5%]" />
        </div>
        </div>
  )
}

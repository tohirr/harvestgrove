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
    <div className="max-w-7xl mx-auto relative min-h-[80vh]">
        <header className="w-full lg:p-4 py-2 flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <img src="/leaflogo.svg" />
            <h1 className="uppercase font-bold font-poppins hidden lg:block">harvestgrove</h1>
          </div>
            <nav className="gap-5 hidden lg:flex">                     
          {navLinks.map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}          
          </nav>
        </div>
        <Button icon={<MdArrowOutward />}>contact us</Button>          
      </header>
      <div className="relative ">
        <img src="/grovepic.png" alt="" className="hidden lg:block"/>
        <img src="/mobilefarm.png" alt="" className="lg:hidden rounded-b-3xl"/>
        <div className="absolute lg:left-[25%] top-0">
        <h2 className="relative lg:leading-[5rem] text-2xl md:p-4 p-2 lg:text-6xl capitalize">nurturing nature, <br/> harvesting excelence</h2>
        <p className="relative text-xs lg:text-base lg:left-[22%] left-[3%] lg:max-w-[60%] max-w-[95%] p-2">At HarvestGrove, we are passionate about agriculture and committed to providing the highest quality produce and services to our customers. With a legacy of farming excellence spanning 10 years, </p>
        <img src="/customers.jpg" alt="" className="relative lg:left-[45%] left-[35%] lg:pt-10 pt-4 w-[35%] lg:w-[25%]"/>
        </div>
        <img src="/grovecard.jpg" alt="" className="absolute lg:rounded-2xl rounded-xl max-w-[50%] lg:top-[30%] top-[40%] left-[5%]" />
        <img src="/tag1.png" alt="" className="absolute lg:top-[65%] top-[75%] w-[6rem] right-[20vw]" />
        <img src="/tag2.png" alt="" className="absolute lg:top-[75%] top-[85%] right-[50vw] w-[7rem]" />
        </div>
        </div>
  )
}

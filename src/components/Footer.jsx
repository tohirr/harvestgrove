
import { MdArrowOutward } from "react-icons/md";
import Button from "./Button";
import Link from "./Link";

const Footer = () => {
    return (
    <div className=" relative max-w-7xl mx-auto font-dm  md:py-3">
    <div className="flex flex-col lg:gap-4 gap-2 lg:grid-cols-12 lg:grid ">
      <div className="bg-black lg:col-span-4 text-white rounded-3xl flex flex-col justify-between gap-5 p-6 lg:p-8 ">
        <p className="text-3xl font-bold">Crafting Agriculture, For Farmers, By Innovators.
        </p>
        <p className="">
          Join our community of 2000+ passionate cultivators, innovators,
          stewards of excellence, where dedication to innovation, creativity
          and sustainable farming practices flourishes.
        </p>
        <Button icon={<MdArrowOutward/>}>shop now</Button>      
      </div>
      <div className="lg:col-span-8 bg-[#d9d9d9]  rounded-3xl lg:p-8 p-6 pb-2">
        <div className="flex flex-col-reverse lg:flex-row  lg:gap-20 gap-5">
        <div className="flex  lg:gap-20 justify-between gap-2">
        <div className="flex flex-col gap-4">
        <p className="md:text-lg text-xs capitalize">links</p>
          <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
            {["explore","services","individuals","businesses","blogs"].map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}        
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="md:text-lg text-xs capitalize">communities</p>
          <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
          {["twitter","facebook","instagram","whatsapp"].map((link, index)=> 
            <Link key={index} href="/" variant="">{link}</Link>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
        <p className="md:text-lg text-xs capitalize">support</p>
        <div className="flex flex-col gap-2 text-[#0e0e0e]/80">
          {["FAQs","contact","help center"].map((link, index)=> 
            <Link key={index} href="/" variant="underline">{link}</Link>)}
          </div>    
        </div></div>
        <div className="flex flex-1 lg:justify-end  gap-2 h-max items-center">
        <div className="flex items-center gap-2">
            <img src="/leaflogo.svg" />
            <h1 className=" font-bold font-poppins ">harvestgrove</h1>
          </div>      
        </div>
        </div>
        <div className="flex justify-between py-6 col-span-7 text-xs items-center ">
      <p>&copy;2024 uipanda</p>
      <div className="flex items-center gap-2">
        <a href="/">privacy policy</a>
        <div className="w-2 h-2 rounded-full bg-[#0e0e0e]"></div>
        <a href="/">terms of use</a>
      </div>
    </div>
       
      </div>
    </div>
  
  </div>)
}

export default Footer

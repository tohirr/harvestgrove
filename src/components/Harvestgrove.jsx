import { MdArrowOutward } from "react-icons/md";
import Button from "./Button";
import Footer from "./Footer";
import { Header } from "./Header";

const HarvestGrove = () => {
  

  return (
    <div className=" min-h-screen overflow-hidden font-poppins px-1 relative">
       <Header/>
      <div className="mx-auto text-center max-w-7xl my-6 lg:p-20 p-1">
        <p className="uppercase lg:text-4xl text-2xl font-medium lg:leading-[3.8rem]">
          Our journey began 2013,
          <img
            className="inline-block lg:h-[3.2rem] h-[2rem] align-middle lg:w-[200px] w-[90px] rounded-full mx-1 object-cover"
            src="/flatimg.png"
            alt=""
          />
          when a group of dedicated farmers set out to create a farm .
          <img
            className="inline-block lg:h-[3.2rem] h-[2rem] align-middle lg:w-[150px] w-[90px] rounded-full mx-1 object-cover"
            src="/flatimg2.png"
            alt=""
          />{" "}
          that would not only yield bountiful harvests but also nourish the
          community.
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row relative  max-w-7xl mx-auto my-10">
        <div className="bg-[#0EA91E] bg-opacity-10 rounded-3xl h-full w-full lg:w-[60%] absolute"></div>
        <div className=" flex  flex-col lg:flex-row items-end z-10 lg:w-[60%]">
          <img src="sectimg1.png" alt="" className="lg:h-[450px] inline" />
        </div>
        <div className="lg:absolute right-0 lg:p-10 py-8 p-2 lg:w-[60%] z-10 flex flex-col gap-8 items-end">
          <p className="lg:text-2xl text-xl font-medium lg:leading-10">
            Our diverse range of crops, from succulent fruits to crisp
            vegetables, showcases the fertile abundance of our land. Every
            product is carefully nurtured, handpicked, and delivered to you at
            its peak freshness.
          </p>
          <p className="text-sm lg:w-[65%] w-[90%] leading-[1.7rem]">
            We take pride in our eco-friendly farming practices that prioritize
            soil health and environmental sustainability. From organic
            fertilizers to water-saving techniques, we&#39;re dedicated to
            nurturing the land that feeds us.
          </p>
        </div>               
 <div className="flex lg:absolute left-[35%] bottom-[1rem] align-end p-8">
          <Button icon={<MdArrowOutward />}>contact us</Button>          
          </div>
      </div>
      <div className="  relative max-w-7xl mx-auto p-1 py-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="lg:text-[2.5rem] lg:leading-[3.2rem] text-3xl font-semibold">
            We Provide <br /> Fresh Agro Product
          </p>
          <div className="flex text-sm flex-col leading-[1.7rem] gap-3 lg:w-[30%] w-[95%]">
            <p>
              Over the years, our commitment to sustainable farming methods and
              innovation has allowed us to grow into the trusted agricultural
              hub we are today.
            </p>
              <Button icon={<MdArrowOutward />}>shop now</Button>          
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row justify-between py-6">
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 lg:w-[32%] flex flex-col gap-2">
            <img src="/slide1.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">premium produce</p>
            <p className="text-sm leading-[1.2rem] px-2">
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land.
            </p>
          </div>
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 lg:w-[32%] flex flex-col gap-2">
            <img src="/slide2.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">sustainable farming</p>
            <p className="text-sm leading-[1.2rem] px-2">
              We take pride in our eco-friendly farming practices that
              prioritize soil health and environmental sustainability.
            </p>
          </div>{" "}
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 lg:w-[32%] flex flex-col gap-2">
            <img src="/slide3.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">
              farm-to-table experience
            </p>
            <p className="text-sm leading-[1.2rem] px-2">
              We offer a unique farm-to-table experience. Visit our farm, pick
              your own produce, & enjoy the farm-fresh taste that&#39;s second
              to none.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative max-w-7xl mx-auto py-3 p-1">
        <div className="flex flex-col gap-3 lg:flex-row justify-between lg:items-center">
          <p className="lg:text-[2.5rem] lg:leading-[3.2rem] text-3xl font-semibold capitalize  ">
            cultivating a future <br />{" "}
            <img src="leaflogo.svg" className="p-2 rounded-full w-12 mr-2 border inline align-middle "/>
            of agriculture <br /> sustainability
          </p>
          <div className="flex text-sm lg:text-right flex-col leading-[1.7rem] gap-3 lg:w-[35%]">
            <p>
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land. Every
              product is carefully nurtured, handpicked, and delivered to you at
              its peak freshness.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between py-3 gap-5">
          <div className="lg:w-[40%] relative">
            <div className="lg:h-[70%] h-[220px] rounded-3xl text-xs flex bg-[#0EA91E] bg-opacity-10 p-5 relative">
              <p className="lg:text-3xl text-2xl font-semibold lg:leading-[3.5rem] text-[#0EA91E] capitalize ">
                healthy <br />{" "}
                <button className="h-12 rounded-full px-3 border border-black text-sm inline-block align-middle mx-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                agro <br /> products
              </p>
              <div className=" flex-col flex items-end gap-3 flex-1">
                <span className="border border-[#0EA91E]  rounded-full lg:p-4 p-2 px-6">
                  swift delivery
                </span>
                <span className="border border-[#0EA91E]  rounded-full lg:p-4 p-2 px-12">
                  swift delivery
                </span>{" "}
                <span className="border border-[#0EA91E]  rounded-full lg:p-4 p-2 lg:px-14 px-6">
                  24/7 customer service
                </span>
              </div>
            </div>
            <div className="w-[38%] text-xs py-2 flex-col flex  gap-2 h-[30%]  relative">
              <div className="absolute -top-12 right-0 z-10  w-6 h-12 bg-transparent rounded-br-3xl shadow-[0rem_2rem_0px_0px_white]"></div>

              <div className="border border-[#0EA91E] relative z-10  rounded-full lg:p-4 p-2 flex justify-center">
                swift
              </div>
              <div className="border border-[#0EA91E]  rounded-full lg:p-4 p-2  flex justify-center">
                delivery
              </div>
            </div>
            <div className="pt-3 pl-3 absolute bottom-0 w-[62%]  right-0  bg-white  rounded-tl-3xl">
              <div className="absolute -top-12 right-0 z-10  w-6 h-12 bg-transparent rounded-br-3xl shadow-[0rem_2rem_0px_0px_white]"></div>
              <img
                className="rounded-2xl relative z-10"
                src="/farmer.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex-1 relative ">
            <div className="absolute lg:right-4 right-4">
              <div className="flex items-left justify-center flex-col text-left  lg:py-1 ">
                <Button icon={<MdArrowOutward />}>shop now</Button>          
              </div>
            </div>
            <img src="/farm.png" alt="" className="hidden lg:flex" />
            <img src="/farmsm.png" alt="" className="lg:hidden" />

          </div>
        </div>
      </div>
      <div className=" flex relative max-w-7xl mx-auto py-5 p-1">
        <img src="/orangebg.png" alt="" className="hidden lg:flex" />
        <img src="/orandesm.png" alt="" className="lg:hidden" />

        <div className="absolute lg:text-[2.1rem] text-2xl lg:leading-[3.2rem] py-1 capitalize font-semibold">
            cultivating sustainability<br/>
          agriculture
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HarvestGrove;
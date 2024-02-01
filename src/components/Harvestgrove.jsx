import { MdArrowOutward } from "react-icons/md";
import Button from "./Button";
import Footer from "./Footer";
import { Header } from "./Header";

const HarvestGrove = () => {
  

  return (
    <div className=" min-h-screen overflow-hidden font-poppins relative">
       <Header/>
      <div className="w-[85%] mx-auto text-center p-20">
        <p className="uppercase text-4xl font-medium leading-[3.8rem]">
          Our journey began 2013,
          <img
            className="inline-block h-[3.2rem] align-middle w-[200px] rounded-full mx-1 object-cover"
            src="/flatimg.png"
            alt=""
          />
          when a group of dedicated farmers set out to create a farm .
          <img
            className="inline-block h-[3.2rem] align-middle w-[150px] rounded-full mx-1 object-cover"
            src="/flatimg2.png"
            alt=""
          />{" "}
          that would not only yield bountiful harvests but also nourish the
          community.
        </p>
      </div>
      <div className="w-[95vw] flex relative max-w-[1200px] mx-auto py-10">
        <div className="bg-[#0EA91E] bg-opacity-10 flex  items-end rounded-3xl w-[60%]">
          <img src="sectimg1.png" alt="" className="h-[450px]" />
          <div className="flex p-8">
            <button className="h-12 rounded-full px-7 border border-black text-sm">
              Contact us
            </button>
            <button className="h-12 rounded-full px-3 border border-black text-sm">
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
          </div>
        </div>
        <div className="absolute right-0 p-10 w-[60%] flex flex-col gap-8 items-end">
          <p className="text-2xl font-medium leading-10">
            Our diverse range of crops, from succulent fruits to crisp
            vegetables, showcases the fertile abundance of our land. Every
            product is carefully nurtured, handpicked, and delivered to you at
            its peak freshness.
          </p>
          <p className="text-sm w-[65%] leading-[1.7rem]">
            We take pride in our eco-friendly farming practices that prioritize
            soil health and environmental sustainability. From organic
            fertilizers to water-saving techniques, we&#39;re dedicated to
            nurturing the land that feeds us.
          </p>
        </div>
      </div>
      <div className="w-[95vw]  relative max-w-[1200px] mx-auto py-10 ">
        <div className="flex justify-between">
          <p className="text-5xl font-bold leading-[3.5rem]">
            We Provide <br /> Fresh Agro Product
          </p>
          <div className="flex text-sm flex-col leading-[1.7rem] gap-3 w-[30%]">
            <p>
              Over the years, our commitment to sustainable farming methods and
              innovation has allowed us to grow into the trusted agricultural
              hub we are today.
            </p>
            <div className="flex">
              <button className="h-12 rounded-full px-7 border border-black text-sm">
                Shop now
              </button>
              <button className="h-12 rounded-full px-3 border border-black text-sm">
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
            </div>
          </div>
        </div>
        <div className="flex justify-between py-10">
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 w-[32%] flex flex-col gap-2">
            <img src="/slide1.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">premium produce</p>
            <p className="text-sm leading-[1.2rem] px-2">
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land.
            </p>
          </div>
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 w-[32%] flex flex-col gap-2">
            <img src="/slide2.png" alt="" className="pb-3" />
            <p className="font-semibold capitalize px-2">sustainable farming</p>
            <p className="text-sm leading-[1.2rem] px-2">
              We take pride in our eco-friendly farming practices that
              prioritize soil health and environmental sustainability.
            </p>
          </div>{" "}
          <div className="p-3 rounded-3xl bg-[#0EA91E] bg-opacity-10 w-[32%] flex flex-col gap-2">
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
      <div className="w-[95vw]  relative max-w-[1200px] mx-auto py-10 ">
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold leading-[3.5rem] capitalize  ">
            cultivating a future <br />{" "}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block align-middle mx-2"
            >
              <rect
                x="0.75"
                y="0.75"
                width="62.5"
                height="62.5"
                rx="31.25"
                stroke="#090909"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <path
                d="M39.5623 38.4302C39.5264 40.6129 48.9053 40.5211 48.9053 40.5211C48.9053 40.5211 48.9752 43.2965 45.1878 47.7157C40.3062 53.4137 29.755 55.5218 26.246 49.0455C25.7924 48.2365 25.5276 47.3364 25.4714 46.4119C25.4151 45.4874 25.5689 44.5622 25.9212 43.7049C26.3302 44.5851 26.8737 45.397 27.5325 46.1118C28.6765 47.3418 30.0662 48.3208 31.6126 48.9861C30.3552 48.0922 29.1987 47.066 28.163 45.9252C27.4199 45.0134 26.8496 43.975 26.4799 42.8605L27.1721 41.9362C28.8048 43.652 30.6169 45.1897 32.5777 46.5232C33.7455 47.4177 35.1213 48.0049 36.5779 48.2306C35.1774 47.8066 33.8757 47.11 32.7484 46.1812C30.9447 44.6184 29.3436 42.8385 27.9819 40.8825C28.6058 40.0884 29.2798 39.2623 29.9876 38.3875C31.0838 39.1604 32.2709 39.7974 33.5224 40.2843C35.1037 40.8604 36.7776 41.1439 38.4614 41.1207C36.8597 40.7126 35.2855 40.2042 33.7483 39.5985C32.6044 39.1277 31.5874 38.3969 30.7787 37.4648C32.0931 35.8449 33.49 34.2263 34.9035 32.608C35.826 33.1586 36.8266 33.568 37.8717 33.8223C38.8486 34.0922 39.8846 34.0635 40.8447 33.74C39.868 33.6543 38.9061 33.4454 37.9823 33.1183C37.1257 32.8143 36.3573 32.3056 35.7449 31.6369C37.6465 29.452 46.678 19.3736 46.678 19.3736L38.2804 28.0507C37.6229 26.4562 37.1356 24.7976 36.8265 23.102C36.6693 21.8879 36.7231 20.6561 36.9855 19.4603C36.9855 19.4603 36.7491 20.7861 36.6179 22.7374C36.6764 24.763 37.0042 26.7721 37.5926 28.7124L32.4367 34.0284C31.541 32.6014 30.7596 31.1065 30.0999 29.5576C29.2093 27.1916 28.4879 24.7661 27.9411 22.2991C28.0746 24.6237 28.4913 26.9236 29.1821 29.1485C29.8473 31.1077 30.6718 33.0099 31.6475 34.8361L28.0703 38.5201C26.4468 36.8818 24.9577 35.1171 23.6171 33.2429C22.4758 31.0205 21.4769 28.7287 20.6263 26.3811C20.9637 28.9047 21.7808 31.3415 23.034 33.5616C24.642 36.1654 26.4025 38.5419 27.1295 39.506L25.9539 40.7178C24.0715 39.9659 22.3263 38.9112 20.7883 37.5958C18.9093 35.7129 17.2078 33.6628 15.7052 31.4711C16.9154 33.8728 18.4385 36.1056 20.235 38.112C21.671 39.4098 23.2536 40.5376 24.9509 41.4728C24.7386 41.6663 24.5211 41.8433 24.2983 42.0038C23.1521 42.1926 21.9773 42.1114 20.8682 41.7668C19.7954 41.3071 18.8159 40.6568 17.9776 39.8478C18.6558 40.9184 19.6349 41.7679 20.7936 42.2908C21.4642 42.6018 22.1792 42.8074 22.9132 42.9003C15.5505 46.883 9.48187 37.4425 11.8473 29.1422C13.7214 22.6067 21.0847 16.5884 21.0847 16.5884C20.828 18.7832 20.9477 21.0054 21.4387 23.1605C22.2483 26.1287 24.4066 31.4173 27.069 31.1493C29.7314 30.8812 22.1035 21.891 23.1497 16.5074C24.0335 11.9584 33.4538 11.3583 33.4538 11.3583C32.7458 11.6737 32.1163 12.1403 31.6102 12.7249C31.1041 13.3096 30.7337 13.9979 30.5255 14.7411C29.5761 17.2535 31.4654 25.8373 33.5218 26.2815C36.1886 26.7522 30.7198 16.9768 35.5205 13.1817C38.2638 11.0107 41.8665 13.7951 44.7065 14.7775C46.579 15.3616 48.5671 15.4789 50.4957 15.1191C50.4957 15.1191 50.6194 16.6314 50.7777 20.0485C50.9361 23.4656 53.0109 25.798 51.3093 27.8712C49.6077 29.9444 43.3374 28.7413 43.9184 30.5566C44.4994 32.372 51.5093 29.7623 51.5093 29.7623C51.5093 29.7623 51.4823 31.4035 51.2551 35.1754C51.0279 38.9473 39.6132 36.3462 39.5623 38.4302Z"
                fill="#0EA91E"
              />
            </svg>{" "}
            of agriculture <br /> sustainability
          </p>
          <div className="flex text-sm text-right flex-col leading-[1.7rem] gap-3 w-[35%]">
            <p>
              Our diverse range of crops, from succulent fruits to crisp
              vegetables, showcases the fertile abundance of our land. Every
              product is carefully nurtured, handpicked, and delivered to you at
              its peak freshness.
            </p>
          </div>
        </div>
        <div className="flex justify-between py-10 gap-5">
          <div className="w-[40%] relative">
            <div className="h-[70%] rounded-3xl text-xs flex bg-[#0EA91E] bg-opacity-10 p-5 relative">
              <p className="text-3xl font-bold leading-[3.5rem] text-[#0EA91E] capitalize ">
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
                <span className="border border-[#0EA91E]  rounded-full p-4 px-6">
                  swift delivery
                </span>
                <span className="border border-[#0EA91E]  rounded-full p-4 px-12">
                  swift delivery
                </span>{" "}
                <span className="border border-[#0EA91E]  rounded-full p-4 px-14">
                  24/7 customer service
                </span>
              </div>
            </div>
            <div className="w-[38%] text-xs py-2 flex-col flex  gap-2 h-[30%]  relative">
              <div className="absolute -top-12 right-0 z-10  w-6 h-12 bg-transparent rounded-br-3xl shadow-[0rem_2rem_0px_0px_white]"></div>

              <div className="border border-[#0EA91E] relative z-10  rounded-full p-4 flex justify-center">
                swift
              </div>
              <div className="border border-[#0EA91E]  rounded-full p-4 flex justify-center">
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
            <div className="absolute right-4">
              <div className="flex items-left justify-center flex-col text-left  py-1 ">
                              <Button icon={<MdArrowOutward />}>shop now</Button>          

              </div>
            </div>
            <img src="/farm.png" alt="" className="rounded-3xl " />
          </div>
        </div>
      </div>
      <div className="px-2 flex relative max-w-7xl mx-auto py-5 ">
        <img src="/orangebg.png" alt="" className="rounded-3xl" />
        <div className="absolute text-[1.7rem] capitalize font-bold">
          <div className="  flex items-left justify-center flex-col text-left  p-2 pr-6   rounded-br-3xl">
            <p className="z-20 relative">cultivating agricultural</p>
          </div>
          <div className=" w-max relative p-2 pr-6  rounded-br-3xl ">
            <p className="z-20 relative">sustainability</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HarvestGrove;
import React from "react";
import frame from "../icons/Frame.svg";
import vector from "../icons/Vector.svg";
import x3C from "../icons/_x3C_Layer_x3E_.svg";
import Capa_1 from "../icons/Capa_1.svg";

function Section3() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black">
            Discover <span className="text-orange-500">Our Services</span> to
            Suit Your Every Need. We're Your Partners in Success!
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:mx-auto">
            <div className="flex flex-col space-y-8 mt-[103px]">
              <div className="w-[360px] max-sm:w-[300px] lg:w-[450px] max-sm:h-[350px]  h-[265px] bg-[#000000] text-white rounded-lg">
                <div className="mt-[32px] mb-[32px] ml-[28px] mr-[66px]">
                  <img src={frame} alt="E-commerce" className="mb-[28px]" />
                  <h2 className="text-xl font-bold">
                    Website Design & Development
                  </h2>
                  <p>
                    Crafting digital experiences that captivate and inspire
                    through expert website design and development.
                  </p>
                </div>
              </div>
              <div className="w-[350px] max-sm:w-[300px] lg:w-[450px] h-[265px] max-sm:h-[350px] bg-[#FF7E00] text-white rounded-lg">
                <div className="mt-[32px] mb-[32px] ml-[28px] mr-[66px]">
                  <img src={x3C} alt="E-commerce" className="mb-[28px]" />
                  <h2 className="text-xl font-bold">E-commerce (App + Web)</h2>
                  <p>
                    Driving growth with integrated e-commerce solutions across
                    apps and web.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 mt-[42px]">
              <div className="w-[360px] max-sm:w-[300px] lg:w-[450px] h-[265px] max-sm:h-[350px] bg-[#FF7E00] text-white rounded-lg">
                <div className="mt-[32px] mb-[32px] ml-[28px] mr-[66px]">
                  <img src={vector} alt="E-commerce" className="mb-[28px]" />
                  <h2 className="text-xl font-bold">Mobile App Development</h2>
                  <p>
                    Empowering ideas with seamless mobile app development
                    solutions.
                  </p>
                </div>
              </div>
              <div className="w-[360px] max-sm:w-[300px] lg:w-[450px] max-sm:h-[350px] h-[265px] bg-gray-300 text-white rounded-lg">
                <div className="mt-[32px] mb-[32px] ml-[28px] mr-[66px]">
                  <img
                    src={Capa_1}
                    alt="Shopify/WordPress"
                    className="mb-[28px]"
                  />
                  <h2 className="text-xl font-bold">
                    Shopify/WordPress Development
                  </h2>
                  <p>
                    Tailoring your digital presence with specialized Shopify and
                    WordPress development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

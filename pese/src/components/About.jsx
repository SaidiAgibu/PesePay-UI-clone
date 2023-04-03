import React from "react";

const About = () => {
  return (
    <section className="w-[90vw] lg:w-[90vw] mx-auto my-20  text-[#56408b]">
      <div className="flex gap-5 mb-5">
        <img className="h-[4rem] w-[4rem] " src="/api.svg" />
        <h1 className="text-2xl tracking-wide font-bold">
          {" "}
          Developers can create custom payment experiences
        </h1>
      </div>
      <div className="">
        <p className="tracking-wide mb-10">
          With well–documented APIs that allow developers to build anything,
          from simple weekend projects to complex financial applications serving
          hundreds of thousands of customers.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row gap-5 lg:justify-between">
        <img src="/code.png" />
        <ul className=" text-[#56408b] justify-right items-right">
          <li>Make instant transfers</li>
          <li>Review all your transaction and customer data</li>
          <li>Automated payment process</li>

          <button className="bg-[#a9c216] text-white  mt-5   py-3 px-5 rounded-lg hover:bg-[#56408b]">
            View Documentation
          </button>
        </ul>
      </div>
      <div className="flex mt-10 text-center" >
        <h2 className="text-[#8492a6] font-bold text-2xl">Convenient plugin support</h2>
      </div>
      <div className="flex mt-5 flex-col gap-10 md:flex-row">
        <img className="w-[300px] h-[3.5rem]" src="/opencart.svg" />
        <img className="w-[300px] h-[3.5rem]" src="/wordpress.svg" />
      </div>
    </section>
  );
};

export default About;

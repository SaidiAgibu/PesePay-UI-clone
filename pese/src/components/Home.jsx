import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-hero-pattern w-[100%] h-auto flex-col">
        <div className="pt-[4rem] pb-[4rem] mb-2">
          <h1 className=" font-bold text-4xl mb-2 text-white ml-10 flex justify-between ">
            Robust & Secure online payments <br /> solution for Africa
          </h1>
          <p className=" text-white ml-10  justify-between">
            Pesepay helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <button className="bg-[#a9c216] text-white ml-10 mt-5  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
            Create Free Account
          </button>
        </div>
        <div className="bg-hero-pattern1">
          <img src="/banner-home-swoosh.svg" />
        </div>
      </section>

      
    </>
  );
};

export default Home;































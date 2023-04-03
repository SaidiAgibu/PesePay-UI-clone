import React from "react";

const Categories = () => {
  return (
    <section className=" w-[90vw] lg:w-[90vw] mx-auto my-20">
      <div className="flex  items-center gap-5 mb-5 ">
        <img className="h-[4rem] w-[4rem] " src="/secure-payment.svg" />
        <h1 className="text-2xl text-[#56408b] mb-2  tracking-wide font-bold">
          {" "}
          A safe and secure way to accept payments online
        </h1>
      </div>

      <p className="text-center text-[#56408b] mb-10">
        Give your customers a fast, secure and frictionless online payment
        system. Integrate Pesepay once and let your customers pay you however
        they want!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 text-[#56408b] gap-5 mb-5">
        <div className=" flex flex-col gap-2 ">
          <p>No lock in contracts</p>
          <p>Automated payment process</p>
          <p>Flat rate transaction fees</p>

        </div>
        <div className=" flex flex-col gap-2">
          <p>No set up fees</p>
          <p>Fast Setup</p>
          <p>Take real-time payments</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Trusted Security</p>
          <p>Easy E-Commerce integration</p>
          <p>Automated payment process</p>
        </div>

      </div>
      <button className="bg-[#a9c216] text-white py-3 px-5 rounded-lg  hover:bg-[#56408b]">
        Create Free Account
      </button>
    </section>
  );
};

export default Categories;

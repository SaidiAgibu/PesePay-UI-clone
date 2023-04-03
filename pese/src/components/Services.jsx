import React from "react";

const Services = () => {
  return (
    <section className=" bg-hero-pattern w-[100%]">
      <div className=" w-[90vw] lg:w-[90vw] mx-auto my-20">
        <h1 className="  text-2xl mb-2 text-white  pt-12 flex justify-between ">
          Pesepay Solutions
        </h1>
        <p className=" text-white ">
          Pesepay's combination of automated and manual fraud detection systems
          protect you from fraudulent transactions and associated chargeback
          claims.
        </p>
        <div className="flex flex-wrap gap-5 mx-[auto] text-center justify-center ">
          <button className=" flex bg-[#a9c216] w-[18rem] items-center flex-col h-[12rem] text-white  text-center justify-center  mt-5 my-4  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
            <img
              className=" flex  h-[4rem] w-[4rem] text-white "
              src="/secure-payment.svg"
            />
            Online Payments
          </button>
          <button className="flex bg-[#a9c216] items-center w-[18rem]  flex-col h-[12rem] text-white  mt-5 my-4  py-3 px-5 rounded-lg text-center justify-center flex-wrap hover:bg-[#56408b]">
            <img
              className=" flex  h-[4rem] w-[4rem] text-white "
              src="/secure-payment.svg"
            />
            Recurring Payments
          </button>
          <button className="flex text-center justify-center items-center bg-[#a9c216] w-[18rem] flex-col h-[12rem] text-white  mt-5 my-4  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
            <img
              className=" flex  h-[4rem] w-[4rem] text-white "
              src="/secure-payment.svg"
            />
            Bill Payments
          </button>
          <button className="flex text-center justify-center items-center bg-[#a9c216] w-[18rem] flex-col h-[12rem] text-white  mt-5 my-4  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
            <img
              className=" flex  h-[4rem] w-[4rem] text-white "
              src="/secure-payment.svg"
            />
            Invoicing
          </button>
        </div>
        <div className="text-white ml-10 mb-5 pb-10">
          <button className="border-white border-solid border-b-[1px]">View Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

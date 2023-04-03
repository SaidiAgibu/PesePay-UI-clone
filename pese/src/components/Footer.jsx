import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className="bg-hero-pattern w-[100%] flex-col ">
      <div className=" w-[90vw] lg:w-[90vw] mx-auto ">
        <div className="pt-10">
          <img className="w-[150px] " src="/footer.svg" />
        </div>
        <div className="text-white flex flex-col md:flex-row gap-10 mt-5">
          <ul className="gap-10 ">
            <li className="font-bold text-[20px]">Company</li>
            <li>FAQS</li>
            <li>Contact Us</li>
            <ul className="flex mt-5 gap-2.5">
              <li>
                <AiFillFacebook />
              </li>
              <li>
                <AiFillTwitterCircle />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
            </ul>
          </ul>
          <ul>
            <h3 className="font-bold text-[20px]">Solutions</h3>
            <li>Online Payments</li>
            <li>Recurring Payments</li>
            <li>Bill Payments</li>
            <li>Invoicing</li>
          </ul>
          <ul>
            <h3 className="font-bold text-[20px]">Legal</h3>
            <li>Terms & Conditions</li>
            <li>Privacy & Security Policy</li>
          </ul>
          <ul>
            <h3 className="font-bold text-[20px]">Merchants</h3>
            <li>Merchant Accounts</li>
            <li>Merchant Dashboard</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="mt-[10px] flex items-center justify-center text-white font-bold text-[15px]">
          <p>By Saidi Agibu and Charles Madhuku</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import {MenuOutlined} from '@mui/icons-material'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-[90vw] lg:w-[100vw] mx-auto pl-10 pr-10  pt-2 pb-2 bg-white  top-0 ">
      <div className="flex items-center justify-between ">
        <img className="lg:flex " src="/pesepay-logo.svg" />
        <div className="hidden lg:flex items-center flex-col text-right ">
          <ul className="flex gap-6 items-center text-right ">
            <li>Home</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Company</li>
            <li>FAQ</li>
            <li>Documentation</li>
            <li>Login</li>
            <button className="bg-[#a9c216] text-white  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
              Create Free Account
            </button>
          </ul>
        </div>
        {/*mobile view navbar */}
        <div className="lg:hidden cursor-pointer right-4">
          {
            open ? <AiOutlineClose onClick={() => setOpen(!open)} />
              : <MenuOutlined fontSize="large" className="w-[30px] " onClick={() => setOpen(!open)} />
          }
        </div>
      </div>
      {
        open && (
          <div className="flex lg:hidden items-end flex-col text-right  mt-5">
            <ul className="flex flex-col justify-end gap-6 items-end text-right ">
              <li>Home</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Company</li>
              <li>FAQ</li>
              <li>Documentation</li>
              <li>Login</li>
              <button className="bg-[#a9c216] text-white  py-3 px-5 rounded-lg flex-wrap hover:bg-[#56408b]">
                Create Free Account
              </button>
            </ul>
          </div>
        )
      }

    </nav>
  );
};

export default Navbar;

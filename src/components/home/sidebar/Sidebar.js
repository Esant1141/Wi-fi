import React from "react";
import { SiSpeedtest } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { GoKey } from "react-icons/go";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[40px] flex flex-col justify-center items-center h-[100vh] ">
      <Link to="/about">
        <div className="p-2 bg-green-600 mb-1">
          <SiSpeedtest size={25} className="text-white " />
        </div>
      </Link>
      <Link to="/career">
        <div className="p-2 bg-green-600 mb-1">
          <SlNotebook size={25} className="text-white " />
        </div>
      </Link>
      <Link to="/about">
        <div className="p-2 bg-green-600 mb-1">
          <BsFillPersonLinesFill size={25} className="text-white " />
        </div>
      </Link>
      <Link to="/about">
        <div className="p-2 bg-green-600 mb-1">
          <HiOutlineDocumentSearch size={25} className="text-white " />
        </div>
      </Link>
      <Link to="/about">
        <div className="p-2 bg-green-600 mb-1">
          <BsFillPeopleFill size={25} className="text-white " />
        </div>
      </Link>

      <Link to="/about">
        <div className="p-2 bg-green-600 mb-1">
          <AiTwotonePhone size={25} className="text-white " />
        </div>
      </Link>
      <Link to="/privacy">
        <div className="p-2 bg-green-600 mb-1">
          <GoKey size={25} className="text-white " />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

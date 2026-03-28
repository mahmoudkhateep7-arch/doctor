import { Link } from "react-router-dom";
import PagesDropDown from "./pagesDroDown";
import ServicesDrpDown from "./servicesDropDown";
import BlogDropDown from "./BlogDropDown";
import { FaPhone, FaSearch } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu"


export default function BigScreenNav() {
  return (
    <div className="hidden lg:flex flex-1   items-center gap-10">
      <Link to={'/'} className="text-xl hover:text-red-600">Home</Link>
      <PagesDropDown></PagesDropDown>
      <ServicesDrpDown></ServicesDrpDown>
      <BlogDropDown></BlogDropDown>
      <Link to={'/'} className="text-xl hover:text-red-600">Contact Us</Link>
      <FaSearch className="cursor-pointer hidden lg:flex hover:text-red-600 text-xl"  ></FaSearch>
      <div className=" gap-4 items-center hidden min-[1100px]:flex  cursor-pointer">
        <div className="p-2 bg-blue-300">
          <FaPhone className="text-2xl text-blue-700 "></FaPhone>
        </div>
        <span className="flex text-2xl font-bold">(+01) 999 888 777</span>
      </div>
      <div className=" items-center hidden min-[1100px]:flex cursor-pointer bg-blue-700 pl-5 py-2 pr-1 gap-3  ">
        <span className="text-white text-2xl">Contact us</span>
        <div className="bg-white p-px">
          <LuChevronRight className="text-2xl text-black"></LuChevronRight>
        </div>
      </div>

    </div>
  )
}
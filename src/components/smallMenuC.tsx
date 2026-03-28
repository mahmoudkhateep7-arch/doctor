import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PagesDropDownSmall from "./pagesDroDownSmall";
import ServicesDrpDownSmall from "./servicesDropDownSmall";
import BlogDropDownSmall from "./BlogDropDownsmall";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

import { motion } from 'motion/react'
export default function SmallMenuee() {
  const { menu } = useSelector((state: RootState) => { return state.slice1 })

  return (
    <>

      {menu && <motion.div

        className="flex lg:hidden bg-amber-00 justify-around flex-wrap   items-center gap-3  flex-col sm:flex-row  md:gap-10">
        <Link to={'/'} className="text-xl hover:text-red-600">Home</Link>
        <PagesDropDownSmall></PagesDropDownSmall>
        <ServicesDrpDownSmall></ServicesDrpDownSmall>
        <BlogDropDownSmall></BlogDropDownSmall>
        <Link to={'/'} className="text-xl hover:text-red-600">Contact Us</Link>
        <FaSearch className="cursor-pointer hidden lg:flex hover:text-red-600 text-xl"  ></FaSearch>



      </motion.div>}
    </>
  )
}
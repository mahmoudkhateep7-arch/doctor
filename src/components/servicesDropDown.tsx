import { motion } from 'motion/react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleservicesDropdown, type AppDispatcher, type RootState } from "../store";
import { AnimatePresence } from "motion/react";
import { LuMinus, LuPlus } from 'react-icons/lu';


export default function ServicesDrpDown() {
  const dispatch: AppDispatcher = useDispatch()
  const { servicesDropdown } = useSelector((state: RootState) => { return state.slice1 })
  return (
    <div onMouseEnter={() => { dispatch(toggleservicesDropdown(true)) }}
      onMouseLeave={() => { dispatch(toggleservicesDropdown(false)) }}
      className="relative">
      <Link to={'/'} className="text-xl flex  gap-px items-center">Services {servicesDropdown ? (
        /* 2. Use strokeWidth to control thickness (1 is very thin, 2 is default) */
        <LuMinus strokeWidth={3} className='text-sm' />
      ) : (
        <LuPlus strokeWidth={3} className='text-sm' />
      )}</Link>
      <AnimatePresence>
        {servicesDropdown &&

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 top-full bg-amber-00 flex flex-col gap-2 p-2 text-xl bg-white w-48">
            <Link to={'/'} className="text-gray-600 hover:text-black cursor-pointer">link1</Link>
            <Link to={'/'} className="text-gray-600 hover:text-black cursor-pointer">link2</Link>
            <Link to={'/'} className="text-gray-600 hover:text-black cursor-pointer">Login/Register</Link>
            <Link to={'/'} className="text-gray-600 hover:text-black cursor-pointer">link4</Link>
            <Link to={'/'} className="text-gray-600 hover:text-black cursor-pointer">link5</Link>

          </motion.div>}
      </AnimatePresence>
    </div>
  )
}
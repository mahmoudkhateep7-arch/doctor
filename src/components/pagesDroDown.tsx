import { AnimatePresence } from "motion/react";
import { motion } from 'motion/react'
import { togglePageDropDown, type AppDispatcher, type RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuMinus, LuPlus } from "react-icons/lu";
export default function PagesDropDown() {
  const dispatch: AppDispatcher = useDispatch()
  const { pagesDropDown } = useSelector((state: RootState) => { return state.slice1 })
  return (
    <div onMouseEnter={() => { dispatch(togglePageDropDown(true)) }}
      onMouseLeave={() => { dispatch(togglePageDropDown(false)) }}
      className="relative ">
      <Link to={'/'} className="text-xl  flex items-center gap-px">Pages {pagesDropDown === true ? (
        /* 2. Use strokeWidth to control thickness (1 is very thin, 2 is default) */
        <LuMinus strokeWidth={3} className='text-sm' />
      ) : (
        <LuPlus strokeWidth={3} className='text-sm' />
      )}</Link>
      <AnimatePresence>
        {pagesDropDown && <motion.div
          key={'pagesdropdown'}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          exit={{ opacity: 0 }}
          className="absolute top-full bg-amber-00 flex flex-col gap-2 p-2 text-xl bg-white w-48">
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
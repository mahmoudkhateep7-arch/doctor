import doctor from '../images/doctor.7c2bc96d67d3eba1d64a.png'
import { motion } from 'motion/react'
import img1 from '../images/2.png'
import img2 from '../images/h.png'
import img3 from '../images/lk.png'
import img4 from '../images/op.png'
import img5 from '../images/klll.png'


export default function DoctorC() {
  return (
    <>
      <div className="relative   border-b-gray-600  sm:flex-row flex flex-col sm:items-center sm:justify-center gap-1 lg:gap-20 ">
        <motion.img animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }} className='absolute lg:flex top-0 left-0 hidden' src={img2} alt="" />
        <motion.img animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }} className='absolute lg:flex bottom-0 right-0 hidden' src={img1} alt="" />

        <motion.img animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }} className='absolute lg:flex bottom-0 hidden' src={img3} alt="" />
        <motion.img animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }} className='absolute lg:flex  right-10 hidden' src={img4} alt="" />
        <motion.img animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }} className='absolute lg:flex bottom-50  hidden' src={img5} alt="" />

        <div className="flex flex-col gap-2 w-fit p-8   bg-ambjer-600  ">

          <h3 className="text-blue-700 lkl2 w-fit font-bold px-1">We Provide All Health Care Solution</h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl  lg:w-150 font-bold w-full max-w-100 min-w-20">Protect Your Health And Take Care To Of Your Health</h1>
          <div className="bg-amber-500 py-3 px-6 text-[14px] text-white rounded-xl text-xl w-fit ">Read More</div>
        </div>
        <motion.div
          className='   p-8 bg-ambker-900 '
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >

          <img className="max-w-100 min-w-10 w-full" src={doctor} alt="doctor" />
        </motion.div>
      </div>
    </>
  )
}
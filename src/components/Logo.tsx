import { Link } from 'react-router-dom';
import { motion } from 'motion/react'
import LogoImage from '../images/da313fba-ddfc-41ee-ba96-d1d505b2dd1a.png'
export default function LogoC() {

  return (
    <motion.div
      initial={{ x: '-110%' }}
      animate={{ x: 0 }}
      transition={{ duration: .7, delay: .5 }}

      className='cursor-pointer ' >
      <Link to={'/'}>
        <img className=' ' src={LogoImage} alt="logo image" />
      </Link>
    </motion.div>
  )
}
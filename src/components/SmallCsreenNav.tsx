import { FaBars, FaMagic } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, type AppDispatcher, type RootState } from '../store'
export default function SmallScreenNav() {
  const { menu } = useSelector((state: RootState) => { return state.slice1 })
  const dispatch: AppDispatcher = useDispatch()
  return (
    <div className='lg:hidden'>
      {menu === false && <FaBars className='cursor-pointer lg:hidden text-2xl' onClick={() => { dispatch(toggleMenu(true)) }}></FaBars>}
      {menu === true && <FaMagic className='cursor-pointer lg:hidden text-2xl' onClick={() => { dispatch(toggleMenu(false)) }}></FaMagic>}
    </div>
  )
}
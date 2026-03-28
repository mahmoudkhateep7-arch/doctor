import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
export default function AboutLeft() {

  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className='grid  relative grid-cols-2 w-fit bg-damber-300 gap-x-4 gap-y-2 border-4 rounded-2xl border-blue-700  p-2'>
        <img className={`w-52 border-2  border-blue-700 rounded-[50px_0_0_50px]`} src={img1} alt="" />
        <img className={`  border-2  border-blue-700 w-52  rounded-[0_50px_50px_0]`} src={img2} alt="" />
        <img className={`w-52  border-2 border-blue-700    rounded-[50px_0_0_50px]`} src={img3} alt="" />

        <div className={`lg:w-52 min-w-30    `}  >
          <div className='flex flex-col border-2  border-blue-700 h-full justify-center gap-2  bg-amber-600   rounded-[0_50px_50px_0] '>
            <span className='flex text-3xl lg:text-7xl text-white justify-center bg-kamber-400 '>20</span>
            <span className='flex justify-center sm:text-3xl text-white font-bold'>Year epirence</span>
          </div>
        </div>


      </div>
    </div>
  )
}
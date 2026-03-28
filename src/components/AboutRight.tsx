import { LuAmbulance, LuBed, LuSyringe } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";

export default function AboutRight() {
  return (
    <div className="flex-1 bg-amber500 flex flex-col gap-4   ">
      <div className="flex flex-col gap-4 p-2">
        <span className="text-xl bg-amber-800 w-fit px-4 py-1 rounded-full text-white">About Us</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl w-full lg:w-3/5 bg-ambfer-100">
          The Great Place Of Medical Hospital Center
        </h2>
        <p className="text-xl lg:w-2/3">We provide the special tips and advice's of heath care treatment and high level of best technology involve in the our hospital.</p>

      </div>

      <div className="grid grid-cols-2 lg:w-fit gap-4">
        <div className="bg-white p-2 flex gap-1 items-center justify-center ">
          <LuAmbulance className="md:h-full text-3xl  flex justify-center items-center md:p-4  flex-1 bg-amdber-300"></LuAmbulance>
          <span className="bg-amdber-300 text-2xl flex-3 h-full hidden md:flex justify-center items-center p-2">medical treatment</span>

        </div>
        <div className="bg-white p-2 flex gap-1 items-center justify-center ">
          <LuSyringe className="md:h-full text-3xl flex justify-center items-center md:p-4 w-full md:flex-1 bg-amdber-300"></LuSyringe>
          <span className="bg-amdber-300 text-2xl flex-3 h-full hidden md:flex justify-center items-center p-2">medical treatment</span>

        </div>
        <div className="bg-white p-2 flex gap-1 items-center justify-center ">
          <LuBed className="md:h-full text-3xl flex justify-center items-center md:p-4  flex-1 bg-amdber-300"></LuBed>
          <span className="bg-amdber-300 text-2xl flex-3 h-full md:flex hidden justify-center items-center p-2">medical treatment</span>

        </div>
        <div className="bg-white p-2 flex gap-1 items-center justify-center ">
          <FaDroplet className="md:h-full text-3xl flex justify-center items-center md:p-4  flex-1 bg-amdber-300"></FaDroplet>
          <span className="md:flex bg-amdber-300 text-2xl flex-3 h-full hidden justify-center items-center p-2">medical treatment</span>

        </div>
      </div>
      <div></div>

    </div>
  )
}




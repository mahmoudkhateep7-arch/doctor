import AboutUs from "./components/AboutUs";
import DoctorC from "./components/DoctorC";
import SmallMenuee from "./components/smallMenuC";
import NavbarC from "./Navbar";
export default function HomeC() {
  return (
    <div>
      <div className="lkl  bg-gray-100 ">
        <NavbarC></NavbarC>
        <p className="pt-20"></p>

        <SmallMenuee></SmallMenuee>


        <DoctorC></DoctorC>
      </div>
      {/* <p className="py-3"></p> */}
      <AboutUs></AboutUs>
      <p>heh</p>


    </div>
  )
}
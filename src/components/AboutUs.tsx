import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

export default function AboutUs() {
  return (
    <div className="bg-amxber-200 p-8 flex gap-10 justify-center items-center flex-col lg:gap-10 lg:flex-row ">
      <AboutLeft></AboutLeft>
      <AboutRight></AboutRight>
    </div>
  )
}
import { Route, Routes } from "react-router-dom";
import HomeC from "./Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Routes>
        <Route path="/" element={<HomeC></HomeC>}></Route>

      </Routes>
    </div>
  )
}
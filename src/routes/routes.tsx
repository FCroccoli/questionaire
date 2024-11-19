import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Home from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default RoutesMain;

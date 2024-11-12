import { Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Results from "../pages/Results";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default RoutesMain;

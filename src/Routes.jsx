import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Home from ".";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;

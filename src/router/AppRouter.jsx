import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Text from "../pages/Text";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ComingSoon from "../pages/ComingSoon";
import LOgin from "../pages/LOgin";
import UserName from "../component/UserName";
import Navbar from "../component/Navbar";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LOgin />}>
          <Route path="username" element={<UserName />} />
        </Route>
        <Route>
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default AppRouter;

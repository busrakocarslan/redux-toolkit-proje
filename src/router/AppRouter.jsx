import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LOgin from "../pages/LOgin";
import UserName from "../component/UserName";
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
      </Routes>
    </div>
  );
}

export default AppRouter;

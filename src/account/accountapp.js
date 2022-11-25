import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import AccountNav from "./accountnav";
import DashBoard from "./DashBoard";
import EditUsers from "./EditUsers";
import Login from "./login";
import Register from "./signup";
import Termconditons from "./termcondition";
import UserDetails from "./UserDetails";
import User from "./User";
import Course from "./Course";
import Location from "./Location";
import SoftwareCompany from "./SoftwareCompany";
import WebsitePage from "./WebsitePage";
import AdditionalWeb from "./AdditionalWeb";
import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";

const AccountApp = () => {
  return (
    <HashRouter>
      <AccountNav />

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/term-conditions" element={<Termconditons />} />
        <Route exact path="/userdetails" element={<UserDetails />} />
        <Route exact path="/edituser/:uid" element={<EditUsers />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/additional" element={<AdditionalWeb />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/edit" element={<EditProfile />} />
        <Route exact path="/viewprofile" element={<ViewProfile />} />
        <Route exact path="/software" element={<SoftwareCompany />} />
        <Route exact path="/websitepage/:id" element={<WebsitePage />} />
      </Routes>
    </HashRouter>
  );
};

export default AccountApp;

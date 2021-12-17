import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  return (
    <main className='section-center'>
      {/* <Navbar></Navbar> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;

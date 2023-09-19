// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <div className="container mx-auto">
        <h1 className="text-5xl mt-60 text-center"> This is Footer </h1>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;

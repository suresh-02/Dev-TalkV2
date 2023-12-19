// import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import "../../src/index.scss";
import logo from "../assets/logo.png";
// import { AuthContext } from "../context/authContext";

const NavBar = () => {
  // const { currentUser, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="flex justify-between px-[54px] items-center bg-[#d18bf5] mb-[30px]">
        {/* <h1>Dev-talk</h1> */}
        <img className="h-[70px] w-max-content font-bold" src={logo} />
        <div className="flex gap-4 text-white">
          <Link className="link" to="/?art">
            <h3>Art</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Science</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Technology</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Cinema</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Design</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Food</h3>
          </Link>
          <Link className="link" to="/new">
            <h3>Write</h3>
          </Link>
          <Link className="link" to="/register">
            {/* <h3>{currentUser?.username}</h3> */}
          </Link>
          <Link className="link" to="/login">
            {/* {currentUser ? (
              <h3>Logout</h3>
            ) : (
              <Link className="link" to="/login" onClick={logout} />
            )} */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

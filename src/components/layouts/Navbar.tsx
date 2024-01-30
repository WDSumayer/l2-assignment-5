import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="bg-[#02011B]">
      <Container>
        <nav className="flex justify-between items-center py-[24px]">
          <div>
            <h1 className="text-white text-[32px] font-bold">
              Event <span className="text-[#01DCF7]">360</span>
            </h1>
          </div>
          <div>
            <ul className="text-[16px] text-white font-md">
              <NavLink className="ml-[15px]" to="/">
                Home
              </NavLink>
              <NavLink className="ml-[15px]" to="/about">
                About
              </NavLink>
              <NavLink className="ml-[15px]" to="/contact">
                Contact
              </NavLink>
            </ul>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;

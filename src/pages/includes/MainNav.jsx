import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import habeshaLogo from "../../assets/images/logo/habesha-logo.svg";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="bg-neutral-900">
      <Navbar fluid className="bg-neutral-800">
        <Navbar.Brand  href="https://flowbite-react.com">
          <img
            src={habeshaLogo}
            className="mr-3 h-10 sm:h-10 ml-5"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <div className="max-w-md">
            <TextInput
              id="email4"
              type="email"
              rightIcon={HiSearch}          />
          </div>
          <div className="flex gap-2">
            <Button className="bg-green-600">Login</Button>
            <Button className="bg-yellow-300">Register</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Navbar fluid className="bg-yellow-300 p-5 text-center">
        <Navbar.Collapse className="mx-auto block">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Sport</Navbar.Link>
          <Navbar.Link href="#">Live</Navbar.Link>
          <Navbar.Link href="#">Virtual Games</Navbar.Link>
          <Navbar.Link href="#">Jackpot</Navbar.Link>
          <Navbar.Link href="#">Virtual Sport</Navbar.Link>
          <Navbar.Link href="#">Promotions</Navbar.Link>
          <Navbar.Link href="#">Deposit</Navbar.Link>
          <Navbar.Link href="#">Check Ticket</Navbar.Link>
          <Navbar.Link href="#">Rules</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default SearchBar;

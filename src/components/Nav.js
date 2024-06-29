"use client";

import { Button, Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="ewaste logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-WasteMart</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/recyclers">Recyclers</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

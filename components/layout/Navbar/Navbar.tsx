"use client";

import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <>
      <div className="flex  justify-between px-10 py-5">
        <div>logo</div>
        <NavLinks />
        <div>contacto</div>
      </div>
    </>
  );
}

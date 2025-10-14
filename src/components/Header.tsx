"use client ";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className=" border-b border-b-gray-400 py-4">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          {/* <Logo /> */}
          <Logo className="text-3xl italic text-red-400 ml-24">Shoply</Logo>
        </div>
        {/* rightbar */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-4">
          <SearchBar />
          <CartIcon />

          <div>
            <Link href="/login">
              <Button className="text-sm font-medium hover:text-darkColor-600 hoverEffect">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;

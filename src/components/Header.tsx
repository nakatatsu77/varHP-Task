import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 900) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let navbarClasses = [
    "fixed",
    "inset-x-0",
    "top-0",
    "z-50",
    "h-[60px]",
    "transition-colors",
    "md:h-[115px]",
  ];
  if (scrolled) {
    navbarClasses.push("bg-base-100");
  } else {
    navbarClasses.push("bg-transparent");
  }

  return (
    <>
      <header className={navbarClasses.join(" ")}>
        <div className="container flex h-full items-center justify-between">
          <h1 className="w-8 md:w-14">
            <span className="sr-only">株式会社var</span>
            <Link className="hover-base flex items-center" href="/">
              <Image
                src="/Images/common_logo.png"
                alt="株式会社var"
                width={288}
                height={282}
                loading="lazy"
              />
            </Link>
          </h1>
          <div className="flex items-center justify-end">
            <nav className="hidden xl:block">
              <ul className="flex gap-x-10">
                <li>
                  <Link className="hover-base font-bold" href="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="hover-base font-bold" href="/sustainability">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link className="hover-base font-bold" href="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="hover-base font-bold" href="/recruit">
                    Recruit
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              className="inline-flex sm:min-h-[48px] items-center justify-center sm:rounded-full bg-main-100 sm:py-3 sm:px-6 font-bold tracking-wider text-white transition hover:bg-main-100-hover md:min-h-[64px] md:text-xl min-h-[32px] w-[130px] rounded-full py-1 px-4 md:ml-16 lg:min-h-[56px] md:w-[233px] md:py-3 md:px-6"
              href="/contact"
            >
              <div className="flex h-4 w-4 items-center justify-center md:h-8 md:w-8">
                <Image
                  src="/Images/mail_icon.svg"
                  alt="mail-icon"
                  width={20}
                  height={20}
                />
                <p className="ml-[5px] text-sm uppercase md:ml-3 md:text-xl">
                  contact
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="relative z-10 ml-6 h-[25px] w-[26px] rounded-full transition-all hover:opacity-70 md:ml-[72px] md:h-[50px] md:w-[52px] bg-transparent"
            >
              <span className="absolute inset-0 block h-full w-full rounded-full"></span>
              <span className="absolute inset-0 m-auto block bg-white transition-all h-[2px] w-6 md:h-[3px] md:w-12">
                <span className="absolute block h-full w-full bg-white transition-all top-[-10px] md:top-[-14px]"></span>
                <span className="sr-only">メニューを開閉する</span>
                <span className="absolute block h-full w-full bg-white transition-all top-[10px] md:top-[14px]"></span>
              </span>
            </button>
            <div
              className={`fixed inset-y-0 right-0 bg-sub-100 py-[100px] px-10 transition-all md:min-w-[240px] ${
                isMenuOpen ? "visible opacity-100" : "invisible opacity-0 "
              }`}
            >
              <div className="grid gap-9">
                <Link className="text-lg font-bold" href="/">
                  Top
                </Link>
                <Link className="text-lg font-bold" href="/about">
                  About us
                </Link>
                <Link className="text-lg font-bold" href="/news">
                  News
                </Link>
                <Link className="text-lg font-bold" href="/recruit">
                  Recruit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

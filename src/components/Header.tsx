import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null); 
  const [isMenuOpen, setISMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setISMenuOpen(!isMenuOpen);
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
    // 現在の画面幅をセット
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // イベントリスナを追加
    window.addEventListener("resize", handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  if (windowWidth === null) return null;

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
            {isMenuOpen ? (
              <button
                type="button"
                onClick={toggleMenu}
                className="relative z-10 ml-6 h-[25px] w-[26px] rounded-full transition-all hover:opacity-70 md:ml-[72px] md:h-[50px] md:w-[52px] bg-sub-100 shadow-header-inset"
              >
                <span className="absolute inset-0 block h-full w-full rounded-full shadow-header-normal"></span>
                <span className="absolute inset-0 m-auto block bg-white transition-all h-[2px] w-[10px] md:w-5">
                  <span className="absolute block h-full w-full bg-white transition-all top-0"></span>
                  <span className="sr-only">メニューを開閉する</span>
                  <span className="absolute block h-full w-full bg-white transition-all top-0"></span>
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={toggleMenu}
                className="relative z-10 ml-6 h-[25px] w-[26px] rounded-full transition-all hover:opacity-70 md:ml-[72px] md:h-[50px] md:w-[52px] bg-transparent"
              >
                <span className="absolute inset-0 block h-full w-full rounded-full shadow-header-normal"></span>
                <span className="absolute inset-0 m-auto block bg-white transition-all h-[2px] w-6 md:h-[3px] md:w-12">
                  <span className="absolute block h-full w-full bg-white transition-all top-[-10px] md:top-[-14px]"></span>
                  <span className="sr-only">メニューを開閉する</span>
                  <span className="absolute block h-full w-full bg-white transition-all top-[10px] md:top-[14px]"></span>
                </span>
              </button>
            )}

            <div
              className={`fixed inset-y-0 right-0 bg-sub-100 py-[100px] px-10 transition-all md:min-w-[240px] ${
                isMenuOpen ? "visible opacity-100" : "invisible opacity-0 "
              }`}
            >
              {/* 例: 768px以下の画面幅の場合の表示 */}
              {windowWidth <= 1280 && (
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
              )}
              {/* 例: 768pxより大きい画面幅の場合の表示 */}
              {windowWidth > 1280 && (
                <div className="fixed inset-y-0 right-0 bg-sub-100 transition-all md:w-[calc(624px+((100vw-1440px)/2))] visible opacity-100">
                  <div className="max-w-[624px] px-[calc(((100vw-1280px)/2)+40px)] py-[30px] 2xl:px-[120px]">
                    <div className="w-14">
                      <Link className="hover-base flex items-center" href="/">
                        <Image
                          src="/Images/common_logo.png"
                          alt="株式会社var"
                          width={288}
                          height={282}
                          loading="lazy"
                          style={{ color: "transparent" }}
                        />
                      </Link>
                    </div>

                    <div className="mt-14 flex justify-between">
                      <div className="flex flex-col gap-14">
                        <div>
                          <p className="text-xl font-bold">Top</p>
                          <ul className="mt-4 grid gap-3">
                            <li>
                              <a className="hover-base" href="#about">
                                私たちについて
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="#business">
                                事業内容
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="#works">
                                制作実績
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="#news">
                                お知らせ
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="#recruit">
                                採用情報
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="#contact">
                                お問い合わせ
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xl font-bold">About us</p>
                          <ul className="mt-4 grid gap-3">
                            <li>
                              <a className="hover-base" href="/about#value">
                                私たちの価値
                              </a>
                            </li>
                            <li>
                              <a
                                className="hover-base"
                                href="/about#information"
                              >
                                会社情報
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid gap-14">
                        <div>
                          <p className="text-xl font-bold">Business</p>
                          <ul className="mt-4 grid gap-3">
                            <li>
                              <a
                                href="https://envader.plus/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover-base"
                              >
                                Envader(エンベーダー)
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://raretech.site/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover-base"
                              >
                                RareTECH(レアテック)
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xl font-bold">News</p>
                          <ul className="mt-4 grid gap-3">
                            <li>
                              <a className="hover-base" href="/news">
                                お知らせ
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xl font-bold">Recruit</p>
                          <ul className="mt-4 grid gap-3">
                            <li>
                              <a className="hover-base" href="/recruit#midway">
                                中途採用
                              </a>
                            </li>
                            <li>
                              <a className="hover-base" href="/recruit#member">
                                メンバー
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

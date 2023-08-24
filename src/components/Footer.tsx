import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="bg-base-100 pb-3 pt-6 md:pt-24">
        <div className="container">
          <div className="w-8 md:w-[89px]">
            <Image
              src="/Images/common_logo.png"
              alt="株式会社var"
              width={288}
              height={282}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="xl:flex xl:justify-between">
            <div className="mt-4">
              <p className="font-bold md:text-xl">株式会社var</p>
              <address className="mt-2 text-sm md:mt-3 md:text-base">
                <p>〒 891-0145</p>
                <p className="mt-1">鹿児島県鹿児島市錦江台3-21-22</p>
                <p className="mt-1">Mail : info@var.co.jp</p>
              </address>
              <a
                className="hover-base mt-16 hidden text-base xl:inline-block"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 lg:flex lg:gap-20 xl:mt-0">
              <div className="flex flex-col gap-7 lg:flex-row lg:gap-20">
                <div>
                  <a className="hover-base font-bold md:text-xl" href="">
                    Top
                  </a>
                  <ul className="mt-2 grid gap-1 text-sm md:mt-3 md:text-base">
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
                  <a className="hover-base font-bold md:text-xl" href="about">
                    About us
                  </a>
                  <ul className="mt-2 grid gap-1 text-sm md:mt-3 md:text-base">
                    <li>
                      <a className="hover-base" href="/about#value">
                        私たちの価値
                      </a>
                    </li>
                    <li>
                      <a className="hover-base" href="/about#information">
                        会社情報
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-7 lg:flex-row lg:gap-20">
                <div>
                  <a className="hover-base font-bold md:text-xl" href="index#">
                    Business
                  </a>
                  <ul className="mt-2 grid gap-1 text-sm md:mt-3 md:text-base">
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
                  <a className="hover-base font-bold md:text-xl" href="/news">
                    News
                  </a>
                  <ul className="mt-2 grid gap-1 text-sm md:mt-3 md:text-base">
                    <li>
                      <a className="hover-base" href="/news">
                        お知らせ
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    className="hover-base font-bold md:text-xl"
                    href="/recruit"
                  >
                    Recruit
                  </a>
                  <ul className="mt-2 grid gap-1 text-sm md:mt-3 md:text-base">
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
          <a
            className="hover-base mt-12 inline-block text-sm lg:mt-16 xl:hidden"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          <p className="mt-5 text-xs md:mt-[72px] md:text-center">
            <small>©copyright var Inc. All rights reserved.</small>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

export default function Works() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 3) {
        return 1;
      }
      return prevSlide + 1;
    });
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <main>
        <div className="relative">
          <div
            id="works"
            className="absolute top-[-60px] md:top-[-115px]"
          ></div>
          <div>
            <div className="bg-gradient-to-b from-base-200 to-base-400">
              <section className="py-16 md:py-24 container">
                <div style={{ opacity: 1 }}>
                  <div className="xl:flex">
                    <div className="mr-36">
                      <div>
                        <p className="inline-block bg-gradient-to-br from-main-100 to-accent-100 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent md:text-5xl">
                          works
                        </p>
                        <h2 className="mt-[2px] text-sm font-bold text-other-100 md:mt-2 md:text-xl">
                          制作実績
                        </h2>
                      </div>
                    </div>
                    <div className="-ml-3 mr-[calc(50%-50vw)] mt-[44px] xl:mt-0">
                      <Swiper
                        breakpoints={{
                          0: {
                            spaceBetween: 0,
                          },
                          768: {
                            spaceBetween: 4,
                          },
                          1280: {
                            spaceBetween: 8,
                          },
                        }}
                        slidesPerView={3}
                        loop={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        className="w-[calc(342px*3)] md:w-[calc(399px*3+8px*2)]"
                      >
                        <SwiperSlide className="swiperHeightAuto relative rounded-[32px] p-3">
                          <div className="h-full rounded-[32px] border border-white border-opacity-[0.24] shadow-root-works-wrapper">
                            <div className="h-full rounded-[32px] shadow-root-works-inner">
                              <div className="flex h-full flex-col items-stretch rounded-[32px] bg-base-200 py-8 px-6 md:p-8">
                                <div>
                                  <Image
                                    src="/Images/root_works01.jpeg"
                                    alt="works00"
                                    loading="lazy"
                                    width={622}
                                    height={340}
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="mt-3 flex h-full flex-col items-stretch md:mt-4">
                                  <div className="flex items-center">
                                    <div className="mr-4 h-4 w-4 rounded-full bg-accent-100"></div>
                                    <p className="text-lg font-bold">
                                      Webアプリケーション開発
                                    </p>
                                  </div>
                                  <div className="mt-4 flex h-full flex-col gap-5 xl:mt-2">
                                    <p className="grow">
                                      Webアプリケーションの開発を承ります。要件定義から実装までお任せ下さい。
                                    </p>
                                    <dl className="min-h-[116px] bg-sub-100 p-4 text-sm md:min-h-[96px]">
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            開発期間
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">1年</dd>
                                      </div>
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            利用技術
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">
                                          Go/Next.js/GCP/MySQL
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiperHeightAuto relative rounded-[32px] p-3">
                          <div className="h-full rounded-[32px] border border-white border-opacity-[0.24] shadow-root-works-wrapper">
                            <div className="h-full rounded-[32px] shadow-root-works-inner">
                              <div className="flex h-full flex-col items-stretch rounded-[32px] bg-base-200 py-8 px-6 md:p-8">
                                <div>
                                  <Image
                                    src="/Images/root_works02.jpeg"
                                    alt="works01"
                                    loading="lazy"
                                    width={622}
                                    height={340}
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="mt-3 flex h-full flex-col items-stretch md:mt-4">
                                  <div className="flex items-center">
                                    <div className="mr-4 h-4 w-4 rounded-full bg-accent-100"></div>
                                    <p className="text-lg font-bold">Web制作</p>
                                  </div>
                                  <div className="mt-4 flex h-full flex-col gap-5 xl:mt-2">
                                    <p className="grow fixed-height-p">
                                      Web制作を承っております。
                                    </p>
                                    <dl className="min-h-[116px] bg-sub-100 p-4 text-sm md:min-h-[96px]">
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            開発期間
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">
                                          2週間-2ヶ月
                                        </dd>
                                      </div>
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            利用技術
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">
                                          React.js/Next.js/Vue.js
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiperHeightAuto relative rounded-[32px] p-3">
                          <div className="h-full rounded-[32px] border border-white border-opacity-[0.24] shadow-root-works-wrapper">
                            <div className="h-full rounded-[32px] shadow-root-works-inner">
                              <div className="flex h-full flex-col items-stretch rounded-[32px] bg-base-200 py-8 px-6 md:p-8">
                                <div>
                                  <Image
                                    src="/Images/root_works03.jpeg"
                                    alt="works02"
                                    loading="lazy"
                                    width={622}
                                    height={340}
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="mt-3 flex h-full flex-col items-stretch md:mt-4">
                                  <div className="flex items-center">
                                    <div className="mr-4 h-4 w-4 rounded-full bg-accent-100"></div>
                                    <p className="text-lg font-bold">
                                      研修カリキュラム作成
                                    </p>
                                  </div>
                                  <div className="mt-4 flex h-full flex-col gap-5 xl:mt-2">
                                    <p className="grow">
                                      技術者研修の作成、トレーニングの実施を行います。期間、予算、内容等をお問い合わせ下さい。
                                    </p>
                                    <dl className="min-h-[116px] bg-sub-100 p-4 text-sm md:min-h-[96px]">
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            開発期間
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">2-4ヶ月</dd>
                                      </div>
                                      <div className="flex">
                                        <dt className="whitespace-nowrap">
                                          <span className="font-bold">
                                            カリキュラム
                                          </span>
                                          ：
                                        </dt>
                                        <dd className="break-all">
                                          Java/AWS/アジャイル開発/DB/インフラ/バックエンド
                                        </dd>
                                      </div>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <div className="ml-3 mt-1 md:mt-5 xl:mt-[44px]">
                          <div className="flex items-center">
                            <div className="my-custom-pagination mr-6 flex items-center text-xl font-bold md:text-2xl swiper-pagination-fraction swiper-pagination-horizontal">
                              <span className="swiper-pagination-current">
                                {currentSlide}
                              </span>
                              <span className="mx-2 md:mx-3 w-6 md:w-[34px] inline-block h-[2px] bg-white -rotate-55"></span>
                              <span className="swiper-pagination-total">3</span>
                            </div>
                            <button
                              type="button"
                              className="hover-base flex h-9 w-9 items-center justify-center rounded-full bg-accent-100"
                              onClick={nextSlide}
                            >
                              <span className="w-5">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 640 640"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M192 480L352 320L192 160L224 96L448 320L224 544L192 480Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Image from "next/image";

export function Business() {
  return (
    <>
      <main>
        <div className="relative">
          <div
            id="business"
            className="absolute top-[-60px] md:top-[-115px]"
          ></div>
          <div>
            <div className="bg-base-200">
              <section className="py-16 md:py-24 container">
                <div style={{ opacity: 1 }}>
                  <div>
                    <p className="inline-block bg-gradient-to-br from-main-100 to-accent-100 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent md:text-5xl">
                      business
                    </p>
                    <h2 className="mt-[2px] text-sm font-bold text-other-100 md:mt-2 md:text-xl">
                      事業内容
                    </h2>
                  </div>
                  <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10 lg:grid-cols-1 xl:gap-14">
                    <section className="lg:flex lg:justify-between">
                      <div className="lg:w-[400px] xl:w-[570px]">
                        <div className="overflow-hidden rounded-[32px]">
                          <Image
                            src="/Images/root_business01.png"
                            alt="SystemDevelopment"
                            width={1140}
                            height={636}
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="mt-2 md:mt-4 lg:mt-0 lg:w-[calc(100%-400px-56px)] xl:w-[calc(100%-570px-56px)]">
                        <div className="flex items-center md:block lg:flex">
                          <p className="mr-4 text-xl font-bold text-accent-100">
                            Service 0{/*  */}1
                          </p>
                          <h3 className="text-lg font-bold md:text-xl">
                            システム開発
                          </h3>
                        </div>
                        <p className="mt-4 md:mt-6">
                          <span className="block break-all md:inline">
                            要件等をヒアリングした後、当社のエンジニアがご要望に沿ったシステムを開発いたします。
                          </span>
                        </p>
                      </div>
                    </section>
                    <section className="lg:flex lg:justify-between">
                      <div className="lg:w-[400px] xl:w-[570px]">
                        <div className="overflow-hidden rounded-[32px]">
                          <Image
                            src="/Images/root_business02.png"
                            alt="SystemDevelopment"
                            width={1140}
                            height={636}
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="mt-2 md:mt-4 lg:mt-0 lg:w-[calc(100%-400px-56px)] xl:w-[calc(100%-570px-56px)]">
                        <div className="flex items-center md:block lg:flex">
                          <p className="mr-4 text-xl font-bold text-accent-100">
                            Service 0{/*  */}2
                          </p>
                          <h3 className="text-lg font-bold md:text-xl">
                            企業向け技術者研修
                          </h3>
                        </div>
                        <p className="mt-4 md:mt-6">
                          <span className="block break-all md:inline">
                            研修期間・予算・レベル等をお伺いし、貴社にあった最適な研修プランをご提案いたします。
                          </span>
                          <span className="block break-all md:inline">
                            対応言語：Java/Go/Python/Javascript等
                          </span>
                        </p>
                      </div>
                    </section>
                    <section className="lg:flex lg:justify-between">
                      <div className="lg:w-[400px] xl:w-[570px]">
                        <div className="overflow-hidden rounded-[32px]">
                          <Image
                            src="/Images/root_business03.png"
                            alt="SystemDevelopment"
                            width={1140}
                            height={636}
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="mt-2 md:mt-4 lg:mt-0 lg:w-[calc(100%-400px-56px)] xl:w-[calc(100%-570px-56px)]">
                        <div className="flex items-center md:block lg:flex">
                          <p className="mr-4 text-xl font-bold text-accent-100">
                            Service 0{/*  */}3
                          </p>
                          <h3 className="text-lg font-bold md:text-xl">
                            インフラ学習サービス
                          </h3>
                        </div>
                        <p className="mt-4 md:mt-6">
                          <span className="block break-all md:inline">
                            日本初の環境構築型のインフラ学習サービスを提供しております。Linuxの学習、データベース、サイバーセキュリティの学習が可能です。
                          </span>
                        </p>
                        <p className="mt-6 md:mt-10 md:flex md:justify-end">
                          <a
                            className="group inline-flex min-h-[40px] min-w-[180px] items-center justify-center rounded-full border border-white bg-base-100 py-2 px-4 font-bold tracking-wider text-white md:min-h-[56px] md:min-w-[256px] md:py-3 md:px-6 md:text-xl"
                            href="https://envader.plus/"
                          >
                            <span className="relative pl-[22px] transition-all group-hover:pr-[22px] group-hover:pl-0 md:pl-8 md:group-hover:pr-8">
                              <span className="absolute top-1/2 left-0 block h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all group-hover:left-full group-hover:-translate-x-full md:h-4 md:w-4"></span>
                              view more
                            </span>
                          </a>
                        </p>
                      </div>
                    </section>
                    <section className="lg:flex lg:justify-between">
                      <div className="lg:w-[400px] xl:w-[570px]">
                        <div className="overflow-hidden rounded-[32px]">
                          <Image
                            src="/Images/root_business04.png"
                            alt="SystemDevelopment"
                            width={1140}
                            height={636}
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="mt-2 md:mt-4 lg:mt-0 lg:w-[calc(100%-400px-56px)] xl:w-[calc(100%-570px-56px)]">
                        <div className="flex items-center md:block lg:flex">
                          <p className="mr-4 text-xl font-bold text-accent-100">
                            Service 0{/*  */}4
                          </p>
                          <h3 className="text-lg font-bold md:text-xl">
                            プログラミングスクール
                          </h3>
                        </div>
                        <p className="mt-4 md:mt-6">
                          <span className="block break-all md:inline">
                            「希少型エンジニア」を育成するITスクールを提供しております。プログラミングに限らず、Network・LinuxのようなインフラやAWSのようなクラウドまで学習します。
                          </span>
                        </p>
                        <p className="mt-6 md:mt-10 md:flex md:justify-end">
                          <a
                            className="group inline-flex min-h-[40px] min-w-[180px] items-center justify-center rounded-full border border-white bg-base-100 py-2 px-4 font-bold tracking-wider text-white md:min-h-[56px] md:min-w-[256px] md:py-3 md:px-6 md:text-xl"
                            href="https://raretech.site/"
                          >
                            <span className="relative pl-[22px] transition-all group-hover:pr-[22px] group-hover:pl-0 md:pl-8 md:group-hover:pr-8">
                              <span className="absolute top-1/2 left-0 block h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all group-hover:left-full group-hover:-translate-x-full md:h-4 md:w-4"></span>
                              view more
                            </span>
                          </a>
                        </p>
                      </div>
                    </section>
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

export function About() {
  return (
    <>
      <main>
        <div className="relative">
          <div
            id="about"
            className="absolute top-[-60px] md:top-[-115px]"
          ></div>
          <div>
            <div className="bg-gradient-to-b from-base-300 to-base-200">
              <div className="py-16 md:py-24 container md:pt-24 md:pb-[108px]">
                <div style={{ opacity: 1 }}>
                  <div className="xl:rootAboutWrapper">
                    <div className="xl:rootAboutTitle">
                      <p className="inline-block bg-gradient-to-br from-main-100 to-accent-100 bg-clip-text text-3xl font-bold leading-tight tracking-wider text-transparent md:text-5xl md:leading-tight">
                        We are ”Pro”
                        <br />
                        who can consider
                        <br className="hidden md:inline" />
                        our customers.
                      </p>
                    </div>
                    <p className="xl:rootAboutText mt-6 text-lg font-bold leading-[1.75] md:text-2xl md:leading-[1.75] xl:mt-0">
                      企業様へのエンジニア研修支援・ITコンサルティングなどIT全般の業務に携わっております。エンジニアリングに関する、そしてビジネスマンとしてのプロアスリートとして、お客様を満足させる存在であり続けます。
                    </p>
                    <p className="xl:rootAboutButton mt-6 md:mt-14">
                      <a
                        className="group inline-flex min-h-[40px] min-w-[180px] items-center justify-center rounded-full border border-white bg-base-100 py-2 px-4 font-bold tracking-wider text-white md:min-h-[56px] md:min-w-[256px] md:py-3 md:px-6 md:text-xl"
                        href="/about"
                      >
                        <span className="relative pl-[22px] transition-all group-hover:pr-[22px] group-hover:pl-0 md:pl-8 md:group-hover:pr-8">
                          <span className="absolute top-1/2 left-0 block h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all group-hover:left-full group-hover:-translate-x-full md:h-4 md:w-4"></span>
                          view more
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

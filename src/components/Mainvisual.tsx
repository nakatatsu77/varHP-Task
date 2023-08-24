export function Mainvisual() {
  return (
    <>
      <div className="h-screen w-full bg-root-hero-sp bg-cover bg-right sm:aspect-video sm:h-auto sm:bg-root-hero-pc sm:bg-center xl:h-screen">
        <div className="mx-auto h-full max-w-[calc(1536px+8.33vw*2)] px-[4.26vw] sm:px-[5.6vw] xl:px-[8.33vw]">
          <div className="relative h-full">
            <div className="absolute top-1/2 left-1/2 grid h-[400px] w-full -translate-x-1/2 -translate-y-1/2 items-center sm:left-[8vw] sm:w-auto sm:translate-x-0 xl:left-[11.11vw]">
              <div className="absolute top-1/2 left-1/2 h-[64vw] w-[64vw] -translate-x-1/2 -translate-y-1/2 blur-[28vw] will-change-[filter] sm:h-[27.78vw] sm:w-[27.78vw] sm:blur-[8.33vw]">
                <div className="h-full w-full rounded-full bg-other-200 opacity-[0.88] sm:opacity-[0.48]"></div>
              </div>
              <div className="rootHeroTextSp sm:rootHeroTextPc z-10 text-center sm:text-left">
                <p className="text-[7.46vw] font-bold sm:text-[4.4vw] xl:text-[3.3vw]">
                  IT教育から社会に変革を
                </p>
                <p className="py-[3.2vw] text-[4.8vw] font-bold sm:py-[1.38vw] sm:text-[2vw] xl:text-[1.67vw]">
                  IT教育を支援することで
                  <br className="sm:hidden" />
                  企業のサービス提供を
                  <br className="hidden sm:inline" />
                  支援する
                  <br className="sm:hidden" />
                  テクノロジーカンパニーです。
                </p>
              </div>
            </div>
            <div className="absolute bottom-[20vw] left-0 sm:bottom-[9.28vw]">
              <div className="flex origin-top-left translate-x-[4.26vw] rotate-90 items-center sm:translate-x-[1.67vw]">
                <p className="text-[3.73vw] font-bold uppercase tracking-wider sm:text-[2.08vw] xl:text-[1.11vw]">
                  Scroll
                </p>
                <div className="relative ml-[3.2vw] h-[3.2vw] w-[3.2vw] rounded-full bg-white sm:ml-[1.56vw] sm:h-[1.56vw] sm:w-[1.56vw] xl:ml-[0.83vw] xl:h-[0.83vw] xl:w-[0.83vw]">
                  <div className="absolute inset-0 -z-10 h-full w-full animate-pulseMotion rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Sustainability() {
  return (
    <>
      <main>
        <div className="bg-root-sustainability bg-cover bg-top">
          <section className="py-16 md:py-24 container">
            <div style={{ opacity: 1 }}>
              <div>
                <p className="inline-block bg-gradient-to-br from-main-100 to-accent-100 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent md:text-5xl">
                  sustainability
                </p>
                <h2 className="mt-[2px] text-sm font-bold text-other-100 md:mt-2 md:text-xl">
                  SDGsへの取り組み
                </h2>
              </div>
              <p className="mt-6 md:mt-10 xl:mt-14">
                <a
                  className="group inline-flex min-h-[40px] min-w-[180px] items-center justify-center rounded-full border border-white bg-base-100 px-4 py-2 font-bold tracking-wider text-white md:min-h-[56px] md:min-w-[256px] md:px-6 md:py-3 md:text-xl"
                  href="/sustainability"
                >
                  <span className="relative pl-[22px] transition-all group-hover:pl-0 group-hover:pr-[22px] md:pl-8 md:group-hover:pr-8">
                    <span className="absolute left-0 top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all group-hover:left-full group-hover:-translate-x-full md:h-4 md:w-4"></span>
                    view more
                  </span>
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

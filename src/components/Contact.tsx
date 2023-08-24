import Image from "next/image";

export function Contact() {
  return (
    <>
      <main>
        <div className="relative">
          <div
            id="contact"
            className="absolute top-[-60px] md:top-[-115px]"
          ></div>
          <div>
            <section className="py-16 md:py-24 container">
              <div style={{ opacity: 1 }}>
                <div className="xl:flex xl:justify-between">
                  <div>
                    <p className="inline-block bg-gradient-to-br from-main-100 to-accent-100 bg-clip-text text-3xl font-bold uppercase tracking-wider text-transparent md:text-5xl">
                      contact
                    </p>
                    <h2 className="mt-[2px] text-sm font-bold text-other-100 md:mt-2 md:text-xl">
                      お問い合わせ
                    </h2>
                  </div>
                  <div className="mt-14 xl:mt-0">
                    <p className="md:text-xl">
                      株式会社varやサービスに関するお問い合わせはフォームよりお問い合わせください。
                    </p>
                    <a
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-main-100 px-6 py-3 font-bold tracking-wider text-white transition hover:bg-main-100-hover md:min-h-[64px] md:text-xl mt-6 w-full md:mt-3 md:p-7 md:text-2xl"
                      href="/contact"
                    >
                      <div className="flex h-6 w-6 items-center md:h-8 md:w-8">
                        <Image
                          src="/Images/mail_icon.svg"
                          alt="mail-icon"
                          width={25}
                          height={30}
                        />
                      </div>
                      <p className="ml-2 md:ml-3">
                        お問い合わせフォームはこちら
                      </p>
                    </a>
                    <div className="mt-6 md:mt-5 md:flex md:justify-between">
                      <p className="md:text-xl">
                        Envaderのお問い合わせは
                        <a
                          href="https://envader.plus/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-base border-b border-white"
                        >
                          こちら
                        </a>
                      </p>
                      <p className="mt-5 md:mt-0 md:text-xl">
                        RareTECHのお問い合わせは
                        <a
                          href="https://raretech.site/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-base border-b border-white"
                        >こちら</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

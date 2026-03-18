

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px]">
        <img
          src="/heroimg.png"
          alt=""
          className="h-full w-full object-cover object-[center_60%]"
        />

       
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-on-brand sm:text-4xl">
              Overskrift Her
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-on-brand sm:mt-4 sm:text-base">
             Undertekst
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
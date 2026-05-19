const reviews = [
  {
    name: "una wernerson",
    text: "Koselig sted som ikke er altfor stort. Stor og god meny med godt utvalg av både kjøtt og fisk. Trivelig betjening og et middels prisnivå.",
  },
  {
    name: "Christopher S Hauga",
    text: "Har bestilt mat fra Lille Thai flere ganger. Jeg blir alltid fornøyd. Derfor kommer jeg alltid tilbake. Maten jeg har spist hos dere har alltid vært meget bra. Blir alltid møtt med et smil og god tone. Fin stemning, koselig atmosfære i lokalene. Kul kunst på veggen, kler lokalet",
  },
  {
    name: "Richa Chandra",
    text: "Fantastisk god mat. God kvalitet på kjøtt og råvarene som bidrar til en veldig god opplevelse. Nydelig ambianse og god service. Prisen er ikke så verst heller.",
  },
];

export default function Reviews() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">

          <h2 className="font-heading text-4xl text-brand">
            Google-anmeldelser
          </h2>

    
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-lg tracking-wide text-yellow-500">
                ★★★★★
              </div>

              <p className="leading-relaxed text-brand/80">
                "{review.text}"
              </p>

              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-brand/70">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
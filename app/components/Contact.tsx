export default function Contact() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Ta kontakt:</h2>

        <div className="border-t border-gray-300 pt-8">
          <ul className="space-y-3 text-lg text-slate-800">
            <li>○ Navn:</li>
            <li>
              ○ Telefon:{" "}
              <a href="tel:" className="hover:underline">
                nummer
              </a>
            </li>
            <li>
              ○ E-post:{" "}
              <a
                href="mailto:Mats@logopedgrenland.no"
                className="hover:underline"
              >
               Epost@ex.no
              </a>
            </li>
            <li>○ Besøksadresse: </li>
          </ul>

          <div className="mt-12 w-full flex justify-center">
            <iframe
              title="Kart over Grannmovegen 6"
              src="https://www.google.com/maps?q=Grannmovegen+6,+Skien&output=embed"
              className=" w-4/5 h-[450px] rounded-xl border border-gray-200"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
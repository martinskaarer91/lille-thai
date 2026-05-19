export default function Contact() {
  return (
    <section className="py-20 bg-neutral-50 bg-brand text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ta kontakt:</h2>

        <div className="border-t border-gray-300 pt-8">
          <ul className="space-y-3 text-lg text-slate-800 text-white">
        
            <li>
            Telefon:{""}
              <a href="tel:" className="hover:underline">
               63899500
              </a>
            </li>
            <li>
            E-post:{" "}
              <a
                href="mailto:post@Lillethai.no"
                className="hover:underline"
              >
               post@Lillethai.no
              </a>
            </li>
            <li>Besøksadresse: Storgata 27, 2000 Lillestrøm </li>
          </ul>

          <div className="mt-12 w-full flex justify-center">
             <iframe
            src="https://www.google.com/maps?q=Storgata%2027,%202000%20Lillestr%C3%B8m&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kart til Lille Thai i Lillestrøm"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-header text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / info */}
          <div>
            <h2 className="text-on-brand text-lg font-semibold">Lille Thai</h2>
         
          </div>

          {/* Navigasjon */}
          <div>
            <h3 className="text-on-brand font-semibold mb-3">Navigasjon</h3>
            <ul className="space-y-2 text-sm text-on-brand">
              <li><Link href="/" className="hover:text-white">Hjem</Link></li>
              <li><Link href="/menu" className="hover:text-white">Meny</Link></li>
              <li><Link href="/about" className="hover:text-white">Om oss/kontakt</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-on-brand font-semibold mb-3">Kontakt</h3>
            <ul className="text-sm space-y-2 text-on-brand">
              <li>Email:Post@lillethai.no</li>
              <li>Telefon: 63899500 </li>
              <li>Adresse: Storgata 27, 2000 Lillestrøm</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center text-on-brand">
          © {new Date().getFullYear()} Lillethai Alle rettigheter reservert.
        </div>

      </div>
    </footer>
  );
}
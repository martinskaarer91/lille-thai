import Hero from "./components/Hero"
import Link from "next/link";
import Reviews from "./components/Reviews";

export default function Page() {
  return (
    <>
      <Hero/>

      <div className="w-full flex justify-center my-20 px-10">
        <p>
         
        </p>
      </div>

      <div className="flex flex-col items-center mt-20 text-brand tracking-wide">
 <h2
  style={{ fontFamily: "var(--font-cormorant)" }}
  className="text-4xl font-semibold"
>
  Åpningstider
</h2>
<p className="text-lg">Mandag-Torsdag: 14:00-22:00</p>

<p className="text-lg">Fredag-Lørdag: 14:00-23:00</p>

<p className="text-lg">Søndag og helligdager: 14:00-22:00</p>

        <Link
          href="/menu"
          className="inline-block bg-brand text-on-brand px-4 py-2 rounded hover:bg-blue-700 my-20 btn"
        >
         Se vår meny
        </Link>
      </div>
      <Reviews/>
    </>
  );
}
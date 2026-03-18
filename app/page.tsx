import Hero from "./components/Hero"
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero/>

      <div className="w-full flex justify-center my-20 px-10">
        <p>
         
        </p>
      </div>

      <div className="flex flex-col items-center mt-20">
      

        <Link
          href="/tjenester"
          className="inline-block bg-brand text-on-brand px-4 py-2 rounded hover:bg-blue-700 my-20 btn"
        >
         Cta
        </Link>
      </div>
    </>
  );
}
export default function AllergiInfo() {
  return (
    <section className="sm:py-16 sm:px-6 flex bg-brand">
      <div className="max-w-3xl mx-auto text-center bg-white text-brand sm:p-5">

        <h2 className="text-xl font-semibold tracking-wide mb-6">
          SPESIELT FOR ALLERGIKERE
        </h2>

        <p className="mb-6 text-brand">
          Vi får stadig spørsmål om allergi. For å gjøre det enklere har vi satt opp noen punkter:
        </p>

        <div className="space-y-6 text-brand">

          <p>
            - Soyasausen som vi bruker inneholder hvetemel. Vennligst gi beskjed til betjeningen dersom du er glutenallergiker.
          </p>

          <p>
            - Noen av våre matretter kan inneholde spor av nøtter, fiskesaus og skalldyr.
           
            Dersom du er veldig allergisk mot dette anbefaler vi deg å spørre servitøren før du bestiller maten.
          </p>

          <p>
            - Dersom du er allergisk mot enkelte av våre matretter/ingredienser, må du forvente å velge fra en noe begrenset meny.
          </p>

        </div>

      </div>
    </section>
  );
}
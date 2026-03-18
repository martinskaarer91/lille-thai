export default function Contactform() {
  return (
    <div className="mt-16 w-full flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Send en henvendelse
        </h3>

        <form className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5">

          {/* Navn + epost */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Navn
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Skriv navnet ditt"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                E-post
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Skriv e-postadressen din"
              />
            </div>
          </div>

          {/* melding */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Melding
            </label>
            <textarea
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              placeholder="Skriv meldingen din her"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto rounded-xl bg-brand px-6 py-3 font-semibold text-on-brand hover:bg-blue-700 transition"
          >
            Send melding
          </button>
        </form>
      </div>
    </div>
  );
}


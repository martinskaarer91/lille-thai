export default function Callbtn() {
  return (
    <div className="fixed bottom-10 right-10 z-50 sm:hidden">
      <a
        href="tel:+4763899500"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-700"
      >
        <img
          src="/phone.png"
          alt="Ring Lille Thai"
          className="h-8 w-8"
        />
      </a>
    </div>
  );
}
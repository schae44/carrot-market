export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center text-black p-5">
      <div className="bg-white w-full p-5 shadow-lg rounded-2xl max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100">
        <input
          className="peer w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500"
          type="text"
          placeholder="Email address"
          required
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:px-10">
          Log in
        </button>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center text-black p-5">
      <div className="bg-white w-full p-5 shadow-lg rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1">
              In transit
            </span>
            <span className="text-4xl font-semibold">Cool blue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full">
            Today
          </span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="absolute bg-gray-200 rounded-full w-full h-2" />
          <div className="absolute bg-green-400 rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting Center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}

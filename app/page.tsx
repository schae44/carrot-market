export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center text-black p-5">
      <div className="bg-white w-full p-5 shadow-lg rounded-2xl max-w-screen-sm flex flex-col gap-4">
        {["Nico", "Me", "You", "Sarah"].map((person, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

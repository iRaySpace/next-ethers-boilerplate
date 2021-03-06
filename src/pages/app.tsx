export default function App() {
  return (
    <div className="flex bg-gray-100">
      <aside className="h-screen w-64 shadow-xl bg-gradient-to-br from-red-400 to-pink-500">
        <header className="p-7">
          <div className="uppercase text-center text-white">
            <a href="#">Ethers App</a>
          </div>
        </header>
        <nav className="pt-3">
          <a className="flex py-5 pl-7 text-white bg-pink-700 cursor-pointer">
            Home
          </a>
          <a className="flex py-5 pl-7 text-white cursor-pointer">
            Transactions
          </a>
        </nav>
      </aside>
      <div className="w-full h-screen">
        <header className="flex items-center bg-white py-5 px-7">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-blue-400 rounded-xl text-white px-7 py-3 shadow-md hover:bg-blue-500 transition">
              Connect
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}

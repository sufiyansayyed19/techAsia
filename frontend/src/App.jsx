import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      {/* The rest of our page content will go here */}
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <h1 className="text-3xl font-bold text-white">
          Page Content Area
        </h1>
      </div>
    </div>
  )
}

export default App
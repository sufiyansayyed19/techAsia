import Navbar from './components/layout/Navbar';
import Hero from './components/home/hero';
import StatsSection from './components/home/StatsSection';
import CoreCompetencies from './components/home/CoreCompetencies';
function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      {/* <Hero/> */}
      {/* <StatsSection />  */}
      {/* <CoreCompetencies/> */}
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
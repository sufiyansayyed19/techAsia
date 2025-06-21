import Navbar from './components/layout/Navbar';
import Hero from './components/home/hero';
import StatsSection from './components/home/StatsSection';
import CoreCompetencies from './components/home/CoreCompetencies';
import LeadingForce from './components/home/LeadingForce';
import IndustriesServed from './components/home/IndustriesServed';
import CTA from './components/home/CTA';
import Footer from './components/layout/Footer';
import ClientsAndProjects from './components/home/ClientsAndProjects';
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <StatsSection /> 
      <CoreCompetencies/>
      <LeadingForce/>
       <IndustriesServed />
       <CTA />
       <ClientsAndProjects/>
       <Footer/>
    </div>
  )
}

export default App
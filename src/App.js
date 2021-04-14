
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import PartnerLogos from './components/PartnerLogos/PartnerLogos';
import Goals from "./components/Goals/Goals";
import Promo from './components/PromoAd/Promo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <PartnerLogos/>
      <Goals />
      <Promo/>
    </div>
  );
}

export default App;

import OurTeam from "./components/body/ourTeam/ourTeam.tsx";
import WhyChooseUsBlock from "./components/body/whyChooseUsBlock/whyChooseUsBlock.tsx";
import Header from "./components/header/index.tsx";
import PriceBlock from "./components/price-list/comp/PriceBlock.tsx";

function App() {
  return (
    <div>
      <Header />
      <PriceBlock />
      <OurTeam />
      <WhyChooseUsBlock />
    </div>
  )
}

export default App

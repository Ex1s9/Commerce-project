import Galery from "./components/body/galery/galery.tsx";
import OurTeam from "./components/body/ourTeam/ourTeam.tsx";
import MainReviews from "./components/body/reviews/index.tsx";
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
      <Galery />
      <MainReviews />
    </div>
  )
}

export default App

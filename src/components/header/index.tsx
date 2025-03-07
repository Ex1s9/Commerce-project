import MainContent from './mainContent/header';
import Topbar from './topbar/topbar';
import WhyChooseUsBlock from "../body/whyChooseUsBlock/whyChooseUsBlock.tsx";
// import OurTeam from "../body/ourTeam/ourTeam.tsx";
import Footer from "../footer/footer.tsx";

const Header = () => {
   return (
      <div>
         <Topbar />
         <MainContent />
          {/*<OurTeam/>*/}
          <WhyChooseUsBlock/>
          <Footer/>
      </div>
   )
}

export default Header;
import MainContent from './mainContent/header';
import Topbar from './topbar/topbar';
// import WhyChooseUsBlock from "../body/whyChooseUsBlock/whyChooseUsBlock.tsx";
import OurTeam from "../body/ourTeam/ourTeam.tsx";

const Header = () => {
   return (
      <div>
         <Topbar />
         <MainContent />
          <OurTeam/>
          {/*<WhyChooseUsBlock/>*/}
      </div>
   )
}

export default Header;
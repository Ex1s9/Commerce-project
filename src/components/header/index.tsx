import MainContent from './mainContent/header';
import Topbar from './topbar/topbar';
import WhyChooseUsBlock from "../body/whyChooseUsBlock/whyChooseUsBlock.tsx";

const Header = () => {
   return (
      <div>
         <Topbar />
         <MainContent />
          <WhyChooseUsBlock/>
      </div>
   )
}

export default Header;
import MainContent from "./mainContent/header.tsx";
import Topbar from "./topbar/topbar.tsx";

const Header = () => {
   return (
      <div id="about">
         <Topbar />
         <MainContent />
      </div>
   )
}

export default Header;
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RootState } from "../../../../store/store";
import { setTargetSection } from "../../../../store/viewSlice";
import s from "./MenuLinks.module.scss";

// Определяем тип для `links`
type MenuLinksProps = {
     links: { to: string; label: string; offset?: number }[];
     className?: string;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ links, className }) => {
     const location = useLocation();
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const targetSection = useSelector((state: RootState) => state.view.targetSection);

     const handleNavigation = (to: string, _offset = 0) => {
          if (location.pathname === "/portfolio") {
               dispatch(setTargetSection(to));
               navigate("/", { replace: true });
          }
     };

     return (
          <div className={`${s.links} ${className}`}>
               {links.map(({ to, label, offset = 0 }) =>
                    location.pathname === "/portfolio" ? (
                         <span key={to} onClick={() => handleNavigation(to, offset)}>
                              {label}
                         </span>
                    ) : (
                         <ScrollLink key={to} to={to} smooth={true} duration={850} offset={offset}>
                              {label}
                         </ScrollLink>
                    )
               )}
          </div>
     );
};

export default MenuLinks;

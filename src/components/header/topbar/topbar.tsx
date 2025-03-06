import React from "react";
import MenuLinks from "./mobileMenu/MenuLinks";
import MobileMenu from "./mobileMenu/MobileMenu";
import s from "./topbar.module.scss";

const Topbar: React.FC = () => {
	const photo = "/images/FooterLogo.jpeg";

	return (
		<header className={s.header}>
			<div className={s.headerContent}>
				<div className={s.logo}>
					<div>
						<a href="#">
							<img src={photo} alt="Logo" />
						</a>
					</div>
				</div>
				<div className={s.addressTextBox}>
					<p>
						<a href="#">Севастополь, улица Токарева, 18В</a>
					</p>
				</div>
				<a href="#">
					<button className={s.onlineButton}>Онлайн запись</button>
				</a>
				<div className={s.topbarline}></div>
				<div className={s.menu}>
					<MenuLinks />
				</div>
				<div className={s.test}>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Topbar;

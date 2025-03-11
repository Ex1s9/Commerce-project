import React from "react";
import MenuLinks from "./mobileMenu/MenuLinks";
import MobileMenu from "./mobileMenu/MobileMenu";
import s from "./topbar.module.scss";

const Topbar: React.FC = () => {
	const photo = "/images/header/FooterLogo.jpeg";

	const topbarLinks = [
		{ to: "about", label: "О нас" },
		{ to: "services", label: "Услуги" },
		{ to: "galery", label: "Галерея", offset: -15 },
		{ to: "reviews", label: "Отзывы", offset: -150 },
		{ to: "contact", label: "Контакты", offset: -200 },
	];

	return (
		<header className={s.header}>
			<div className={s.headerContent}>
				<div className={s.logo}>
					<div>
						<a href="/">
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
					<MenuLinks links={topbarLinks} className={s.topbarLinks} />
				</div>
				<div className={s.test}>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Topbar;

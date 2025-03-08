import React from "react";
import s from './ourTeam.module.scss';

const OurTeam: React.FC = () => {

    const info = [
        {
            src: "images/header/FooterLogo.jpeg",
            name: "Артем Дементьев",
            about: (
                <>
                    Топ-мастер, старший <span>преподаватель академии</span>
                </>
            )
        },
        {
            src: "images/header/FooterLogo.jpeg",
            name: "Артём Яковенко",
            about: (
                <>
                    Опыт более 2-х лет.<span> Прошел курс барбер с «0» в академии In Balance</span>
                </>
            )
        },
        {
            src: "images/header/FooterLogo.jpeg",
            name: "Дарья",
            about: (
                <>Старший Барбер</>
            )
        }
    ];

    return (
        <section className={s.container}>
            <div className={s.firstLineContainer}>
                <h2>Наша команда</h2>
            </div>
            <div className={s.staffItems}>
                {info.map((column, index) => (
                    <div key={index} className={s.infoContainer}>
                        <img src={column.src} />
                        <p className={s.txtName}>{column.name}</p>
                        <div className={s.info}>{column.about}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurTeam;

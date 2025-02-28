import React from 'react';
import s from './header.module.scss';

const MainContent: React.FC = () => {
    const icons = [
        {
            src: "/images/icon1.png",
            text: "ГАРАНТИЯ НА СТРИЖКУ",
            info: (
                <>
                    У всех наших гостей есть три дня. Чтобы понять, что стрижка им точно нравится.
                </>
            ),
            className: ""
        },
        {
            src: "/images/icon2.png",
            text: "КОМФОРТ",
            info: (
                <>
                    У нас введены единые стандарты сервиса
                </>
            ),
            className: s.wider
        },
        {
            src: "/images/icon3.png",
            text: "БЕЗОПАСНОСТЬ",
            info: (
                <div className={s.test}>
                    Мы тщательно дезинфицируем <span>рабочие места и инструменты</span>
                </div>
            ),
            className: ""
        }
    ];

    return (
        <section className={s.container}>
            <div className={s.centerBlock}>
                <div className={s.mainText}>
                    <h1>In Balance</h1>
                    <h2>БАРБЕРШОП</h2>
                </div>
                
                <div className={s.iconsContainer}>
                    {icons.map((icon, index) => (
                        <div key={index} className={`${s.iconItem} ${icon.className}`}>
                            <img src={icon.src}/>
                            <div className={s.title}>{icon.text}</div>
                            <div className={s.info}>{icon.info}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainContent;

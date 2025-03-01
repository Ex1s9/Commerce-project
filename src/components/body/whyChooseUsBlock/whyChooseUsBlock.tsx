import s from './whyChooseUsBlock.module.scss';
import React, { useState } from 'react';

const WhyChooseUsBlock: React.FC = () => {
    const [text] = useState<string[]>([
        "Барбершоп «In Balance» — это высочайшие стандарты стрижек и сервиса с 2016 года.",
        " Лучшее из американского барберинга, британского парикмахерского искусства",
        "и японского сервиса для вашего стиля."
    ]);

    const info = [
        {
            src: "images/body/WhyChooseUsBlock/a-icon1.png",
            txt: (
                <span>
                  Семь раз отмерь - один отрежь. Мы вкладываем в него осознанный
                  подход к нашему ремеслу и внимание к клиентам. Стрижка в In Balance
                  это как костюм, сделанный на заказ, только для вас, только
                  по вашим меркам.
              </span>
            ),
            className: s.first
        },
        {
            src: "images/body/WhyChooseUsBlock/a-icon2.png",
            txt: (
                <span>
                    Мы настолько уверены в качестве своих работ, что даем гарантии:
                    если вам не понравилась длина или форма стрижки вы можете получить
                    коррекцию абсолютно бесплатно в течении 3-х дней.
                </span>
            ),
            className: s.second
        },
        {
            src: "images/body/WhyChooseUsBlock/a-icon5.png",
            txt: (
                <span>
                    Наша команда состоит из людей, совмещающих техники классического
                    барберинга и точные техники стрижки с высококлассным сервисом
                </span>
            ),
            className: s.third
        },
        {
            src: "images/body/WhyChooseUsBlock/a-icon4.png",
            txt: (
                <span>
                    Среди наших выпускников более 400 довольных учеников, которые
                    возвращаются к нам за новыми знаниями и повышением квалификации
                </span>
            ),
            className: s.fourth
        }
    ];

    return (
        <section className={s.container}>
            <h2>Почему нас выбирают?</h2>
            <div className={s.mainTxt}>{text}</div>
            <div className={s.infoContainer}>
                {info.map((line, index) => (
                    <div key={index} className={`${s.featureContainer} ${line.className}`}>
                        <img src={line.src} alt={`icon-${index}`} />
                        <div className={s.featureTxt}>{line.txt}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUsBlock;
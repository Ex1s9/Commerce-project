import s from './ourTeam.module.scss';

const OurTeam: React.FC = () => {
    return(
        <section className={s.container}>
            <div className={s.firstLineContainer}>
                <h2>Наша команда</h2>
                <button>Вся команда</button>
            </div>
        </section>
    );
}

export default OurTeam;

import s from './maps.module.scss';


const Maps: React.FC = () => {
     return (
          <div className={s.map}>
               <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A896298f271f616f8c158b55c151fe7af03d85682fe921420a55108ae92a371e2&amp;source=constructor" />
          </div>
     )
}

export default Maps;
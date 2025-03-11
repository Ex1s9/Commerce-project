import s from "./photo.module.scss";

const images = [
     "/galery/IMG_0126.webp",
     "/galery/IMG_0527.webp",
     "/galery/IMG_2714.webp",
     "/galery/IMG_2998.webp",
     "/galery/IMG_3551.webp",
     "/galery/IMG_3582.webp",
     "/galery/IMG_0126.webp",
     "/galery/IMG_0527.webp",
     "/galery/IMG_2714.webp",
     "/galery/IMG_2998.webp",
     "/galery/IMG_3551.webp",
     "/galery/IMG_3582.webp",
     "/galery/IMG_0126.webp",
     "/galery/IMG_0527.webp",
     "/galery/IMG_2714.webp",
     "/galery/IMG_2998.webp",
     "/galery/IMG_3551.webp",
     "/galery/IMG_3582.webp",
     "/galery/IMG_3582.webp",
];

const PhotoBlock = () => {
     const remainder = images.length % 3;

     return (
          <div className={s.photoBlock}>
               <h2>Галерея</h2>
               <div className={s.galleryGrid}>
                    {images.map((src, index) => {
                         const isLastSingle = remainder === 1 && index === images.length - 1;
                         return (
                              <div
                                   key={index}
                                   className={`${s.imageWrapper} ${isLastSingle ? s.centerOnLarge : ""}`}
                              >
                                   <img src={src} alt={`Gallery ${index}`} className={s.image} />
                              </div>
                         );
                    })}
               </div>
          </div>
     );
};

export default PhotoBlock;

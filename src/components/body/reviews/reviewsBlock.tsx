import { FaStar } from 'react-icons/fa6';
import s from './ReviewsBlock.module.scss';

type ReviewsCardProps = {
     title: string;
     author: string;
     date: string;
};

const ReviewsBlock: React.FC<ReviewsCardProps> = ({ title, author, date }) => {
     const starCount = 5;

     return (
          <div className={s.block}>
               <div className={s.textContainer}>
                    <h4 className={s.author}>{author}</h4>
                    <div className={s.stars}>
                         <li>
                              {Array.from({ length: starCount }, (_, index) => (
                                   <span key={index}><FaStar /></span>
                              ))}
                         </li>
                         <p>{date}</p>
                    </div>

                    <p className={s.reviews}>{title}</p>
               </div>
          </div>
     );
};

export default ReviewsBlock;
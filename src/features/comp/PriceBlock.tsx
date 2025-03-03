import Price from "../price-list/price/price";
import s from "./PriceBlock.module.scss";

const PriceBlock = () => {
   return (
      <div className={s.priceBlock}>
         <Price />
      </div>
   )
}

export default PriceBlock;
import { useState } from "react";
import { MdEditCalendar } from "react-icons/md";
import s from "./price.module.scss";

const Price = () => {
   const [selectedCategory, setSelectedCategory] = useState("category1");

   const services = [
      { title: "Стрижка бороды" }, { title: "Стрижка" }, { title: "Укладка" },
      { title: "Стрижка бороды" }, { title: "Стрижка волос" }, { title: "Укладка" },
      { title: "Стрижка бороды" }, { title: "Стрижка волос" }, { title: "Укладка" },
      { title: "Стрижка бороды" }, { title: "Стрижка волос" }, { title: "Укладка" },
      { title: "Стрижка бороды" }, { title: "Стрижка волос" }, { title: "Укладка" },
      { title: "Стрижка бороды" }, { title: "Стрижка волос" }, { title: "Укладка" },
   ];

   const prices: { [key: string]: string[] } = {
      category1: ["1900", "1000", "500", "1200", "2000", "700", "1900", "1000", "500", "1900", "1000", "500", "1900", "1000", "500", "1900", "1000"],
      category2: ["2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000", "1900"],
      category3: ["2100", "1200", "700", "2100", "1200", "700", "2100", "1200", "700", "2100", "1200", "700"],
   };

   const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
   };

   const totalRows = 6;
   const totalColumns = 3;

   const reorderedServices: { title: string }[] = new Array(services.length);
   const reorderedPrices: string[] = new Array(prices[selectedCategory]?.length || 0);

   services.forEach((service, index) => {
      const row = index % totalRows;
      const column = Math.floor(index / totalRows);
      const newIndex = column + row * totalColumns;

      reorderedServices[newIndex] = service;
      reorderedPrices[newIndex] = prices[selectedCategory]?.[index] ?? "-";
   });

   const columns = Array.from({ length: totalColumns }, () => [] as { service: { title: string } | undefined; price: string }[]);
   reorderedServices.forEach((service, index) => {
      const priceValue = reorderedPrices[index];
      if (priceValue === "-") return;
      const col = index % totalColumns;
      columns[col].push({ service, price: priceValue });
   });

   return (
      <div className={s.price} id="services">
         <h1>In balance</h1>
         <div className={s.container}>
            <div className={s.buttonBlock}>
               {["category1", "category2", "category3"].map((category) => (
                  <button
                     key={category}
                     onClick={() => handleCategoryChange(category)}
                     className={`${s.button} ${selectedCategory === category ? s.active : ""}`}
                  >
                     {category === "category1" ? "Барбер" : category === "category2" ? "Старший барбер" : "ТОП-Барбер"}
                  </button>
               ))}
            </div>
            <div className={s.priceList}>
               {columns.map((col, ColIndex) => (
                  <div key={ColIndex} className={s.column}>
                     {col.map((item, index) => (
                        <div key={index} className={s.priceItem}>
                           <span className={s.title}>{item.service?.title}</span>
                           <span className={s.cost}>{item.price}</span>
                        </div>
                     ))}
                     {ColIndex === columns.length - 1 && (
                        <a className={s.serviceButton}>
                           Записаться
                           <span><MdEditCalendar /></span>
                        </a>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Price;
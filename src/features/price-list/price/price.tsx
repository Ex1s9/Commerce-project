import { useState } from "react";
import s from "./price.module.scss";

const Price = () => {
   const [selectedCategory, setSelectedCategory] = useState("category1");

   const services = [
      { title: "Стрижка бороды" },
      { title: "Стрижка" },
      { title: "Укладка" },
      { title: "Стрижка бороды" },
      { title: "Стрижка волос" },
      { title: "Укладка" },
      { title: "Стрижка бороды" },
      { title: "Стрижка волос" },
      { title: "Укладка" },
      { title: "Стрижка бороды" },
      { title: "Стрижка волос" },
      { title: "Укладка" },
      { title: "Стрижка бороды" },
      { title: "Стрижка волос" },
      { title: "Укладка" },
      { title: "Стрижка бороды" },
      { title: "Стрижка волос" },
      { title: "Укладка" },
   ];

   const prices: { [key: string]: string[] } = {
      category1: ["1900", "1000", "500", "1200", "2000", "700", "1900", "1000", "500", "1900", "1000", "500", "1900", "1000", "500", "1900", "1000", "500"],
      category2: ["2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000", "1100", "600", "2000"],
      category3: ["2100", "1200", "700", "2100", "1200", "700", "2100", "1200", "700", "2100", "1200", "700"],
   };

   const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
   };

   const totalRows = 6;
   const totalColumns = 3;

   const reorderedServices = Array.from({ length: services.length });
   const reorderedPrices = Array.from({ length: prices[selectedCategory]?.length || 0 });

   services.forEach((service, index) => {
      const row = index % totalRows;
      const column = Math.floor(index / totalRows);
      const newIndex = column + row * totalColumns;

      reorderedServices[newIndex] = service;
      reorderedPrices[newIndex] = prices[selectedCategory]?.[index] ?? "-";
   });

   return (
      <div className={s.price}>
         <div>
            <button onClick={() => handleCategoryChange("category1")}>Категория 1</button>
            <button onClick={() => handleCategoryChange("category2")}>Категория 2</button>
            <button onClick={() => handleCategoryChange("category3")}>Категория 3</button>
         </div>
         <div className={s.priceList}>
            {reorderedServices.map((service, index) => (
               <div key={index} className={s.priceItem}>
                  <span>{service?.title}</span>
                  <span>{reorderedPrices[index]}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Price;
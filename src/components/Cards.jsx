"use client";

import { slideUp } from "@/util";
import { motion } from "framer-motion";

const prefix = "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/";

const cards = [
  {
    name: "Studio",
    description:
      "  YQYMONs厂牌设计工作室. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus",
    delay: 0.2,
    img: "studio.png",
  },
  {
    name: "Label",
    description:
      "  YQYMONs厂牌设计工作室. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus",
    delay: 0.4,
    img: "label.png",
  },
  {
    name: "Team",
    description:
      "  YQYMONs厂牌设计工作室. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus",
    delay: 0.6,
    img: "team.png",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={slideUp(card.delay)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={prefix + card.img}
                alt=""
                className="w-20 h-20 rounded-full object-contain p-2 bg-black"
              />
              <p className="text-xl font-semibold">{card.name}</p>
              <p className="text-sm text-black/80 leading-relaxed">
                {card.description}
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

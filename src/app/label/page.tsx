import React from "react";
import Cards from "@/components/Cards";
import CardStacker from "@/components/CardStacker/CardStacker";
import Accordion from "@/components/Accordion/Accordion";
import Gallery2 from "@/components/Gallery2/Gallery2";

interface CARD {
  title: string;
  img: string;
}

const label = () => {
  const cards: Array<CARD> = [
    {
      title: "Kevin Garnett",
      img: "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/bk0.jpg",
    },
    {
      title: "Kobe Bryant",
      img: "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/bk1.jpg",
    },
    {
      title: "Allen Iversion",
      img: "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/bk2.jpg",
    },
    {
      title: "Steve Nash",
      img: "https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/bk3.jpg",
    },
  ];

  return (
    <div>
      <Gallery2
        className="h-96 my-20"
        cards={Array.from({ length: 5 }, (item, i) => ({
          title: "Keep Calme",
          img: `https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/keepcalm/kp${i}.jpg`,
        }))}
      />

      <Accordion
        cards={Array.from({ length: 4 }, (item, i) => ({
          title: "Keep Calme",
          img: `https://yqymons-bank.oss-cn-beijing.aliyuncs.com/crafts/xjtu/xjtu-${i}.png`,
        }))}
      />
      <CardStacker cards={cards} />

      <Cards />
    </div>
  );
};

export default label;

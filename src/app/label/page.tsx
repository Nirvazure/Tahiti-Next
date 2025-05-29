import React from "react";
import Cards from "@/components/Cards";
import CardStacker from "@/components/CardStacker/CardStacker";
import Accordion from "@/components/Accordion/Accordion";

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
      <Accordion cards={cards} />
      <CardStacker cards={cards} />
      <Cards />
    </div>
  );
};

export default label;

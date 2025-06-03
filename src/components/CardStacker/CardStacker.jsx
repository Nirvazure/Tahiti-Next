import React from "react";
import "./CardStacker.css";

const CardStacker = (props) => {
  const { cards = [] } = props;
  return (
    <div className="flex justify-center h-120 my-20">
      <div className="box relative flex justify-center align-middle">
        {cards.map((card, i) => (
          <div
            key={i}
            className="cursor-pointer align-middle card flex absolute h-120 w-80 transition duration-500 justify-center"
            style={{ "--i": i - 1, "--clr": card.color }}
            data-text={card.title}
          >
            <img
              className="absolute grayscale-100 transition duration-500 contrast-150 object-cover"
              src={card.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStacker;

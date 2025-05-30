import React from "react";

import styles from "./Gallery2.module.css";

const Gallery2 = (props) => {
  const { cards = [] } = props;

  return (
    <div className="flex justify-center ">
      <div className={styles.shell}>
        {cards.map((card, i) => (
          <div className={styles.box} key={i}>
            <div className={styles.images}>
              <img src={card.img} />
            </div>
            <div className={styles.content}>
              <h2>{card.title}</h2>
              <p>
                The style in the painting integrates temptation, fantasy and
                strangeness
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;

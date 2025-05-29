import styles from "./Accordion.module.css";

const Accordion = (props) => {
  const { cards = [] } = props;

  return (
    <div className="flex justify-center align-middle">
      <div className="flex w-9/10 h-96">
        {cards.map((card, i) => (
          <div key={i} className={styles.box}>
            <img src={card.img} />
            <span>{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

import CardItem from "./CardItem";
import PropTypes from "prop-types";

const CardContainer = ({ cards }) => {
  return (
    <section
      className="card-container"
      style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
    >
      {cards.map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </section>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardContainer;

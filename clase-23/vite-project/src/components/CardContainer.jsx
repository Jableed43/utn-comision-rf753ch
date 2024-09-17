/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import Card from "./Card";

function CardContainer({ cards }) {
  const handleCard = title => {
    console.log(title);
  };
  return (
    <section className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
          buttonTitle={card.buttonTitle}
          action={() => {
            handleCard(card.title);
          }}
          buttonColor={card.buttonColor}
          image={card.image}
        />
      ))}
    </section>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonTitle: PropTypes.string.isRequired,
      buttonColor: PropTypes.string,
    })
  ).isRequired,
};

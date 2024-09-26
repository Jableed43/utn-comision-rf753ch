import PropTypes from "prop-types";
import Card from "./Card";

// - Definir props por defecto: Component.defaultProps
// - Tipar una prop del tipo array: PropTypes.arrayOf
// - Tipar objetos: PropTypes.shape

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

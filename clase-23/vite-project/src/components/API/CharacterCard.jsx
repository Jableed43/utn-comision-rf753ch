import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <div className="characterCard">
      <p>{character.name}</p>
      <img src={character.image} alt="image" />
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;

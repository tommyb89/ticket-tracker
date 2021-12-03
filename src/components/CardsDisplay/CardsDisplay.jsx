import "./CardsDisplay.scss";
import DeckCard from "../DeckCard/DeckCard";

const CardsDisplay = (props) => {
  const { cardsArr } = props;
  return (
    <section className="display">
      <DeckCard suit={cardsArr.suit} />
    </section>
  );
};

export default CardsDisplay;

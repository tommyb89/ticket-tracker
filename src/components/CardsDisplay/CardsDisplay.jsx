import "./CardsDisplay.scss";
import DeckCard from "../DeckCard/DeckCard";

const CardsDisplay = (props) => {
  const { cardsArr } = props;
  return (
    <section className="display">
      <DeckCard />
    </section>
  );
};

export default CardsDisplay;

import "./App.scss";
import team from "./data/team";
import EmployeesCards from "./components/EmployeesCards/EmployeesCards";
import Header from "./components/Header/Header";
import cardDeck from "./data/deck";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import CardsDisplay from "./components/CardsDisplay/CardsDisplay";
console.log(cardDeck);
// Background

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Header />
      <section className="employees-tickets">
        <EmployeesCards employeesArr={team} />;
      </section>
      <CardsDisplay cardsArr={cardDeck} />
    </div>
  );
}

export default App;

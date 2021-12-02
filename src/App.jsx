import "./App.scss";
import team from "./data/team";
import EmployeesCards from "./components/EmployeesCards/EmployeesCards";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="employees-tickets">
        <EmployeesCards employeesArr={team} />;
      </section>
    </div>
  );
}

export default App;

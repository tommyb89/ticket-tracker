import "./App.scss";
import team from "./data/team";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Ticket Tracker</h1>
      </header>
      <section className="employees">
        <EmployeeCard employeeArr={team} />;
      </section>
    </div>
  );
}

export default App;

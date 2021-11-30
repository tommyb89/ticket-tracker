import "./App.scss";
import team from "./data/team";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1 className="header__title">Ticket Tracker</h1>
        </header>
        <section className="employees">
          {team.map((employee) => {
            return (
              <EmployeeCard
                key={employee.id}
                name={employee.name}
                role={employee.role}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;

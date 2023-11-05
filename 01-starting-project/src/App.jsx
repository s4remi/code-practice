import reactImg from "./assets/react-core-concepts.png";
import CoreConceptImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];
function randomIntGen(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[randomIntGen(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
// nested components,
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title="Component"
              description=" The Core UI building block."
              image={CoreConceptImg}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <h3>next time </h3>
      </main>
    </div>
  );
}

export default App;

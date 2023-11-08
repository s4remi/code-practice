import CoreConceptImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/tabButton.jsx";
import { Component } from "react";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

// nested components,
function App() {
  const [currentTab, setCurrentTab] = useState();
  function handleSelect(selectButton) {
    setCurrentTab(selectButton);
    console.log(selectButton);
    console.log(currentTab);
  }
  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title="Component"
              description=" The Core UI building block."
              image={CoreConceptImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!currentTab && <p>please select the topic.</p>}
          {currentTab && (
            <div id="tab-content">
              <h3>{EXAMPLES[currentTab].title}</h3>
              <p>{EXAMPLES[currentTab].description}</p>
              <pre>
                <code>{EXAMPLES[currentTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

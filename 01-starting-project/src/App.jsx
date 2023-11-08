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
  let tabContent = <p>Please select the topic.</p>;
  if (currentTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentTab].title}</h3>
        <p>{EXAMPLES[currentTab].description}</p>
        <pre>
          <code>{EXAMPLES[currentTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((contentItem) => (
              <CoreConcept key={contentItem.title} {...contentItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={currentTab === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={currentTab === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={currentTab === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={currentTab === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

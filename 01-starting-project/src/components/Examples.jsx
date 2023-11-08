import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [currentTab, setCurrentTab] = useState();

  function handleSelect(selectButton) {
    setCurrentTab(selectButton);
    //console.log(selectButton);
    //console.log(currentTab);
  }
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
  );
}

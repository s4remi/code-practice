import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Header/section.jsx";
import Tabs from "./Tabs.jsx";

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
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={currentTab === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={currentTab === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={currentTab === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={currentTab === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

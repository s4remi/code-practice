function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
// nested components,
// it would be a good practice to put each component in separate file
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <h3>next time </h3>
        <Header />
      </main>
    </div>
  );
}

export default App;

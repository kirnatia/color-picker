// Write your Color component here

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <h1>hello</h1>
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  );
};

export default App;

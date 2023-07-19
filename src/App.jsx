import { useState } from 'react';

const Color = ({ color, onSelect }) => {
  const onClick = () => {
    onSelect(color)
    
  };

  return <div className={color} onClick={onClick}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div id="container">
      <div id="navbar">
        <h1>Hello</h1>
        <div>Currently selected: {selectedColor}</div>
        <div className={selectedColor}></div>
      </div>

      <div id="colors-list">
      
      <Color color="red" onSelect={handleColorSelect} />
        <Color color="yellow" onSelect={handleColorSelect} />
        <Color color="blue" onSelect={handleColorSelect} />
        <Color color="green" onSelect={handleColorSelect} />
        <Color color="violet" onSelect={handleColorSelect} />
        
        <Color color="pink" onSelect={handleColorSelect} />
      </div>
    </div>
  );
};

export default App;

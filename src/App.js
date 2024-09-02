import './App.css';
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page on submission

    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="app-container">
      <h1 className="title">Shopping List</h1>
      <form onSubmit={handleAddItem} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a shopping item"
          className="input"
        />
        <button type="submit" className="add-button">Add Item</button>
      </form>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
            <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

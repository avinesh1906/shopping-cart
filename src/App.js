import './App.css';
import { useState } from "react";


function App() {

  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent the form from loading on form submission

    // check whether the input value is not empty or with empty spaces
    if (inputValue.trim()) { 

      // Add item to the list
      setItems([...items, inputValue]);

      // Clear the input field
      setInputValue(''); 
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items]; // Create a copy of the items array
    newItems.splice(index, 1); // Remove one item at the specified index
    setItems(newItems); // Update the state with the new list
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

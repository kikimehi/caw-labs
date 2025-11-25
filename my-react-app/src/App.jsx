import { useState } from 'react';

// Exercise 1.1: Button that displays "Clicked" text
function ClickButton() {
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 1.1</h3>
      <button 
        onClick={() => setClicked(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ClickMe
      </button>
      {clicked && <p className="mt-2">Clicked</p>}
    </div>
  );
}

// Exercise 1.2: Toggle button
function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 1.2</h3>
      <button 
        onClick={() => setIsClicked(!isClicked)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Toggle
      </button>
      <p className="mt-2">{isClicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

// Exercise 1.3: Three buttons that display which was clicked
function ThreeButtons() {
  const [clickedButton, setClickedButton] = useState(null);
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 1.3</h3>
      <div className="space-x-2">
        <button 
          onClick={() => setClickedButton(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Button1
        </button>
        <button 
          onClick={() => setClickedButton(2)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Button2
        </button>
        <button 
          onClick={() => setClickedButton(3)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Button3
        </button>
      </div>
      {clickedButton && (
        <p className="mt-2">Button #{clickedButton} was clicked</p>
      )}
    </div>
  );
}

// Exercise 1.4: Counter with increment/decrement
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 1.4</h3>
      <h1 className="text-2xl font-bold mb-2">{count}</h1>
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Inc
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Dec
        </button>
      </div>
    </div>
  );
}

// Exercise 2.1: Display table as unordered list
function DisplayTab() {
  const tab = ["hello", "world", "from", "react"];
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 2.1</h3>
      <ul className="list-disc list-inside">
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Exercise 2.2: Display with formatted text
function DisplayTabFormatted() {
  const tab = ["hello", "world", "from", "react"];
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 2.2</h3>
      <div>
        {tab.map((item, index) => (
          <div key={index}>
            Element {index + 1} is: {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// Exercise 2.3: Clickable list items that remove on click
function ClickableList() {
  const [items, setItems] = useState(["hello", "world", "from", "react"]);
  
  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 2.3</h3>
      <div>
        {items.map((item, index) => (
          <div 
            key={index}
            onClick={() => removeItem(index)}
            className="cursor-pointer hover:bg-red-100 p-2 border-b"
          >
            Element {index + 1} is: {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// Exercise 2.4: Parameterized DisplayTab with props
function DisplayTabParam({ data }) {
  return (
    <div className="p-4 border rounded mb-4">
      <ul className="list-disc list-inside">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Exercise 2.5: App with two DisplayTab components
function TwoTablesApp() {
  const table1 = ["apple", "banana", "cherry"];
  const table2 = ["red", "green", "blue"];
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 2.5</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Table 1</h4>
          <DisplayTabParam data={table1} />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Table 2</h4>
          <DisplayTabParam data={table2} />
        </div>
      </div>
    </div>
  );
}

// Exercise 3.1, 3.2, 3.3: Authentication form with user list and delete
function AuthenticationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password, id: Date.now() }]);
      setUsername('');
      setPassword('');
    }
  };
  
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="font-bold mb-2">Exercise 3</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter password"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      
      {users.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Users List:</h4>
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="flex justify-between items-center border p-2 rounded">
                <span>Username: {user.username}</span>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Exercise 4: Form to create divs with custom styles
function DivCreator() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      height: `${height}px`,
      width: `${width}px`,
      backgroundColor: color,
    };

    setBoxes([...boxes, newBox]);

    // Clear form
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Div</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Color (e.g. red, #333)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <button type="submit">Add Div</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              height: box.height,
              width: box.width,
              backgroundColor: box.backgroundColor,
              margin: "10px 0",
              border: "1px solid #000",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
// Main App component
export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">React Components Exercises</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Exercise 1</h2>
        <ClickButton />
        <ToggleButton />
        <ThreeButtons />
        <Counter />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Exercise 2</h2>
        <DisplayTab />
        <DisplayTabFormatted />
        <ClickableList />
        <TwoTablesApp />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Exercise 3</h2>
        <AuthenticationForm />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Exercise 4</h2>
        <DivCreator />
      </div>
    </div>
  );
}
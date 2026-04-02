import { useState } from "react";
import MenuItem from "./menuitem";

function App() {
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 600, isSpicy: false },
    { id: 3, name: "Zinger Burger", price: 400, isSpicy: true },
    { id: 4, name: "Karahi", price: 900, isSpicy: false },
  ];

  const [showNonSpicy, setShowNonSpicy] = useState(false);

  const filteredMenu = showNonSpicy
    ? menu.filter(item => !item.isSpicy)
    : menu;

  return (
    <div>
      <h1>🍽️ Biryani Menu</h1>

      <button onClick={() => setShowNonSpicy(!showNonSpicy)}>
        {showNonSpicy ? "Show All Items" : "Show Non-Spicy Only"}
      </button>

      {filteredMenu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
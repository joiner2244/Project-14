function MenuItem({ item }) {
  return (
    <div
      style={{
        backgroundColor: item.isSpicy ? "#86570b" : "#3b573b",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>
        {item.name} {item.isSpicy ? "🔥" : "🌿"}
      </h2>
      <p>Price: Rs {item.price}</p>
    </div>
  );
}

export default MenuItem;
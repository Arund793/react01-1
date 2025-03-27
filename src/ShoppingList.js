function ShoppingList() {
    const items = ['Cabbage', 'Garlic', 'Apple'];
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ShoppingList;
  
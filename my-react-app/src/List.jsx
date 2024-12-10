import React from "react";

export default function List() {
  const fruits = ["Apple", "Banana", "Mango", "Pineapple", "Grapes"];

  fruits.sort();
  const basketItems = fruits.map((fruit) => <li key={fruit}>{fruit}</li>);

  const fruitsChart = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 45 },
    { id: 3, name: "Grapes", calories: 134 },
    { id: 4, name: "Mango", calories: 37 },
    { id: 5, name: "Pineapple", calories: 195 },
  ];

  fruitsChart.sort((a, b) => {
    return a.calories - b.calories;
  });

  const chartItems = fruitsChart.map((fruitItem) => (
    <li key={fruitItem.id}>
      {fruitItem.name}: &nbsp; &nbsp; <b>{fruitItem.calories}</b>
    </li>
  ));

  const lowCalory = fruitsChart.filter(fruit => fruit.calories < 100)

  const lowCaloryItems = lowCalory.map((lowCalory) => (
    <li key={lowCalory.id}>
      {lowCalory.name}: &nbsp; &nbsp; <b>{lowCalory.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3>List of Fruits using Map function</h3>

      <ol>{basketItems}</ol>

      <h3>List of Fruits Objects Sorted via Calories</h3>

      <ol>{chartItems}</ol>

      <h3>List of Fruits Objects with Low Calories</h3>

      <ol>{lowCaloryItems}</ol>
    </div>
  );
}

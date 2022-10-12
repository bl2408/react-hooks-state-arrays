import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newList = [...foods, newFood];
    setFoods(newList);
    //console.log(newFood);
  }
  function handleLiClick(id){
    //const newFood = foods.filter(food=>food.id !== id);
    const newFood = foods.map(food=> food.id===id ? {...food, heatLevel: food.heatLevel + 1} : food);
    setFoods(newFood);
  }

  function handleSelectChange(event){
    setFilterBy(event.target.value);
  }

  const foodsDisplay = foods.filter(food=> filterBy === "All" ? true : food.cusine === filterBy);

  const foodList = foodsDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={()=>handleSelectChange(this)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

import { useState, useEffect } from "react";
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";

function FruitContainer(props) {
  // initialize the fruit list to the full list passed in props
  const [fruitToDisplay, setFruitToDisplay] = useState(props.fruits);

  // initialize the filter value to an empty string
  console.log(props, "container");

  // Will need a method to update the state when the filter value changes.
  // This method will store the filter state and filter the list of the fruitsto display.
  // We'll then pass this change handler to the filter component to react to the user's input.
  const handleFilterChange = (e) => {
    e.preventDefault();
    const filterValue = e.target.value;
    setFruitToDisplay((_prevState) => {
      // Remove fruits that don't contain the filter value
      const filterFruitList = props.fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(filterValue.toLowerCase());
      });
      // Return new state with the filter fruit list and the new value of the filter.
      return filterFruitList;
    });
  };

  useEffect(() => {
    console.log("do something nice.", fruitToDisplay);
  }, [fruitToDisplay]);

  return (
    <div>
      <FruitFilter onChange={(e) => handleFilterChange(e)} />
      <FruitList fruits={fruitToDisplay} />
    </div>
  );

  // All of the data is hoisted to the top of the tree within the container and is passed to the child components.
}

export default FruitContainer;
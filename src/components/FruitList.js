function FruitList(props) {
    console.log(props, "FruitList.js");
  
    return (
      <ul>
        {props.fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    );
  }
  
  export default FruitList;
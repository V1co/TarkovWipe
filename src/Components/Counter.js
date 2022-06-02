import { React } from "react"
import useQuantity from "../Hooks/useQuantity"

export const Counter = ({ neededValue }) => {
    const quantity = useQuantity(); // Use quantity here, do not need to pass from props

    const decrement = () => {
       quantity.setValue(quantity.value - 1);
    };

    const increment = () => {
      quantity.setValue(quantity.value + 1);
    };

    return (
      <>
        <button onClick={decrement} disabled={quantity.value === 0} style={{color: "#9a8866", backgroundColor: "inherit", border: "1px solid #9a8866"}}> - </button>
        <span style={{padding: "10px", color: "#9a8866"}}>
          {quantity.value} / {neededValue}
        </span>
        <button onClick={increment} disabled={quantity.value === neededValue} style={{color: "#9a8866", backgroundColor: "inherit", border: "1px solid #9a8866"}}> + </button>
      </>
    );
  };

  export default Counter
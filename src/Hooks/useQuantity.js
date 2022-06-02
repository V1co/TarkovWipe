import { useState } from "react";

export const useQuantity = () => {
const [value, setValue] = useState(0);

const onChange = (e) => {
   setValue(e.target.value);
};

return {
      value,
      setValue,
      onChange
   };
};

export default useQuantity
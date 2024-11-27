import { useLocation } from "react-router-dom";
import { Country } from "./Country";

export const Details = () => {
  const { state } = useLocation();
  const country = state.data;
  console.log(state);
  return (
    <div>
      <Country country={country} />
    </div>
  );
};

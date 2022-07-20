import { useContext } from "react";
import { Cart, CartState } from "./Context";

function Filters() {
  const {
    state: { data },
    dispatch
  } = CartState();

  return (
    <div>
      <div>
        <select
          defaultValue=""
          name="Gender"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_GENDER_OP",
              payload: {
                gender: data.gender
              }
            })
          }
        >
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;

import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalize";
import { useManageStateProvider } from "../Context/ManageStateContext";

const Select = () => {
  const { setSelectedFilter, combinedStates } = useManageStateProvider()
  const handleFilterByTypeValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFilter(event.target.value);
  };

  const colors = combinedStates.map((data) => data.color);
  const filteredColor = combinedStates.filter(
    ({ color }, index) => !colors.includes(color, index + 1)
  );

  return (
    <div>
      <form id="filter-by-type-form">
        <label> Filter by color: </label>
        <select
          onChange={handleFilterByTypeValue}
          name="filter-by-type"
          id="filter-by-type"
          className="label-radius btn-filter"
        >
          <option value=""> Filter by color </option>
          {filteredColor?.map((data) => (
            <option key={data.carId} value={data.color?.toLocaleLowerCase()}>
              {capitalizeFirstLetter(data.color ?? "")}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Select;

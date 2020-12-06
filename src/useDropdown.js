import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  // generic state
  const [state, setState] = useState(defaultState);
  // create an ID unique without blank spaces and lower case
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  // create the Dropdown component
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All </option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  // return state, setState and the brand new component
  return [state, Dropdown, setState];
};

export default useDropdown;

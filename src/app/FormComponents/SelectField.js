import React from "react";

const SelectField = ({ schema }) => {
  const [selectedValue, setSelectedValue] = React.useState(schema.validate.defaultValue);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`mt-5 ${schema.validate.required ? 'required' : ''}`}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={schema.jsonKey}>
        {schema.label}
      </label>
      <select
        id={schema.jsonKey}
        value={selectedValue}
        onChange={handleChange}
        disabled={schema.validate.immutable}
        className={`mt-1 p-2 border ${schema.validate?.required && !selectedValue ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 block w-full sm:text-sm rounded-md`}
      >
        <option value="" disabled hidden>
          {schema.placeholder}
        </option>
        {schema.validate.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

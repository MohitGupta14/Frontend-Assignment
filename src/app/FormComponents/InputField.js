import React, { useState } from "react";

const InputField = ({ schema }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <div className={`mt-5 ${schema.validate.required ? 'required' : ''}`}>
        <label className="block text-sm font-medium text-gray-700">
          {schema.label}
          {schema.description.length > 0 && (
            <span className="ml-1">
              <span className="bg-purple-300 px-2 py-1 text-xs rounded-full">i</span>
            </span>
          )}
        </label>
        <input
          value={value}
          onChange={handleChange}
          placeholder={schema.placeholder}
          name={schema.jsonKey ? schema.jsonKey : ""}
          required={schema.validate?.required}
          className={`mt-1 p-2 border ${schema.validate?.required && !value ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500 block w-full sm:text-sm rounded-md`}
        />
      </div>
    </>
  );
};

export default InputField;

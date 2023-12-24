import React, { useState } from "react";

const RadioField = ({ schema }) => {
  
  const [selectedTab, setSelectedTab] = useState(schema.validate.defaultValue);

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
  };

  return (
    <div className={`mt-5 ${schema.required ? 'required' : ''}`}>
      <label className="block text-sm font-medium text-gray-700">
        {schema.label}
        {schema.description && (
          <span className="ml-1">
            <span className="bg-purple-300 px-2 py-1 text-xs rounded-full">i</span>
          </span>
        )}
      </label>

      <div className="flex space-x-1 mt-1">
        {schema.validate.options.map((option) => (
          <button
            key={option.value}
            id={option.value}
            onClick={() => handleTabChange(option.value)}
            className={`px-3 py-2 text-sm rounded-full focus:outline-none ${
              selectedTab === option.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioField;

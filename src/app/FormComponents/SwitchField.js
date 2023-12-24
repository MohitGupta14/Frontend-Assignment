import React from "react";

const SwitchField = ({ schema }) => {
  const [isChecked, setIsChecked] = React.useState(schema.validate.defaultValue);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={`mt-5 ${schema.validate.required ? 'required' : ''}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={schema.jsonKey}
          checked={isChecked}
          onChange={handleChange}
          disabled={schema.validate.immutable}
          className="mr-2 focus:outline-none"
        />
        <label htmlFor={schema.jsonKey} className="block text-sm font-medium text-gray-700">
          {schema.label}
          {schema.description.length > 0 && (
            <span className="ml-1">
              <span className="bg-purple-300 px-2 py-1 text-xs rounded-full">i</span>
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default SwitchField;

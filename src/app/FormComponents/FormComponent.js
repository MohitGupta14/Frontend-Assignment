import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import SwitchField from "./SwitchField";
const FormComponent = ({ schema }) => {
  const [selectedTab, setSelectedTab] = useState(
    schema.subParameters[0].validate.defaultValue
  );

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
  };

  const renderRadioButtons = (field) => {
    if (field.uiType === "Radio") {
      return (
        <div className="mt-4">
          <div className="flex space-x-4">
            {field.validate.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleTabChange(option.value)}
                className={`py-2 px-4 rounded focus:outline-none ${
                  selectedTab === option.value
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  const renderSubParameters = (fields) => {
    return fields.map((schema, index) => {
      const key = schema.uiType === "Ignore" ? schema.someUniqueIdentifier : index;
  
      if (schema.uiType === "Ignore") {
        if (
          schema.conditions.some(
            (condition) =>
              condition.jsonKey === `pizza_type.type` &&
              condition.op === "==" &&
              condition.value === selectedTab &&
              condition.action === "enable"
          )
        ) {
          return <div key={key}>{renderSubParameters(schema.subParameters)}</div>;
        }
      } else if (schema.uiType === "Select") {
        return <SelectField key={key} schema={schema} />;
      } else if (schema.uiType === "Input") {
        return <InputField key={key} schema={schema} />;
      } else if (schema.uiType === "Switch") {
        return <SwitchField key={key} schema={schema} />;
      }
  
      return null;
    });
  };
  

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{schema.label}</label>
      {schema.subParameters.map((field) => renderRadioButtons(field))}
      {renderSubParameters(schema.subParameters)}
    </div>
  );
};

export default FormComponent;

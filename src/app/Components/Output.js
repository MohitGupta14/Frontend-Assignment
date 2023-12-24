import React, { useState } from "react";
import InputField from "../FormComponents/InputField";
import FormComponent from "../FormComponents/FormComponent";
import SwitchField from "../FormComponents/SwitchField";
import SelectField from "../FormComponents/SelectField";
import RadioField from "../FormComponents/RadioField";

const Output = ({ schemaFromInput }) => {
  console.log(schemaFromInput);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [formData, setFormData] = useState({}); 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
      const isFormValid = schemaFromInput.every((field) => {
      if (field.validate?.required) {
        return formData[field.jsonKey] !== undefined && formData[field.jsonKey] !== "";
      }
      return true;
    });

    if (isFormValid) {
      handleOpenModal();
    } else {
      console.log("Invalid");
    }
  };

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const renderJsonElements = (schema) => {
    return (
      <div isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <div >
            {Object.entries(schema).map(([key, value]) => (
              <p key={key} className="mt-2">
                <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col items-right justify-right p-4">
      <div className="bg-gray-400 text-black p-4 rounded-md w-45vw h-[90vh] resize-none">
        Output 
        <form className="">
          {Array.isArray(schemaFromInput) &&
            schemaFromInput.map((schema, index) => (
              <React.Fragment key={index}>
                {schema.uiType === "Input" && (
                  <InputField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Switch" && (
                  <SwitchField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Select" && (
                  <SelectField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Radio" && (
                  <RadioField
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}

                {schema.uiType === "Group" && (
                  <FormComponent
                    schema={schema}
                    key={schema.sort}
                    updateFormData={updateFormData}
                  />
                )}
              </React.Fragment>
            ))}

          {Array.isArray(schemaFromInput) && schemaFromInput.length > 0 && (
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-700 text-white mt-10 px-4 py-2 rounded"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              {renderJsonElements(formData)}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Output;

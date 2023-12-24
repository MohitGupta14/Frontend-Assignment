// Input.js
import React, { useState } from 'react';

const Input = ({ onSchemaChange }) => {
  const [jsonData, setJsonData] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setJsonData(inputValue);
    setIsValidJson(true);
  };

  const handleParseClick = () => {
    try {
      const parsedJson = JSON.parse(jsonData);
      onSchemaChange(parsedJson);
      setIsValidJson(true);
    } catch (error) {
      setIsValidJson(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-left justify-left p-4">
      <textarea
        className={`bg-gray-900 text-white p-6 rounded-md w-45vw h-[85vh]  resize-none ${
          isValidJson ? '' : 'border-red-500'
        }`}
        placeholder="Type JSON here..."
        value={jsonData}
        onChange={handleInputChange}
      >
      </textarea>
      <button onClick={handleParseClick} className=" bg-blue-400 text-white p-2 rounded m-2">
        Parse JSON
      </button>
      {!isValidJson && (
        <p className="text-red-500 mt-2">Invalid JSON. Please enter valid JSON data.</p>
      )}
      
    </div>
  );
};

export default Input;

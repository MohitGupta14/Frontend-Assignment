// Left.js
"use client"
import React, { useState } from 'react';

const Left = () => {
  const [jsonData, setJsonData] = useState('');
  const [isValidJson, setIsValidJson] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    try {
      // Attempt to parse the input as JSON
      JSON.parse(inputValue);
      setJsonData(inputValue);
      setIsValidJson(true);
    } catch (error) {
      // If parsing fails, set isValidJson to false
      setIsValidJson(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-left justify-left p-4">
      <textarea
        className={`bg-gray-800 text-white p-4 rounded-md w-45vw h-full resize-none ${
          isValidJson ? '' : 'border-red-500'
        }`}
        placeholder="Type JSON here..."
        value={jsonData}
        onChange={handleInputChange}
      />
      {!isValidJson && (
        <p className="text-red-500 mt-2">Invalid JSON. Please enter valid JSON data.</p>
      )}
    </div>
  );
};

export default Left;

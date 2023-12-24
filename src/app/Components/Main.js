"use client"
import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';

const Main = () => {
  const [schemaFromInput, setSchemaFromInput] = useState({});

  const handleSchemaChange = (newSchema) => {
    setSchemaFromInput(newSchema);
  };

  return (
    <div className="flex min-h-screen bg-gray-800">
      <Input onSchemaChange={handleSchemaChange} />
      <Output schemaFromInput={schemaFromInput} />
    </div>
  );
};

export default Main;

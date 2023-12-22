// App.js

import React from 'react';
import Header from './Components/Header'
import Input from './Components/input';
import Output from './Components/Output';
const App = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex bg-gray-900 text-white">
        <Input />
        <Output  />
      </div>
    </div>
  );
};

export default App;

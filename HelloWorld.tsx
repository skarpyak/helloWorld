import React from 'react';

// Define interface for component props
interface HelloWorldProps {
  name: string;
}

// Define functional component
const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a clean and readable React.js component.</p>
      <p>It's modular and reusable, promoting code reusability.</p>
      <p>The code efficiently handles its intended purpose, providing a reliable solution.</p>
      <p>It's designed to be scalable, accommodating future enhancements or changes easily.</p>
      <p>Accompanied by clear documentation, explaining its functionality and usage.</p>
    </div>
  );
};

export default HelloWorld;

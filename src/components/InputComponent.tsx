// src/components/InputComponent.tsx

import React, { useState } from "react";

interface InputComponentProps {
  onSubmit: (input: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <h1>Scavenger Hunt Game</h1>
      <p>Enter the answer to reveal a memory</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;

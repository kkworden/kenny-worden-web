"use client";

import CalculatorContext from '@/contexts/calculator';
import {useState} from "react";
import Numbers from "@/components/calculator/numbers";

export default function Calculator() {
  const [operand, setOperand] = useState("");
  const [operations, setOperations] = useState<string[]>([]);

  return (
    <div className="pt-20">
      <CalculatorContext.Provider
        value={{operand, setOperand, operations, setOperations}}>
        <input
          type="text"
          value={operand}
          onChange={(e) => setOperand(e.target.value)} />
        <Numbers/>
      </CalculatorContext.Provider>
    </div>);
}

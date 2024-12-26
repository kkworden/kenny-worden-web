import { createContext } from "react";

interface CalculatorContext {
  operand: string;
  operations: string[];
  setOperand: (operand: string) => void;
  setOperations: (operations: string[]) => void;
}

// Represents the context of the calculator, as a stack of operations.
export default createContext<CalculatorContext>({
  operand: "",
  operations: [],
  setOperand: (operand: string) => { console.log(operand) },
  setOperations: (operations: string[]) => { console.log(operations) }
});
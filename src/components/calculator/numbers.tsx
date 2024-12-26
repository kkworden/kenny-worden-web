import styles from "@/app/(apps)/calculator/styles.module.css";

import CalculatorContext from '@/contexts/calculator';
import { useContext } from "react";

export default function Numbers() {
  const { operand, setOperand } = useContext(CalculatorContext);

  const updateOperand = (value: string) => {
    setOperand(operand + value);
  }

  const className = `${styles.number} bg-amber-200 w-full h-30`;
  return (<div className="grid grid-cols-3 gap-2">
    { [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) =>
      (<div key={i}>
        <button className={className} onClick={() => updateOperand(`${i}`)}>{i}</button>
      </div>))
    }
  </div>);
}
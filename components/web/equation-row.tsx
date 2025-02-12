import { Equation } from "@/lib/types/equation";
import { Input } from "../ui/input";


interface EquationRowProps {
  equation: Equation;
}

const EquationRow = (props: EquationRowProps) => {
  const { equation } = props;

  return (
    <div className="flex flex-row items-center gap-4 w-full border p-2 rounded-md">
      <Input className="min-w-12 max-w-[300px] font-mono" value={equation.lhs} />
      <span className="text-lg text-gray-500">=</span>
      <Input className="min-w-12 font-mono" value={equation.rhs} />
    </div>
  )
}

export default EquationRow;
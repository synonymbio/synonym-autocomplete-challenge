import { Equation } from "@/lib/types/equation";
import { EquationEnvironment } from "@/lib/types/identifiers";
import EauationInput from "./equation-input";

interface EquationRowProps {
  equation: Equation;
  environment: EquationEnvironment;
  onUpdate?: (equation: Equation) => void;
}

const EquationRow = (props: EquationRowProps) => {
  const { equation, environment, onUpdate } = props;
  return (
    <div className="flex flex-row items-center gap-4 w-full relative">
      <EauationInput
        value={equation.lhs}
        environment={environment}
        onUpdate={onUpdate}
        name="lhs"
        equation={equation}
      />
      <span className="text-lg text-gray-500">=</span>
      <EauationInput
        value={equation.rhs}
        environment={environment}
        onUpdate={onUpdate}
        name="rhs"
        equation={equation}
      />
    </div>
  );
};

export default EquationRow;

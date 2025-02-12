import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Equation } from "@/lib/types/equation";
import EquationRow from "./equation-row";

interface EditorPanelProps {
  equations: Equation[];
  addEquation: () => void;
}

const EditorPanel = (props: EditorPanelProps) => {
  const { equations, addEquation } = props;

  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="text-sm font-medium uppercase tracking-wider">Equation Editor</h1>
        <Button variant="default" size="sm" className="ml-auto" onClick={addEquation}>
          <PlusIcon className="w-4 h-4" />
          Add Equation
        </Button>
      </div>
      <p className="text-sm text-gray-500">Enter your equations below.</p>
      {equations.map((equation, index) => (
        <EquationRow key={index} equation={equation} />
      ))}
    </div>
  )
}

export default EditorPanel;
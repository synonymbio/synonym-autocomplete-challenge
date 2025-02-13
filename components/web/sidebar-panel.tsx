import { EquationEnvironment } from "@/lib/types/identifiers";

interface SidebarPanelProps {
  environment: EquationEnvironment;
}

const SidebarPanel = (props: SidebarPanelProps) => {
  const { environment } = props;

  // TODO: Maybe we should sort these alphabetically?
  const functions = environment.functions.map(f => f.code).join("\n");
  const variables = environment.variables.map(v => v.code).join("\n");
  const constants = environment.constants.map(c => c.code).join("\n");

  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      <h1 className="text-md font-medium">Equation Environment</h1>
      <p className="text-xs font-medium uppercase tracking-wider">Functions</p>
      <pre className="text-xs text-purple-500">
        {functions}
      </pre>
      <p className="text-xs font-medium uppercase tracking-wider">Variables</p>
      <pre className="text-xs text-indigo-500">
        {variables}
      </pre>
      <p className="text-xs font-medium uppercase tracking-wider">Constants</p>
      <pre className="text-xs text-orange-500">
        {constants}
      </pre>
    </div>
  )
}

export default SidebarPanel;
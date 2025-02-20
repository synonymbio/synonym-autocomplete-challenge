"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useState } from "react";
import { Equation } from "@/lib/types/equation";
import Header from "@/components/web/header";
import SidebarPanel from "@/components/web/sidebar-panel";
import EditorPanel from "@/components/web/editor-panel";
import { generateUUID } from "@/lib/utils";
import { EquationEnvironment } from "@/lib/types/identifiers";

// Feel free to change these! They're just for testing, and meant to mimic
// the IDE environment in which a user would be writing equations.
const initialIdentifiers = {
  variables: [
    "x",
    "y",
    "z",
    "Foo",
    "Bar",
    "Baz",
    "Variable1",
    "Variable2",
    "Variable3",
    "variable_1",
    "variable_2",
    "variable_3",
  ],
  functions: [
    "SQRT",
    "LOG",
    "EXP",
    "SIN",
    "COS",
    "TAN",
    "ROUND",
    "CEIL",
    "FLOOR",
    "ABS",
    "SIGN",
    "POW",
    "MOD",
  ],
  constants: [
    "pi",
    "e",
    "c",
    "SomeMagicConstant",
    "T_STP",
    "P_STP",
  ],
}

const initialEnvironment: EquationEnvironment = {
  variables: initialIdentifiers.variables.map(v => ({ code: v, type: "variable" })),
  functions: initialIdentifiers.functions.map(f => ({ code: f, type: "function" })),
  constants: initialIdentifiers.constants.map(c => ({ code: c, type: "constant" })),
}

// Defines the width of each panel in %
const editorPanelWidth = 70;
const sidebarPanelWidth = 100 - editorPanelWidth;

export default function Home() {
  const [equations, setEquations] = useState<Equation[]>([]);
  const [environment, setEnvironment] = useState<EquationEnvironment>(initialEnvironment);

  const addEquation = () => {
    setEquations([...equations, { id: generateUUID(), lhs: "", rhs: "" }]);
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col h-screen">
        <Header />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={editorPanelWidth}>
            <EditorPanel equations={equations} addEquation={addEquation} environment={environment} />
          </ResizablePanel> 
          <ResizableHandle withHandle/>
          <ResizablePanel defaultSize={sidebarPanelWidth}>
            <SidebarPanel environment={environment} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}

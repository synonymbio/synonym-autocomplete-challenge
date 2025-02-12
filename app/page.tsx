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

// Defines the width of each panel in %
const editorPanelWidth = 70;
const sidebarPanelWidth = 100 - editorPanelWidth;

export default function Home() {
  const [equations, setEquations] = useState<Equation[]>([]);
  const [rawText, setRawText] = useState<string>("");

  const addEquation = () => {
    setEquations([...equations, { id: generateUUID(), lhs: "", rhs: "" }]);
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col h-screen">
        <Header />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={editorPanelWidth}>
            <EditorPanel equations={equations} addEquation={addEquation} />
          </ResizablePanel> 
          <ResizableHandle/>
          <ResizablePanel defaultSize={sidebarPanelWidth}>
            <SidebarPanel rawText={rawText} setRawText={setRawText} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}

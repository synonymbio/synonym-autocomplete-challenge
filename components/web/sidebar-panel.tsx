// import { faker } from '@faker-js/faker';

import { LucideDice2 } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface SidebarPanelProps {
  rawText: string;
  setRawText: (rawText: string) => void;
}

const SidebarPanel = (props: SidebarPanelProps) => {
  const { rawText, setRawText } = props;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(e.target.value);
  }

  const generateRandomIdentifiers = () => {
    const num = 10;
    // const identifiers = Array.from({ length: num }, () => faker.word.n());
    // const identifiers = rawText.split("\n").map((line) => line.trim());
    // const randomIdentifiers = identifiers.map(() => generateUUID());
    // setRawText(randomIdentifiers.join("\n"));
  }

  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      <h1 className="text-sm font-medium uppercase tracking-wider">Equation Context</h1>
      <p className="text-sm text-gray-500">Enter autocomplete identifiers here. These should be detected as identifiers in the autocomplete on the left.</p>
      <Textarea
        className="h-full w-full"
        placeholder="Enter identifiers here"
        value={rawText}
        onChange={handleTextChange}
      />
      <Button variant="secondary" size="sm" className="ml-auto" onClick={generateRandomIdentifiers}>
        <LucideDice2 className="w-4 h-4" />
        Generate Random
      </Button>
    </div>
  )
}

export default SidebarPanel;
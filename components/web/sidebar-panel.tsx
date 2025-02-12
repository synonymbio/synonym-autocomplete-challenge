import { Textarea } from "../ui/textarea";

interface SidebarPanelProps {
  rawText: string;
  setRawText: (rawText: string) => void;
}

const SidebarPanel = (props: SidebarPanelProps) => {
  const { rawText, setRawText } = props;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(e.target.value);
  }

  return (
    <div className="h-full w-full p-4 flex flex-col gap-4">
      <h1 className="text-sm font-medium uppercase tracking-wider">Equation Context</h1>
      <p className="text-sm text-gray-500">Enter autocomplete identifiers here. These should show up in the autocomplete on the left.</p>
      <Textarea
        className="h-full w-full"
        placeholder="Enter identifiers here"
        value={rawText}
        onChange={handleTextChange}
      />
    </div>
  )
}

export default SidebarPanel;
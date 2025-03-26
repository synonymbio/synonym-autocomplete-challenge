import { Equation } from "@/lib/types/equation";
import { Input } from "../ui/input";
import { useState, useRef, useCallback } from "react";
import { EquationEnvironment } from "@/lib/types/identifiers";
import Autocomplete from "./autocomplete";

interface EauationInputProps {
  equation: Equation;
  environment: EquationEnvironment;
  onUpdate?: (equation: Equation) => void;
  value: string;
  name: "lhs" | "rhs";
}

const EauationInput = (props: EauationInputProps) => {
  const { equation, environment, onUpdate, value, name } = props;
  const [expression, setExpression] = useState<string>(value);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const [cursorCoords, setCursorCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback(
    (value: string) => {
      setExpression(value);
      setShowAutocomplete(true);
    },
    [equation]
  );

  // Debounced version of cursor position handler
  const getCursorPosition = (
    input: HTMLInputElement,
    selectionStart: number
  ) => {
    const measureDiv = document.createElement("div");
    measureDiv.style.font = window.getComputedStyle(input).font;
    measureDiv.style.visibility = "hidden";
    measureDiv.style.position = "absolute";
    measureDiv.style.whiteSpace = "pre";
    document.body.appendChild(measureDiv);

    const textBeforeCursor = input.value.slice(0, selectionStart);
    measureDiv.textContent = textBeforeCursor;
    const textWidth = measureDiv.offsetWidth;

    document.body.removeChild(measureDiv);

    const rect = input.getBoundingClientRect();
    const x = rect.left + textWidth;
    const y = rect.bottom;

    setCursorCoords({ x, y });
  };

  const handleCursorPositionChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      const selectionStart = input.selectionStart || 0;
      setCursorPosition(selectionStart);
      getCursorPosition(input, selectionStart);
    },
    []
  );

  const handleSuggestionSelect = (suggestion: string) => {
    const beforeCursor = expression.slice(0, cursorPosition);
    const afterCursor = expression.slice(cursorPosition);
    const words = beforeCursor.split(/[\s+\-*/=()]/);
    const lastWord = words[words.length - 1];
    const newValue =
      beforeCursor.slice(0, -lastWord.length) + suggestion + afterCursor;
    setExpression(newValue);
    if (onUpdate) {
      onUpdate({ ...equation, [name]: newValue });
    }
    setShowAutocomplete(false);
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        className="min-w-12 max-w-[300px] font-mono"
        value={expression}
        onChange={(e) => handleInputChange(e.target.value)}
        onSelect={handleCursorPositionChange}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setShowAutocomplete(false);
          }
        }}
      />
      {showAutocomplete && (
        <Autocomplete
          value={expression}
          environment={environment}
          onSelect={handleSuggestionSelect}
          onClose={() => setShowAutocomplete(false)}
          style={{
            position: "fixed",
            left: `${cursorCoords.x}px`,
            top: `${cursorCoords.y}px`,
          }}
        />
      )}
    </div>
  );
};

export default EauationInput;

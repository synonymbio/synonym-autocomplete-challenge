import { useEffect, useRef, useState, useMemo } from "react";
import { Identifier } from "@/lib/types/identifiers";

interface AutocompleteProps {
  value: string;
  environment: {
    variables: Identifier[];
    functions: Identifier[];
    constants: Identifier[];
  };
  onSelect: (suggestion: string) => void;
  onClose: () => void;
  style?: React.CSSProperties;
}

const Autocomplete = ({
  value,
  environment,
  onSelect,
  onClose,
  style,
}: AutocompleteProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Get all suggestions that match the current word
  const getSuggestions = () => {
    const allIdentifiers = [
      ...environment.variables,
      ...environment.functions,
      ...environment.constants,
    ];

    let suggestions: string[] = [];
    suggestions =
      allIdentifiers
        .filter((identifier) =>
          identifier.code.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((identifier) => identifier.code) || [];

    return suggestions.includes(value) ? suggestions : [value, ...suggestions];
  };

  const suggestions: string[] = useMemo<string[]>(getSuggestions, [value]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedItemRef.current && containerRef.current) {
      selectedItemRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.key === "Enter") {
        e.preventDefault();
        if (suggestions.length > 0) {
          onSelect(suggestions[selectedIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % suggestions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, suggestions, onSelect, onClose]);

  // Reset selected index when suggestions change
  useEffect(() => {
    setSelectedIndex(0);
  }, [suggestions]);

  if (suggestions.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="z-50 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto min-w-[200px]"
      style={style}
    >
      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion}
          ref={index === selectedIndex ? selectedItemRef : null}
          className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
            index === selectedIndex ? "bg-gray-100" : ""
          }`}
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default Autocomplete;

import { useEffect, useState } from "react";

function useModifierKey(): string {
  const [modifierKey, setModifierKey] = useState("Ctrl");

  useEffect(() => {
    if (navigator.platform.toUpperCase().includes("MAC")) {
      setModifierKey("⌘");
    }
  }, []);

  return modifierKey;
}

export { useModifierKey };

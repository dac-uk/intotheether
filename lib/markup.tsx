import type { ReactNode } from "react";

/**
 * Renders the minimal inline markup used in content paragraphs:
 * **bold**, `code`, *emphasis*. Anything else passes through as text.
 */
export function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export const glowText: Record<string, string> = {
  cyan: "neon-cyan",
  magenta: "neon-magenta",
  violet: "neon-violet",
  amber: "neon-amber",
  green: "neon-green",
};

export const glowBorder: Record<string, string> = {
  cyan: "glow-border-cyan",
  magenta: "glow-border-magenta",
  violet: "glow-border-violet",
  amber: "glow-border-amber",
  green: "glow-border-green",
};

export const glowHex: Record<string, string> = {
  cyan: "#00e5ff",
  magenta: "#ff2ec4",
  violet: "#9d6bff",
  amber: "#ffc24b",
  green: "#3dff9e",
};

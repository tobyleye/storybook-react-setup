import { ReactNode } from "react";

export default function Button({
  color,
  children,
  onClick,
}: {
  color: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: "white",
        background:
          color === "primary"
            ? "var(--primary-color)"
            : "var(--secondary-color)",
      }}
    >
      {children}
    </button>
  );
}

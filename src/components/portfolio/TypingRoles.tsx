import { useEffect, useState } from "react";

const ROLES = [
  "Streamline Operations",
  "Implement Systems",
  "Optimize Processes",
  "Build Scalable Workflows",
];

const ANIMATED_GRADIENT = "linear-gradient(90deg, #fec438, #f7b733)";

export function TypingRoles() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 35 : 70;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <div className="flex items-center justify-center gap-2 text-xl md:text-3xl font-semibold min-h-[2.5rem]">
      <span className="text-[#0f0c0a]">I</span>
      <span
        style={{
          background: ANIMATED_GRADIENT,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        {text}
      </span>
      <span
        className="animate-caret inline-block w-[2px] h-[1.1em] translate-y-[2px]"
        style={{ background: "#f77b31" }}
        aria-hidden
      />
    </div>
  );
}

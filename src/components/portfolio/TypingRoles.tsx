import { useEffect, useState } from "react";

const ROLES = [
  "I Streamline Operations",
  "I Implement Systems",
  "I Optimize Processes",
  "I Build Scalable Workflows",
];

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
    <div className="flex items-center justify-center gap-1 text-lg md:text-2xl font-medium text-[var(--ink)] min-h-[2.25rem]">
      <span>{text}</span>
      <span
        className="animate-caret inline-block w-[2px] h-[1.1em] translate-y-[2px]"
        style={{ background: "var(--brand-orange)" }}
        aria-hidden
      />
    </div>
  );
}

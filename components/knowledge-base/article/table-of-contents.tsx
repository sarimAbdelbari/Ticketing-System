"use client";

export function TableOfContents() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "advanced-features", title: "Advanced Features" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
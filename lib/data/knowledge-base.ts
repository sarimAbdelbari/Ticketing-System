export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  readTime: number;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Getting Started with the Ticketing System",
    description: "Learn the basics of our ticketing system and how to create your first ticket.",
    category: "Basics",
    tags: ["beginner", "tickets", "guide"],
    author: "John Doe",
    createdAt: "2024-03-15T10:00:00Z",
    readTime: 5
  },
  {
    id: "2",
    title: "Advanced Ticket Management",
    description: "Deep dive into ticket prioritization, assignment, and workflow management.",
    category: "Advanced",
    tags: ["advanced", "management", "workflow"],
    author: "Sarah Wilson",
    createdAt: "2024-03-16T14:30:00Z",
    readTime: 8
  },
  {
    id: "3",
    title: "Customizing Dashboard Widgets",
    description: "Learn how to customize your dashboard layout and create custom widgets.",
    category: "Customization",
    tags: ["dashboard", "widgets", "customization"],
    author: "Mike Johnson",
    createdAt: "2024-03-17T09:15:00Z",
    readTime: 6
  },
  {
    id: "4",
    title: "Integration with Third-party Tools",
    description: "Step-by-step guide to integrating external tools and services.",
    category: "Integration",
    tags: ["integration", "tools", "setup"],
    author: "Emily Brown",
    createdAt: "2024-03-18T11:45:00Z",
    readTime: 10
  },
  {
    id: "5",
    title: "Reporting and Analytics",
    description: "Understanding ticket analytics and generating custom reports.",
    category: "Analytics",
    tags: ["reports", "analytics", "data"],
    author: "Alex Chen",
    createdAt: "2024-03-19T13:20:00Z",
    readTime: 7
  }
];
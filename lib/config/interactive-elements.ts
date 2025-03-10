import {
  LucideIcon,
  Home,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Plus,
  Edit,
  Trash,
  Download,
  Upload,
  RefreshCw,
  ChevronDown,
  Sun,
  Moon,
  Laptop,
  ArrowLeft,
  Share,
  ThumbsUp,
  ThumbsDown,
  Link as LinkIcon,
  Book,
  Clock,
  Calendar,
} from "lucide-react";

interface InteractiveElement {
  id: string;
  label: string;
  type: "button" | "link" | "input" | "select" | "modal" | "toggle" | "menu" | "chart" | "form" | "card";
  description: string;
  location: string;
  icon?: LucideIcon;
  action?: string;
  children?: InteractiveElement[];
}

export const interactiveElements: Record<string, InteractiveElement[]> = {
  navigation: [
    {
      id: "nav-logo",
      label: "Logo",
      type: "link",
      description: "Returns to dashboard",
      location: "Header",
      action: "Navigate to dashboard"
    },
    {
      id: "theme-toggle",
      label: "Theme Toggle",
      type: "toggle",
      description: "Switch between light/dark modes",
      location: "Header",
      children: [
        {
          id: "light-mode",
          label: "Light Mode",
          type: "button",
          description: "Enable light theme",
          icon: Sun,
          action: "Switch to light theme"
        },
        {
          id: "dark-mode",
          label: "Dark Mode",
          type: "button",
          description: "Enable dark theme",
          icon: Moon,
          action: "Switch to dark theme"
        },
        {
          id: "system-mode",
          label: "System Mode",
          type: "button",
          description: "Use system theme",
          icon: Laptop,
          action: "Use system theme"
        }
      ]
    },
    {
      id: "back-navigation",
      label: "Back Navigation",
      type: "button",
      description: "Return to previous page",
      location: "Multiple pages",
      icon: ArrowLeft,
      action: "Navigate back"
    }
  ],
  knowledgeBase: [
    {
      id: "article-list",
      label: "Article Cards",
      type: "card",
      description: "Clickable article previews",
      location: "Knowledge Base List",
      icon: Book,
      children: [
        {
          id: "article-metadata",
          label: "Article Metadata",
          type: "link",
          description: "Author and reading time information",
          icon: Clock
        },
        {
          id: "article-tags",
          label: "Article Tags",
          type: "button",
          description: "Category and topic tags",
          action: "Filter by tag"
        }
      ]
    },
    {
      id: "article-feedback",
      label: "Article Feedback",
      type: "form",
      description: "Collect user feedback on articles",
      location: "Article Detail",
      children: [
        {
          id: "helpful-button",
          label: "Helpful",
          type: "button",
          description: "Mark article as helpful",
          icon: ThumbsUp
        },
        {
          id: "not-helpful-button",
          label: "Not Helpful",
          type: "button",
          description: "Mark article as not helpful",
          icon: ThumbsDown
        }
      ]
    },
    {
      id: "article-share",
      label: "Share Article",
      type: "button",
      description: "Share article on social media",
      location: "Article Detail",
      icon: Share,
      children: [
        {
          id: "copy-link",
          label: "Copy Link",
          type: "button",
          description: "Copy article URL",
          icon: LinkIcon
        }
      ]
    }
  ],
  dashboard: [
    {
      id: "chart-filters",
      label: "Chart Filters",
      type: "select",
      description: "Filter dashboard chart data",
      location: "Dashboard",
      icon: Filter,
      children: [
        {
          id: "priority-filter",
          label: "Priority Filter",
          type: "select",
          description: "Filter by priority level"
        },
        {
          id: "agent-filter",
          label: "Agent Filter",
          type: "select",
          description: "Filter by assigned agent"
        },
        {
          id: "date-range",
          label: "Date Range",
          type: "input",
          description: "Filter by date range",
          icon: Calendar
        }
      ]
    },
    {
      id: "chart-actions",
      label: "Chart Actions",
      type: "button",
      description: "Chart download and type toggle",
      location: "Dashboard",
      children: [
        {
          id: "download-chart",
          label: "Download",
          type: "button",
          description: "Download chart data",
          icon: Download
        },
        {
          id: "change-chart-type",
          label: "Change Type",
          type: "button",
          description: "Toggle chart visualization",
          icon: RefreshCw
        }
      ]
    }
  ],
  profile: [
    {
      id: "profile-form",
      label: "Profile Form",
      type: "form",
      description: "Edit profile information",
      location: "Profile Page",
      icon: User,
      children: [
        {
          id: "avatar-upload",
          label: "Avatar Upload",
          type: "input",
          description: "Upload profile picture",
          icon: Upload
        },
        {
          id: "profile-fields",
          label: "Profile Fields",
          type: "input",
          description: "Edit name and email"
        }
      ]
    },
    {
      id: "notification-settings",
      label: "Notification Settings",
      type: "toggle",
      description: "Manage notification preferences",
      location: "Profile Page",
      icon: Bell
    }
  ]
};
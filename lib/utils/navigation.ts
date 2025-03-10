import { navigationLinks } from "@/lib/config/navigation";

interface BreadcrumbItem {
  href: string;
  label: string;
}

export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  let currentPath = "";
  paths.forEach((path) => {
    currentPath += `/${path}`;
    
    // Handle dynamic routes
    if (path.match(/^\[.*\]$/)) {
      const id = path.slice(1, -1);
      const parentPath = currentPath.split("/").slice(0, -1).join("/");
      const parentItem = navigationLinks.find((item) => item.href === parentPath);
      
      if (parentItem) {
        const label = path === "[id]" ? `#${id}` : 
                     path === "[slug]" ? "Article" : 
                     path.slice(1, -1);
        items.push({
          href: currentPath,
          label: `${parentItem.label} ${label}`,
        });
      }
      return;
    }

    // Find matching navigation item
    const navItem = navigationLinks.find((item) => item.href === currentPath);
    if (navItem) {
      items.push({
        href: currentPath,
        label: navItem.label,
      });
    } else {
      // Fallback for paths not in navigation
      items.push({
        href: currentPath,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      });
    }
  });

  return items;
}

export function isValidRoute(pathname: string): boolean {
  const validPaths = navigationLinks.map(link => link.href);
  return validPaths.includes(pathname) || validPaths.some(path => pathname.startsWith(`${path}/`));
}
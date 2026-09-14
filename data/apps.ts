export type AppId = "finder" | "services" | "notes" | "mail";

export type AppDefinition = {
  id: AppId;
  name: string;
  href: string;
  desktopLabel: string;
};

export const apps: AppDefinition[] = [
  { id: "finder", name: "Work", href: "/work", desktopLabel: "Work" },
  { id: "services", name: "Services", href: "/services", desktopLabel: "Services" },
  { id: "notes", name: "Notes", href: "/about", desktopLabel: "About" },
  { id: "mail", name: "Mail", href: "/contact", desktopLabel: "Mail" },
];

export function getAppForPath(pathname: string): {
  id: AppId;
  name: string;
  title: string;
} | null {
  if (pathname === "/work" || pathname.startsWith("/work/")) {
    return { id: "finder", name: "Work", title: "Work" };
  }
  if (pathname === "/services" || pathname.startsWith("/services/")) {
    return { id: "services", name: "Services", title: "Services" };
  }
  if (pathname === "/about") {
    return { id: "notes", name: "Notes", title: "About" };
  }
  if (pathname === "/contact") {
    return { id: "mail", name: "Mail", title: "New Message" };
  }
  return null;
}

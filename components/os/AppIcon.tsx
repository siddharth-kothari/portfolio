import Image from "next/image";
import { cn } from "@/lib/utils";
import type { AppId } from "@/data/apps";

type IconId = AppId | "safari" | "trash";

const sources: Record<IconId, string> = {
  finder: "/icons/icon-work.png",
  services: "/icons/icon-services.png",
  notes: "/icons/icon-notes.png",
  mail: "/icons/icon-mail.png",
  safari: "/icons/icon-safari.png",
  trash: "/icons/icon-trash.png",
};

export function AppIcon({
  id,
  className,
  size = "md",
}: {
  id: IconId;
  className?: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-11 w-11" : "h-14 w-14";

  return (
    <span className={cn("app-icon relative block", box, className)}>
      <Image
        src={sources[id]}
        alt=""
        fill
        sizes="56px"
        quality={95}
        className="object-cover"
      />
    </span>
  );
}

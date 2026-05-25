import { cn } from "@/lib/cn";

/**
 * The right-hand viewport in our app shell uses an internal scroll region
 * (so the sidebar/columns stay pinned). On mobile the page itself scrolls.
 */
export function ScrollPane({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "scroll-thin h-full overflow-y-auto overflow-x-hidden md:overscroll-contain",
        className
      )}
    >
      {children}
    </div>
  );
}

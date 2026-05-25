import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center px-6 py-16 md:px-12">
      <div className="eyebrow">404</div>
      <h1 className="h-display mt-3 text-[clamp(40px,8vw,120px)] text-ink-1000">
        Lost the frame.
      </h1>
      <p className="mt-4 max-w-xl text-[14px] text-ink-800">
        That route doesn’t exist. Head back to the index or browse the
        project list.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full border border-ink-1000 bg-ink-1000 px-4 py-2 text-[13px] text-ink-0 hover:bg-transparent hover:text-ink-1000"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-ink-500 px-4 py-2 text-[13px] text-ink-900 hover:border-ink-1000 hover:text-ink-1000"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

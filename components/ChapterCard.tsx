import { story, type BridgeId } from "@/lib/content";

type ChapterCardProps = {
  id: BridgeId;
};

export function ChapterCard({ id }: ChapterCardProps) {
  const chapter = story.bridges[id];

  return (
    <section
      id={id}
      data-gsap="chapter"
      className="relative flex min-h-0 items-center justify-center bg-background px-6 py-20 md:min-h-[100dvh] md:px-8 md:py-24"
      aria-label={chapter.title}
    >
      <div
        data-gsap="chapter-inner"
        className="mx-auto max-w-4xl text-center will-change-transform"
      >
        {chapter.roman ? (
          <p className="font-display text-sm tracking-[0.35em] text-muted">
            {chapter.roman}
          </p>
        ) : null}
        <p className="mt-6 font-display text-3xl leading-[1.15] tracking-tight text-stone md:text-6xl lg:text-7xl">
          {chapter.line}
        </p>
      </div>
    </section>
  );
}

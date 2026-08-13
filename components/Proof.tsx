import { brand, reviews, story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section
      id="proof"
      className="border-y border-hairline bg-background px-4 py-24 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="font-display text-sm tracking-[0.2em] text-muted">
            {story.proof.title}
          </p>
          <p className="mt-6 font-display text-7xl tracking-tight text-stone md:text-8xl">
            {brand.rating}
          </p>
          <p className="mt-3 text-sm text-muted">
            From {brand.reviewCount} Google reviews
          </p>
          <a
            href={brand.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-stone/50 transition-colors hover:text-stone"
          >
            View on Google
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-8">
          {reviews.map((review, i) => (
            <Reveal key={review.quote} delay={0.1 * (i + 1)}>
              <blockquote className="border-t border-hairline pt-6">
                <p className="font-display text-2xl leading-snug tracking-tight text-stone md:text-3xl">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-5 text-[11px] uppercase tracking-[0.2em] text-muted">
                  {review.source}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

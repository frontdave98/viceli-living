"use client";

import { craftSteps, story } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Craft() {
  return (
    <section
      id="craft"
      data-gsap="craft"
      className="relative border-y border-hairline bg-background"
    >
      {/* Mobile: stacked story steps */}
      <div className="px-4 py-24 md:hidden">
        <Reveal>
          <p className="font-display text-sm tracking-[0.35em] text-muted">
            {story.craft.roman}
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-stone">
            {story.craft.headline}
          </h2>
        </Reveal>
        <ol className="mt-14 space-y-12">
          {craftSteps.map((step, i) => (
            <Reveal key={step.number} delay={0.05 * i} className="border-t border-hairline pt-6">
              <span className="font-display text-sm tracking-[0.2em] text-muted">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-3xl tracking-tight text-stone">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Desktop: pinned sequential story */}
      <div
        data-gsap="craft-pin"
        className="relative hidden md:block md:h-[100dvh] md:overflow-hidden"
      >
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-12 gap-10 px-8 py-24">
          <div className="col-span-5 flex flex-col justify-center">
            <p className="font-display text-sm tracking-[0.35em] text-muted">
              {story.craft.roman}
            </p>
            <h2 className="mt-4 font-display text-5xl tracking-tight text-stone lg:text-6xl">
              {story.craft.headline}
            </h2>

            <div className="relative mt-16 min-h-[8rem]">
              {craftSteps.map((step, i) => (
                <div
                  key={step.number}
                  data-gsap="craft-step"
                  data-step-index={i}
                  className="absolute inset-x-0 top-0"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-muted">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-4xl tracking-tight text-stone lg:text-5xl">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7 flex flex-col justify-center border-l border-hairline pl-10 lg:pl-16">
            <div className="relative min-h-[10rem]">
              {craftSteps.map((step, i) => (
                <p
                  key={step.number}
                  data-gsap="craft-copy"
                  data-step-index={i}
                  className="absolute inset-x-0 top-0 max-w-[36ch] text-lg leading-relaxed text-stone/70 lg:text-xl"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {step.description}
                </p>
              ))}
            </div>

            <div className="mt-16 flex gap-2" aria-hidden>
              {craftSteps.map((step, i) => (
                <span
                  key={step.number}
                  data-gsap="craft-dot"
                  data-step-index={i}
                  className="h-px w-10 bg-stone/20 transition-colors"
                  style={{ backgroundColor: i === 0 ? "rgba(230,226,220,0.7)" : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

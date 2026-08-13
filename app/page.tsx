import { Atelier } from "@/components/Atelier";
import { ChapterCard } from "@/components/ChapterCard";
import { ChapterRail } from "@/components/ChapterRail";
import { CloseFooter } from "@/components/CloseFooter";
import { Collections } from "@/components/Collections";
import { Craft } from "@/components/Craft";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Residences } from "@/components/Residences";
import { ScrollExperience } from "@/components/ScrollExperience";
import { Showrooms } from "@/components/Showrooms";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <SiteNav />
      <ChapterRail />
      <main className="flex-1">
        <ScrollExperience>
          <Hero />
          <Atelier />
          <ChapterCard id="bridge-pieces" />
          <Collections />
          <Craft />
          <ChapterCard id="bridge-rooms" />
          <Residences />
          <Proof />
          <ChapterCard id="bridge-visit" />
          <Showrooms />
          <CloseFooter />
        </ScrollExperience>
      </main>
    </>
  );
}

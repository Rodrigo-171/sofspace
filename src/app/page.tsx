import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Manifesto } from "@/components/home/Manifesto";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();
  const [heroProject, ...rest] = featured;

  return (
    <>
      <Hero project={heroProject} />
      <FeaturedProjects projects={rest.length ? rest : featured} />
      <Manifesto />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}

import ParallaxHero from "@/components/hero-home";
import { getExcursions } from "@/lib/activities";

export default async function Home() {
  const excursions = await getExcursions();

  return (
    <>
      <ParallaxHero excursions={excursions} />
    </>
  );
}

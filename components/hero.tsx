import GridHero from "./grid-hero";
import InfoBanner from "./info-banner";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm inline-flex text-gray-500 mb-2">
            activities &gt; canyoning &gt; guadalmina
          </p>
          <h1 className="text-4xl font-semibold mb-2 tracking-tight">
            Guadalmina Canyon
          </h1>
          <h2 className="text-xl text-gray-500 mb-4">
            The Best Canyoning Experience Near Marbella
          </h2>
        </div>
        <p className="flex flex-col space-y-2 text-right text-cyan-700  italic text-lg">
          Every day
          <span className="text-5xl font-extrabold">45€ </span>{" "}
        </p>
      </div>
      <GridHero />
      <InfoBanner />
    </div>
  );
};
export default Hero;

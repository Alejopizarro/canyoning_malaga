import Image from "next/image";
import { Button } from "./ui/button";

const HeroHome = () => {
  return (
    <div className="relative h-screen">
      {/* Capa 1: Fondo - z-0 */}
      <Image
        src="/bg-home-mobile.png"
        alt="Fondo"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay negro sutil */}
      <div className="absolute inset-0 bg-black/20 z-1" />

      {/* Contenedor: Jumpers, Texto y Botón */}
      <div className="absolute top-[20vh] sm:top-[12vh] xl:top-[25vh] left-0 w-full">
        {/* Jumpers */}
        <div className="relative w-full z-3 h-[348px] sm:h-[420px]">
          <Image
            src="/users-jumping.png"
            alt="Personas"
            fill
            priority
            className="object-contain object-bottom drop-shadow-lg"
          />
        </div>

        <div className="absolute w-full -top-[17vh] sm:top-[4vh] flex flex-col items-center px-2 sm:px-0">
          {/* Texto */}
          <h1
            className="text-center text-white font-extrabold tracking-tight leading-none px-4 mb-6 sm:mb-8"
            style={{
              textShadow: "8px 12px 60px rgba(0,0,0,0.8)",
            }}
          >
            <span className="block text-[4rem] relative z-2 sm:text-[6rem] md:text-[7rem]">
              Your Next Adventure
            </span>
            <span className="block text-[4rem] -mt-2 sm:-mt-4 z-2 relative sm:z-3 sm:text-[6rem] md:text-[7rem]">
              Begins Here!
            </span>
          </h1>
          <Button
            size="lg"
            className="mt-80 sm:mt-20 z-5 bg-primary-light font-semibold text-black text-lg hover:bg-primary-light/80 hover:text-white shadow-lg"
          >
            Explore activities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

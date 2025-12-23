import Image from "next/image";

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

      {/* Capa 2: Jumpers - z-10 */}
      <div className="absolute top-[15vh] md:top-[3vh] left-0 w-full h-[55vh] md:h-[85vh] z-10">
        <Image
          src="/users-jumping.png"
          alt="Personas"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>

      {/* Capa 3: Texto */}
      <div className="absolute bottom-[15vh] inset-0 flex items-end justify-center pb-[15vh]">
        <h1
          className="text-center text-white font-extrabold leading-tight px-4"
          style={{
            fontSize: "clamp(4.5rem, 10vw, 5rem)",
            textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          <span className="relative block z-0">Your Adventure</span>
          <span className="relative block z-20">Begins Here!</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroHome;

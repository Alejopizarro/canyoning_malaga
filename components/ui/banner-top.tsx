import Link from "next/link";

const BannerTop = () => {
  return (
    <div className="bg-yellow-300 font-semibold text-center text-sm py-2 px-4 w-full absolute fixed top-0 z-50">
      <p>
        Summer Camp 2026 for Kids -{" "}
        <Link className="underline" href="/summer-camp">
          Register Now!
        </Link>
      </p>
    </div>
  );
};

export default BannerTop;

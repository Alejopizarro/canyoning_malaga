"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-[90vh] px-4 flex flex-col space-y-4 max-w-6xl mx-auto justify-center">
      <h1 className="text-6xl font-semibold">Oops... this page is on dev 😞</h1>
      <p className="text-xl text-gray-600">
        We are working hard to bring it to you soon!
      </p>
      <p className="text-md font-semibold">
        Please go to Activities page to see all excursions
      </p>
      <Button onClick={() => router.push("/activities")} className="mt-4 w-fit">
        Go to Activities
      </Button>
    </div>
  );
}

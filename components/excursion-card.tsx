import { Excursion } from "@/app/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";

type ExcursionCardProps = {
  excursion: Excursion;
};

const ExcursionCard = (props: ExcursionCardProps) => {
  const { excursion } = props;

  const levelLabels: { [key: string]: string } = {
    easy: "Easy",
    moderate: "Moderate",
    advanced: "Advanced",
  };

  const levelColors: { [key: string]: string } = {
    easy: "bg-green-500",
    moderate: "bg-yellow-500",
    advanced: "bg-red-500",
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader>
        <Image
          width={400}
          height={250}
          src={excursion.mainImage.src}
          alt={excursion.mainImage.alt}
          className="rounded-md mb-4 object-cover h-48 w-full"
        />

        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{excursion.category}</Badge>
          <Badge className={levelColors[excursion.level]}>
            {levelLabels[excursion.level]}
          </Badge>
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="max-w-lg text-lg">{excursion.title}</CardTitle>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">
              {excursion.price}
            </span>
            <span className="text-sm text-gray-500">/person</span>
          </div>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm">
          <MapPin className="w-4 h-4" />
          {excursion.province}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{excursion.description}</p>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary-dark">
          Book now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExcursionCard;

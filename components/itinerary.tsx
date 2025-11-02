import { MapPin, User, Clock } from "lucide-react";

interface ItineraryStep {
  icon: "start" | "walk" | "canyon" | "pool" | "end";
  title: string;
  description: string;
  duration?: string;
}

const itinerarySteps: ItineraryStep[] = [
  {
    icon: "start",
    title: "Meeting Point",
    description: "Parque Torre Leonera",
    duration: undefined,
  },
  {
    icon: "walk",
    title: "On Foot",
    description: "Walk to canyon entrance",
    duration: "10 minutes",
  },
  {
    icon: "canyon",
    title: "Canyon of the Angosturas",
    description: "Guided tour through the canyon",
    duration: "2.5 hours",
  },
  {
    icon: "pool",
    title: "Charca de los Tubos",
    description: "Guided tour",
    duration: undefined,
  },
  {
    icon: "walk",
    title: "On Foot",
    description: "Walk back to meeting point",
    duration: "20 minutes",
  },
  {
    icon: "end",
    title: "Return to",
    description: "Parque Torre Leonera",
    duration: undefined,
  },
];

const getIcon = (type: string) => {
  const iconClass = "w-5 h-5";
  switch (type) {
    case "start":
    case "end":
      return <MapPin className={iconClass} />;
    case "walk":
      return <User className={iconClass} />;
    case "canyon":
    case "pool":
      return <Clock className={iconClass} />;
    default:
      return <MapPin className={iconClass} />;
  }
};

const getStepStyles = (type: string) => {
  switch (type) {
    case "start":
    case "end":
      return {
        container: "w-14 h-14 bg-orange-500 text-white",
        isMainStop: true,
      };
    case "canyon":
    case "pool":
      return {
        container: "w-14 h-14 bg-blue-900 text-white",
        isMainStop: true,
      };
    case "walk":
      return {
        container: "w-14 h-14 bg-gray-300 text-gray-600",
        isMainStop: false,
      };
    default:
      return {
        container: "w-14 h-14 bg-gray-300 text-gray-600",
        isMainStop: false,
      };
  }
};

export default function Itinerary() {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Itinerary</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {itinerarySteps.map((step, index) => {
          const styles = getStepStyles(step.icon);

          return (
            <div
              key={index}
              className="relative flex items-start mb-8 last:mb-0"
            >
              {/* Icon container */}
              <div
                className={`relative z-10 flex items-center justify-center rounded-full shadow-md flex-shrink-0 ${styles.container}`}
              >
                {getIcon(step.icon)}
              </div>

              {/* Content */}
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-blue-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {step.duration && (
                  <p className="text-sm text-gray-500 mt-1">
                    ({step.duration})
                  </p>
                )}
              </div>

              {/* Dots for walk steps */}
              {step.icon === "walk" && (
                <div className="absolute left-[26px] top-17 flex flex-col gap-1.5 ">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="w-1.5 h-1.5 rounded-full bg-orange-400"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

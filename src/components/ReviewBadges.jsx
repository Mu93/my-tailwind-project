import React from "react";
import { Crown, Star, Medal } from "lucide-react";

const reviews = [
  {
    icon: Crown,
    title: "Capterra",
    description: "Best ease of use",
  },
  {
    icon: Star,
    title: "Trustpilot",
    description: "4.7 average rating",
  },
  {
    icon: Medal,
    title: "G2 CROWD",
    description: "Easiest Setup Summer 2021",
  },
  {
    icon: Medal,
    title: "G2 CROWD",
    description: "Best Usability Summer 2021",
  },
];

export default function ReviewBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-10 bg-gray-50">
      {reviews.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="text-center">
            <Icon className="h-8 w-8 mx-auto text-blue-500 mb-2" />
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

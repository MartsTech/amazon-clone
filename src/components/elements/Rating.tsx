import { MAX_RATING, MIN_RATING } from "@config/constants";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

interface RatingProps {}

const Rating: React.FC<RatingProps> = ({}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="flex">
      {Array(rating)
        .fill(rating)
        .map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
    </div>
  );
};

export default Rating;

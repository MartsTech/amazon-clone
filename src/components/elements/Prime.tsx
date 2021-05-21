import { useState } from "react";

interface PrimeProps {}

const Prime: React.FC<PrimeProps> = ({}) => {
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <>
      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img className="w-12" src="/images/prime.png" alt="prime" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
    </>
  );
};

export default Prime;

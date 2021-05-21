import { selectItemsCount } from "@slice/basketSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

interface CheckoutBannerProps {}

const CheckoutBanner: React.FC<CheckoutBannerProps> = ({}) => {
  const itemsCount = useSelector(selectItemsCount);

  return (
    <>
      <Image
        src="/images/ad_2.png"
        width={1020}
        height={250}
        objectFit="contain"
      />

      <div className="flex flex-col p-5 space-y-10 bg-white">
        <h1 className="text-3xl border-b pb-4">
          {itemsCount === 0
            ? "Your Amazon Basket is empty."
            : "Your Shopping Basket"}
        </h1>
      </div>
    </>
  );
};

export default CheckoutBanner;

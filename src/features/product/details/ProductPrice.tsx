import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";

interface ProductPriceProps {
  price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <>
      <div className="flex items-baseline m-1 space-x-1">
        <h4 className="text-2xl font-black">${price}</h4>
        {true && (
          <del className="text-sm text-[#dc143c]">
            ${(price + price * 0.25).toFixed() + ".99"}
          </del>
        )}
      </div>
      {price > 25 && (
        <p className="text-[#2e8b57] flex items-center mb-6">
          <LabelImportantRoundedIcon className="!fill-[transparent] stroke-1 stroke-current text-xl" />
          Free Delivery Available
        </p>
      )}
    </>
  );
};

export default ProductPrice;

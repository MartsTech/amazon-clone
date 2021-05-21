import MainLayout from "@layout/MainLayout";
import CheckoutProduct from "@module/CheckoutProduct";
import CheckoutBanner from "@section/CheckoutBanner";
import CheckoutSidebar from "@section/CheckoutSidebar";
import { selectItems } from "@slice/basketSlice";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";

interface CheckoutTemplateProps {}

const CheckoutTemplate: React.FC<CheckoutTemplateProps> = () => {
  const items = useSelector(selectItems);

  return (
    <MainLayout>
      <div className="lg:flex">
        <div className="flex-grow m-5 shadow-sm">
          <CheckoutBanner />

          <FlipMove>
            {items.map((item) => (
              <CheckoutProduct
                key={item.product.id}
                data={item.product}
                count={item.count}
              />
            ))}
          </FlipMove>
        </div>

        <CheckoutSidebar />
      </div>
    </MainLayout>
  );
};

export default CheckoutTemplate;

import MainLayout from "@layout/MainLayout";
import { useSession } from "next-auth/client";

interface OrdersTemplateProps {
  Orders: JSX.Element;
}

const OrdersTemplate: React.FC<OrdersTemplateProps> = ({ Orders }) => {
  const [session] = useSession();

  return (
    <MainLayout>
      <div className="p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>

        {session ? <>{Orders}</> : <h2>Please sign in to see your orders</h2>}
      </div>
    </MainLayout>
  );
};

export default OrdersTemplate;

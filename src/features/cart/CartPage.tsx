import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "stores/store";
import { pageTransition, pageZoom } from "utils/animations";
import CartCheckout from "./CartCheckout";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
  const { cartTotalItems } = useStore().cartStore;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
      className="py-12 px-6 sm:p-12 sm:pt-20"
    >
      <h4 className="text-2xl mb-12 font-semibold">Your Cart</h4>
      {cartTotalItems > 0 ? (
        <div
          className="flex flex-col-reverse md:flex-row 
          md:space-x-8"
        >
          <CartItems />
          <CartCheckout />
        </div>
      ) : (
        <CartEmpty />
      )}
    </motion.div>
  );
};

export default observer(CartPage);

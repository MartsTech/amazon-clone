import Button from "components/buttons/Button";
import FormCheck from "components/form/FormCheck";
import TextInput from "components/form/TextInput";
import CartItems from "features/cart/CartItems";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";
import * as Yup from "yup";

interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps> = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    desc: Yup.string().required("Description is required"),
    rating: Yup.number().required("Rating is required"),
    image: Yup.string().required("Image Url is required"),
    price: Yup.number().required("Price is required"),
    offer: Yup.bool().required("Choose if in offer or not"),
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
      className="p-12 py-20"
    >
      <h4 className="text-2xl font-bold mb-12">Hi, Admin</h4>
      <p className="max-w-[480px] mb-8 opacity-50">
        This is your Dashboard. Add, Edit and Manage your products. Monitor
        Orders, Deliveries, and much more.
      </p>
      <div className="flex flex-col-reverse lg:flex-row">
        <CartItems />
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: "",
            category: "",
            desc: "",
            rating: "",
            image: "",
            price: "",
            offer: false,
            error: null,
          }}
          onSubmit={() => {}}
        >
          {({ handleSubmit, values, setFieldValue, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="bg-white rounded-lg overflow-hidden mb-4
              shadow-md flex-[50%] mx-10 flex flex-col items-center"
            >
              <h5 className="mb-4 text-2xl font-semibold">Add New Product</h5>
              <TextInput name="title" label="Product Name" type="text" />
              <TextInput name="category" label="Product Category" type="text" />
              <TextInput name="desc" label="Product Description" type="text" />
              <TextInput name="rating" label="Rating" type="text" />
              <TextInput name="image" label="Image Url" type="text" />
              <TextInput name="price" label="Price" type="text" />
              <FormCheck
                name="offer"
                label="In Offer"
                type="checkbox"
                value={values.offer}
                onClick={() => setFieldValue("offer", !values.offer)}
              />
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="primary"
                className="w-full mb-10"
              >
                {isSubmitting ? "Adding..." : "Add Product"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default AdminPage;

import { doc, setDoc } from "@firebase/firestore";
import Button from "components/buttons/Button";
import FormCheck from "components/form/FormCheck";
import SelectCountry from "components/form/SelectCountry";
import TextInput from "components/form/TextInput";
import { db } from "configs/firebase";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { pageSlide, pageTransition } from "utils/animations";
import * as Yup from "yup";
import WelcomeHeader from "./WelcomeHeader";

interface WelcomePageProps {}

const WelcomePage: React.FC<WelcomePageProps> = () => {
  const { setAppLoading } = useStore().commonStore;
  const [session] = useSession();
  const router = useRouter();

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    zip: Yup.number().required("ZIP is required"),
    birth: Yup.date().required("Date of Birth is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Phone number is not in the correct format"
      ),

    terms: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
      className="p-6 xs:p-12 flex flex-col items-center"
    >
      <WelcomeHeader />
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          address: "",
          state: "",
          country: "",
          zip: "",
          birth: "",
          phone: "",
          terms: false,
          error: null,
        }}
        onSubmit={async (values) => {
          const { address, state, country, zip, birth, phone } = values;
          setAppLoading(true);

          setDoc(
            doc(db, "users", session?.user?.email as string),
            {
              address,
              state,
              country,
              zip,
              birth,
              phone,
            },
            { merge: true }
          );

          setAppLoading(false);

          if (typeof router.query.next === "string") {
            router.push(router.query.next);
          } else {
            router.push("/");
          }
        }}
      >
        {({ handleSubmit, setFieldValue, isSubmitting, values }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="grid semi:grid-cols-2 space-y-6 xs:space-y-0
             xs:space-x-4 bg-white rounded-lg overflow-hidden
             p-6 xs:p-8 shadow-md"
          >
            <div className="p-4 text-xl font-semibold">
              <h5 className="mb-4">Delivery Address</h5>
              <TextInput name="address" label="Address" type="text" />
              <TextInput name="state" label="State" type="text" />
              <SelectCountry name="country" label="Country" type="text" />
              <TextInput name="zip" label="ZIP Code" type="text" />
            </div>
            <div className="p-4 text-xl font-semibold">
              <h5 className="mb-4">Personal Details</h5>
              <TextInput name="birth" label="Date of Birth" type="date" />
              <TextInput name="phone" label="Mobile Numbe" type="text" />
              <FormCheck
                name="terms"
                label="Accept Terms & Conditions"
                type="checkbox"
                value={values.terms}
                onClick={() => setFieldValue("terms", !values.terms)}
              />
              <Button
                className="relative mt-4 w-full"
                disabled={isSubmitting || !values.terms}
                variant="primary"
                type="submit"
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default WelcomePage;

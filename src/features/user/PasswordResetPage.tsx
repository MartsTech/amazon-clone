import { sendPasswordResetEmail } from "@firebase/auth";
import Button from "components/buttons/Button";
import FormError from "components/form/FormError";
import TextInput from "components/form/TextInput";
import CenterLayout from "components/layouts/CenterLayout";
import { auth } from "configs/firebase";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import * as Yup from "yup";

interface PasswordResetPageProps {}

const PasswordResetPage: React.FC<PasswordResetPageProps> = () => {
  const { setAppLoading } = useStore().commonStore;
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email is not in the correct format"),
  });

  return (
    <CenterLayout>
      <h4 className="text-2xl mb-8 font-semibold">Recover your Password</h4>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", error: null }}
        onSubmit={async (values, { setErrors }) => {
          setAppLoading(true);

          sendPasswordResetEmail(auth, values.email)
            .then(() => {
              setErrors({
                error: "Check your mail for the password reset link.",
              });
            })
            .catch((error) => {
              setErrors({ error: error.message });
            });

          setAppLoading(false);
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormError error={errors.error} />
            <TextInput name="email" label="Email" type="text" />
            <Button
              className="w-full uppercase !transform-none mt-4"
              type="submit"
              variant="primary"
            >
              Reset Password
            </Button>
            <Button
              className="w-full uppercase !transform-none mt-4"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth/login");
              }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </CenterLayout>
  );
};

export default PasswordResetPage;

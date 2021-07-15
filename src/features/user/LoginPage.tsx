import Button from "components/buttons/Button";
import FormError from "components/form/FormError";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { ClientSafeProvider, signIn } from "next-auth/client";
import { useRouter } from "next/router";
import * as Yup from "yup";

interface LoginPageProps {
  providers: Record<string, ClientSafeProvider>;
}

const LoginPage: React.FC<LoginPageProps> = ({ providers }) => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email is not in the correct format"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex-grow flex justify-center items-center">
      <div
        className="mt-20 mb-12 mx-12 py-8 px-4 bg-white
      rounded-lg overflow-hidden drop-shadow-xl shadow-xl"
      >
        <h4 className="text-2xl mb-8">Log In</h4>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "", error: null }}
          onSubmit={async (values, { setErrors }) => {
            const { email, password } = values;

            signIn("credentials", {
              email,
              password,
              redirect: false,
            }).then((res) => {
              setErrors({ error: res?.error });
            });
          }}
        >
          {({ handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <FormError error={errors.error} />
              <TextInput name="email" label="Email" type="text" />
              <TextInput name="password" label="Password" type="password" />
              <Button
                className="w-full uppercase !transform-none mt-4"
                type="submit"
                variant="primary"
              >
                Log In
              </Button>
              <span
                onClick={() => router.push("/password-reset")}
                className="text-center text-sm p-2 block mb-4 cursor-pointer"
              >
                Need help logging in?
              </span>
              <hr className="bg-gray-200 w-11/12 my-2 ml-[5%]" />
              <Button
                className="w-full uppercase !transform-none mt-4"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth/register");
                }}
              >
                Sign Up
              </Button>
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;

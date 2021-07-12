import DefaultLayout from "components/layouts/DefaultLayout";
import { Provider as AuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import { store, StoreContext } from "stores/store";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider session={pageProps.session}>
      <StoreContext.Provider value={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </StoreContext.Provider>
    </AuthProvider>
  );
};

export default App;

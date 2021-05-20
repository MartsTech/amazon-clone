import "@style/globals.css";
import { store } from "app/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

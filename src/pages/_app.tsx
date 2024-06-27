import Layout from "../components/layout/Layout";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../redux/store";

type AppProps= {
    Component :React.FC
    pageProps : object
}

const MyApp: React.FC<AppProps> =({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}


export default MyApp;
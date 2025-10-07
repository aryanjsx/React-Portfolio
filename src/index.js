import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { HelmetProvider } from "react-helmet-async";
import TagManager from "react-gtm-module";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

// Initialize Google Tag Manager
const tagManagerArgs = {
  gtmId: "GTM-TDZT2FJN", // Your Google Tag Manager ID
};
TagManager.initialize(tagManagerArgs);

const engine = new Styletron();

ReactDOM.render(
  <HelmetProvider>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </HelmetProvider>,
  document.getElementById("root"),
);
serviceWorker.unregister();

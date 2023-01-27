import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import counterReducer from "./Redux/counterReducer";
// import { createStore } from "redux";
import store from "./Redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const store = createStore(counterReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

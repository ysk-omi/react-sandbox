import React from "react";
import { createRoot } from "react-dom/client";
import { fetchItemModule } from "./util";
import App from "./App.jsx";

window.addEventListener(
  "load",
  () => {
    fetchItemModule().then((res) => {
      const $app = document.getElementById("app");
      const root = createRoot($app);
      root.render(<App listItems={res.data} />);
    });
  },
  false
);

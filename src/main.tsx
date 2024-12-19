import { StrictMode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./app/app";
import { queryClient } from "./lib/react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);

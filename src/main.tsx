import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter.tsx";
import CursorProvider from "./providers/CursorProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CursorProvider>
      <AppRouter />
    </CursorProvider>
  </StrictMode>
);

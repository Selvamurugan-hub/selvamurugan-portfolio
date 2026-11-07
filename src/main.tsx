import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif";
import "./index.css";
import App from "./App";
import { detectLowPower } from "@/lib/env";

if (detectLowPower()) document.documentElement.classList.add("low-power");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

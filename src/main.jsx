import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      clerkJSUrl="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@5/dist/clerk.browser.js"
      appearance={{
        variables: {
          colorPrimary: "#DC2626",
          colorBackground: "#242424",
          colorText: "#F5F1E8",
          colorInputBackground: "rgba(245, 241, 232, 0.03)",
          colorInputText: "#F5F1E8",
          borderRadius: "0.75rem",
        },
        elements: {
          card: {
            backgroundColor: "#242424",
            border: "1px solid rgba(245, 241, 232, 0.08)",
          },
          headerTitle: {
            color: "#F5F1E8",
          },
          headerSubtitle: {
            color: "rgba(245, 241, 232, 0.6)",
          },
          formButtonPrimary: {
            backgroundColor: "#DC2626",
            "&:hover": {
              backgroundColor: "#B91C1C",
            },
          },
          footerActionLink: {
            color: "#DC2626",
          },
        },
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import DeliveryProvider from "./contexts/DeliveryProvider/DeliveryProvider.jsx";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DeliveryProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <div className=" mx-auto ">
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </HelmetProvider>
      </DeliveryProvider>
    </AuthProvider>
  </React.StrictMode>
);

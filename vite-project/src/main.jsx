import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/clerk-react";
import RoomDetails from "./components/RoomDetails.jsx";
import Hotels from "./pages/Hotels.jsx";
import Bookings from "./pages/Bookings.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/my-bookings",
        element: <Bookings />,
      },
      {
        path: "/dashboard",
        element: <AdminPanel/>
      }
    ],
  },
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster />
    </React.StrictMode>
  </ClerkProvider>
);

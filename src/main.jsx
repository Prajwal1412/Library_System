import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/homepage.jsx";
import App from "./App.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Addbooks from "./pages/Addbooks.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routing Configration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/addbook",
        element: <Addbooks />,
      },

      {
        path: "/bookdetails",
        element: <BookDetails />,
      },
      {
        path: "/browsebooks/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/browsebooks",
        element: <BrowseBooks />,
      },
      {
        path: "/bookdetails/:category/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </StrictMode>
);

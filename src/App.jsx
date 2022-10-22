import Cars from "./pages/Cars";
import About from "./pages/About";
import Trucks from "./pages/Trucks";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/about", element: <About /> },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/trucks",
        element: <Trucks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

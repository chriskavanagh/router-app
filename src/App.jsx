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
    children: [{ index: true, element: <WelcomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

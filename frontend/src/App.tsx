import Dashboard from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import AuthProvider from "./providers/authProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/create-account",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

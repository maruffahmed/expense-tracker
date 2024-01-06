import Dashboard from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthLayout } from "./components/common/auth-layout";
import { ProtectedLayout } from "./components/common/protected-layout";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/",
          element: <ProtectedLayout />,
          children: [
            {
              path: "/",
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "/create-account",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;

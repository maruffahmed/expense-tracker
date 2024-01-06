import { AuthProvider } from "@/providers/authProvider";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

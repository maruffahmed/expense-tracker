import { useAuth } from "@/providers/authProvider";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

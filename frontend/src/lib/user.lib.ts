import { useQuery } from "@tanstack/react-query";
import { IUser, IUserbalance } from "@/types/user";
import axios from "axios";
import { useAuth } from "@/providers/authProvider";
import config from "@/config";

export const useGetUser = () => {
  const { token } = useAuth();
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await axios.get(`${config.SERVER_URL}/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return user.data as IUser;
    },
  });
};

export const useGetUserBalance = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      const balance = await axios.get(
        `${config.SERVER_URL}/v1/account/balance`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return balance.data as IUserbalance;
    },
  });
};

import config from "@/config";
import {
  ILoginData,
  ILoginResponse,
  IRegistrationData,
  IRegistrationResponse,
} from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: ILoginData) => {
      const user = await axios.post(`${config.SERVER_URL}/v1/auth/login`, data);
      return user.data as ILoginResponse;
    },
  });
};

export const useUserRegistration = () => {
  return useMutation({
    mutationKey: ["registration"],
    mutationFn: async (data: IRegistrationData) => {
      const user = await axios.post(
        `${config.SERVER_URL}/v1/auth/register`,
        data
      );
      return user.data as IRegistrationResponse;
    },
  });
};

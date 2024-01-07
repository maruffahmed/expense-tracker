import config from "@/config";
import { useAuth } from "@/providers/authProvider";
import {
  ICreateTransactionInput,
  ITransactionResponse,
  Transaction,
} from "@/types/transaction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserTransactions = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const balance = await axios.get(`${config.SERVER_URL}/v1/transaction`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return balance.data as ITransactionResponse;
    },
  });
};

export const useGetUserTransactionById = (
  transactionId: number,
  enabled: boolean
) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ["transaction", transactionId],
    queryFn: async () => {
      const balance = await axios.get(
        `${config.SERVER_URL}/v1/transaction/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return balance.data as Transaction;
    },
    enabled,
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: ICreateTransactionInput) => {
      const balance = await axios.post(
        `${config.SERVER_URL}/v1/transaction`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return balance.data as Transaction;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["balance"],
      });
    },
  });
};

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (data: Partial<Transaction>) => {
      const balance = await axios.put(
        `${config.SERVER_URL}/v1/transaction/${data.id}`,
        {
          ...data,
          id: undefined,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return balance.data as Transaction;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["balance"],
      });
    },
  });
};

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();

  return useMutation({
    mutationFn: async (transactionId: string) => {
      const balance = await axios.delete(
        `${config.SERVER_URL}/v1/transaction/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return balance.data as Transaction;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["balance"],
      });
    },
  });
};

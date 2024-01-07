import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { payment_methods } from "./data";
import { Textarea } from "../ui/textarea";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useCreateTransaction } from "@/lib/transaction.lib";
import { AxiosError } from "axios";
import { useToggle } from "@uidotdev/usehooks";

const validationSchema = z.object({
  date: z.string().min(1, {
    message: "Date is required",
  }),
  payment_method: z.string(),
  category: z.string(),
  amount: z.number().min(1, {
    message: "Amount is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

const options = [
  { value: "salary", label: "Salary" },
  { value: "business", label: "Business" },
  { value: "loan", label: "Loan" },
  { value: "others", label: "Others" },
];

export default function AddIncomeDialog() {
  const [isDialogOpen, toggleDialogOpen] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState<(typeof options)[0]>(
    options[0]
  );
  const [paymentMethod, setPaymentMethod] = useState<string>(
    payment_methods[0].value
  );

  const {
    mutateAsync,
    isError: isCreateTransactionError,
    error: createTransactionError,
  } = useCreateTransaction();
  const errorMessage = (createTransactionError as AxiosError)?.response
    ?.data as {
    message: string;
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={toggleDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={() => toggleDialogOpen()}
        >
          Add income
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle asChild>
            <p className="!font-medium">Add income</p>
          </DialogTitle>
        </DialogHeader>
        <Formik
          initialValues={{
            date: "",
            payment_method: paymentMethod,
            category: selectedOption.value,
            amount: 0,
            description: "",
          }}
          validate={(values) => {
            try {
              validationSchema.parse(values);
            } catch (error) {
              if (error instanceof z.ZodError) {
                return error.formErrors.fieldErrors;
              }
            }
          }}
          onSubmit={async (values) => {
            await mutateAsync(
              { ...values, type: "INCOME" },
              {
                onSuccess: () => {
                  toggleDialogOpen();
                },
              }
            );
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-left">
                  Date
                </Label>
                <Field
                  id="date"
                  name="date"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="date"
                component="p"
                className="text-red-500 text-right"
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="payment_method" className="text-left">
                  Payment method
                </Label>
                <Select
                  value={paymentMethod}
                  onValueChange={(val) => {
                    setPaymentMethod(val);
                    setFieldValue("payment_method", val);
                  }}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {payment_methods.length
                      ? payment_methods.map((item, index) => (
                          <SelectItem value={item.value} key={index}>
                            {item.label}
                          </SelectItem>
                        ))
                      : null}
                  </SelectContent>
                </Select>
              </div>
              <ErrorMessage
                name="payment_method"
                component="p"
                className="text-red-500 text-right"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-left">
                  Category
                </Label>
                <CreatableSelect
                  value={selectedOption}
                  onChange={(value) => {
                    setSelectedOption(value!);
                    setFieldValue("category", value?.value);
                  }}
                  options={options}
                  className="col-span-3"
                />
              </div>
              <ErrorMessage
                name="category"
                component="p"
                className="text-red-500 text-right"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-left">
                  Amount
                </Label>
                <Field
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="9010"
                  className="col-span-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage
                name="amount"
                component="p"
                className="text-red-500 text-right"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-left">
                  Description
                </Label>
                <Field
                  id="description"
                  name="description"
                  as={Textarea}
                  placeholder="Write your expense description..."
                  className="col-span-3"
                />
              </div>
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-right"
              />
              {isCreateTransactionError && (
                <p className="text-red-500 mt-4">{errorMessage.message}</p>
              )}
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters
                      className="animate-spin"
                      size="1.5rem"
                    />
                  ) : (
                    "Save"
                  )}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

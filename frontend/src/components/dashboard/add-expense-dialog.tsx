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
import { Input } from "../ui/input";
import { DialogProps } from "@radix-ui/react-dialog";
import { DatePicker } from "../common/date-picker";
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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function AddExpenseDialog({ ...props }: DialogProps) {
  const [selectedOption, setSelectedOption] = useState<unknown>(options[0]);
  const [paymentMethod, setPaymentMethod] = useState<string>(
    payment_methods[0].value
  );
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          Add expense
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle asChild>
            <p className="!font-medium">Add expense</p>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-left">
              Date
            </Label>
            <DatePicker classname="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="payment" className="text-left">
              Payment method
            </Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-left">
              Category
            </Label>
            <CreatableSelect
              value={selectedOption}
              onChange={(value) => setSelectedOption(value)}
              options={options}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-left">
              Amount
            </Label>
            <Input type="text" id="amount" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <Textarea
              placeholder="Write your expense description..."
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

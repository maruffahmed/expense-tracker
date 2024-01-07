import { useGetUser } from "@/lib/user.lib";
import { useAuth } from "@/providers/authProvider";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const { logout } = useAuth();
  const { data } = useGetUser();
  const avaterName = data?.name.slice(0, 2).toUpperCase();
  return (
    <Transition.Root as={Fragment}>
      <div className="lg:hidden">
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
          >
            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="pb-2 pt-3">
                <div className="flex items-center justify-between px-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/expense_tracker.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Link
                    to="/"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
              <div className="pb-2 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700">
                      <span className="font-medium leading-none text-white">
                        {avaterName}
                      </span>
                    </span>
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="truncate text-base font-medium text-gray-800">
                      {data?.name}
                    </div>
                    <div className="truncate text-sm font-medium text-gray-500">
                      {data?.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <p
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
                    onClick={logout}
                  >
                    Sign out
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </div>
    </Transition.Root>
  );
}

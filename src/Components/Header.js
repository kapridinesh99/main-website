import { Fragment, useState } from "react";
import {
  XMarkIcon,
  Bars3Icon,
  SquaresPlusIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import LoginPopup from "../Components/LoginModal/Modal";
import { getCredentials } from '../Functions/util';
import useAuth from '../State/AuthProvider';

const products = [
  {
    name: "Shopping",
    description: "A List of products offered by RV Enterprises",
    href: "/products",
    icon: SquaresPlusIcon,
  },
  {
    name: "FOREX TRADING",
    description: "Get an insight about RV enterprises Forex Trading",
    href: "/",
    icon: CursorArrowRaysIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { logoutMutation } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {userID} = getCredentials() || null;

  function handleLogout() {
    logoutMutation.mutate({}, { onSettled: () => window.location.reload() });
  }

  return (
    <header className="navbar bg-white">
      <div className="text-sm pt-1 sm:visible invisible w-full h-6 bg-black">
        <ul className="sm:flex flex-col sm:flex-row align-center justify-around cursor-pointer text-white">
          <li className="hover:text-[#EEAA0F]">RESOURCES & DOWNLOADS</li>
          <li className="hover:text-[#EEAA0F]">
            <Link to ="/privacy-policy">Privacy Policies</Link>
          </li>
          <li className="hover:text-[#EEAA0F]">
          <Link to ="/term">Terms and condition</Link>
          </li>
          <a href="https://news.google.com/search?q=%22real%20value%22&hl=en-IN&gl=IN&ceid=IN%3Aen" target="blank"><li className="hover:text-[#EEAA0F]">
      
            RV Newsletter</li></a>
        </ul>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-2">
            <span className="sr-only">RV ENterprises</span>
            <img width={100} src="/logo-dark.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Future Plans
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="products-list flex column gap-l p-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block text-left font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-left text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </Link>
          {/* <Link
            to="/companyplans"
            className="text-sm font-semibold leading-6 text-gray-900">
            Company Plans
          </Link> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center space-x-4">
            {/* { !userID && <Link to="/signup" className="text-sm font-semibold leading-6 text-gray-900"> <u>Sign Up</u> </Link> } */}
            <Popover className="relative">
              <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span className="text-sm font-semibold leading-6 text-gray-900">
                  {userID ? 'My Profile' : "Log In"}
                </span>
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100 "
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 ">
                <Popover.Panel className="loginPopup absolute z-10 mt-3 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <LoginPopup />
                </Popover.Panel>
              </Transition>
            </Popover>
            { !userID && 
              <Link
                to="/joinus"
                className="text-sm font-semibold leading-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-0 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition duration-300">
                Join Us
              </Link> }
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">RV Enterprises</span>
              <img
                alt="" 
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Future Plans
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  About Us
                </Link>
                <Link
                  to="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Contact Us
                </Link>
                {/* <Link
                  to="/companyplans"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Company Plans
                </Link> */}
                {
                  userID ? <Link
                  to="/user"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  My Profile
                </Link> : null}
                <Link
                  to="/joinus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Join Us
                </Link>
              </div>
              <div className="py-6">
                {
                    userID
                    ? <button onClick={handleLogout}>Logout</button>
                    : (
                    <>
                    <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log In
                  </Link>
                  <Link
                  to="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Sign Up
                  </Link></>)
                  }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

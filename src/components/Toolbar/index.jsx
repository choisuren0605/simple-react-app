import React from "react";
function Toolbar() {
  return (
    <nav class="bg-white border-gray-200 px-0 lg:px-0 py-2.5 bg-white shadow-md">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="http://localhost:3000/" class="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "burger-king-logo.svg"}
            class="mr-4 h-6 sm:h-9"
            alt="Burger Logo"
          />
          <span class="self-center text-xl font-semibold font-serif whitespace-nowrap dark:text-white italic ">
            Burger app
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <ul class="hidden list-none md:flex flex justify-end items-center text-xs  lg:text-base space-x-4 ">
          <li class="px-6 py-2 text-sm text-orange-500 bg-orange-100 rounded shadow hover:bg-orange-200">
            Шинэ захиалга
          </li>
          <li class="px-6 py-2 text-sm rounded shadow bg-emerald-100 hover:bg-emerald-200 text-emerald-500">
            Нэвтрэх
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Toolbar;

import React from "react";

function Toolbar() {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-0 lg:px-0 py-2.5 bg-sky-400">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-248.jpg?w=400"
              class="mr-10 h-18 sm:h-12"
              alt="Burger Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Burger app
            </span>
          </a>
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
    </header>
  );
}
export default Toolbar;

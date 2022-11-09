import React from "react";

const Sidebar = () => {
  return (
    <div class="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul class="relative">
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              strokeWidth="2.5"
              stroke="#1478DD"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <span>Захиалга өгөх</span>
          </a>
        </li>
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              stroke-width="2.5"
              stroke="#1478DD"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>

            <span>Нэвтрэх</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;

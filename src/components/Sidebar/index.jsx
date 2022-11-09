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
              width="25"
              height="25"
              stroke-width="2.5"
              viewBox="0 0 24 24"
              stroke="#1478DD"
              fill="currentColor"
              class="bi bi-bag"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
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
              class="icon icon-tabler icon-tabler-login"
              width="25"
              height="25"
              viewBox="0 0 24 24"
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

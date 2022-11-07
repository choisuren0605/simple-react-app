import React from "react";
import BuildControl from "../BuildControl";

const BuildControls = (props) => (
  <div class="bg-amber-400 flex-auto flex flex-col items-center">
    <p class="p-4 mb-5 font-semibold text-xl text-indigo-600 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 bg-clip-padding ">
      Бургерийн үнэ: <strong>{props.price}</strong>
    </p>
    <BuildControl
      ortsHasah={props.ortsHasah}
      ortsNemeh={props.ortsNemeh}
      type="salad"
      orts="Salad"
    />
    <BuildControl
      ortsHasah={props.ortsHasah}
      ortsNemeh={props.ortsNemeh}
      type="bacon"
      orts="Гахайн мах"
    />
    <BuildControl
      ortsHasah={props.ortsHasah}
      ortsNemeh={props.ortsNemeh}
      type="cheese"
      orts="Бяслага"
    />
    <BuildControl
      ortsHasah={props.ortsHasah}
      ortsNemeh={props.ortsNemeh}
      type="meat"
      orts="Үхрийн мах"
    />
    <button class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
      Захиалах
    </button>
  </div>
);

export default BuildControls;

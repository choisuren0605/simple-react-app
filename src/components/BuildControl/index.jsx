import React from "react";
import css from "./style.module.css";
const BuildControl = (props) => (
  <div class={css.BuildControl}>
    <div class={css.Label}>{props.orts}</div>
    <button
      class={css.Less}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
      onClick={() => props.ortsHasah(props.type)}
    >
      Хасах
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
      onClick={() => props.ortsNemeh(props.type)}
    >
      Нэмэх
    </button>
  </div>
);

export default BuildControl;

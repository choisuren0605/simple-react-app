import React from "react";
import css from "./style.module.css";
const BurgerIngredent = (props) => {
  if (props.type === "bread-top") return <div class={css.BreadTop}></div>;
  if (props.type === "salad") return <div class={css.Salad}></div>;
  if (props.type === "bacon") return <div class={css.Bacon}></div>;
  if (props.type === "meat") return <div class={css.Meat}></div>;
  if (props.type === "cheese") return <div class={css.Cheese}></div>;
  if (props.type === "bread-bottom") return <div class={css.BreadBottom}></div>;
  return <div>...</div>;
};
export default BurgerIngredent;

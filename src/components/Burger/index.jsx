import React from "react";
import BurgerIngredent from "../BurgerIngredent";
import css from "./style.module.css";

const Burger = (props) => {
  let content = [];

  const items = Object.entries(props.orts);
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredent type={el[0]} />);
    }
  });

  if (content.length === 0)
    content = <p>Хачиртай талхны орцыг сонгоно уу...</p>;
  console.log(content);
  return (
    <div class={css.Burger}>
      <BurgerIngredent type="bread-top" />
      {content}
      {/* <BurgerIngredent type="salad" />
    <BurgerIngredent type="bacon" />
    <BurgerIngredent type="cheese" />
    <BurgerIngredent type="meat" /> */}
      <BurgerIngredent type="bread-bottom" />
    </div>
  );
};

export default Burger;

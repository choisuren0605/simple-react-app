import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
const ingredientPrice = { salad: 150, cheese: 250, bacon: 800, meat: 1200 };

class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0,
      },
      totalPrice: 0,
    };
  }
  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + ingredientPrice[type];
    this.setState({ totalPrice: newPrice, ingredients: newIngredients });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - ingredientPrice[type];
      this.setState({ totalPrice: newPrice, ingredients: newIngredients });
    }
  };

  render() {
    return (
      <div>
        <Modal />
        <Burger orts={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
        />
      </div>
    );
  }
}

export default BurgerBuilder;

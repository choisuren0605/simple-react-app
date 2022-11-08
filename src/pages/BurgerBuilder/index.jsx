import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
const ingredientPrice = { salad: 150, cheese: 250, bacon: 800, meat: 1200 };
const ingredientNames = {
  salad: "Salad",
  bacon: "Гахайн мах",
  meat: "Үхрийн мах",
  cheese: "Бяслага",
};

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
      confermOrder: false,
    };
  }

  continueOrder = () => {
    console.log("Continue...");
  };

  showConfirmModal = () => {
    this.setState({ confermOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confermOrder: false });
  };

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
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confermOrder}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            ingredientNames={ingredientNames}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientNames={ingredientNames}
          price={this.state.totalPrice}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
        />
      </div>
    );
  }
}

export default BurgerBuilder;

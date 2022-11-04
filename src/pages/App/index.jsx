import css from "./style.css";
import "../../components/Toolbar";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <div>
      <Toolbar />
      <br />
      <BurgerBuilder />
      <div className={css.Back}>AAAA</div>
    </div>
  );
}

export default App;

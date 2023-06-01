import { Fragment } from "react";
import Header from "./componet/Layout/Header.js";
import Meals from "./componet/Meals/Meals.js";
import Cart from './componet/Cart/Cart.js'

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;

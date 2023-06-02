import { useState } from "react";
import Header from "./componet/Layout/Header.js";
import Meals from "./componet/Meals/Meals.js";
import Cart from './componet/Cart/Cart.js'
import CartProiver from "./componet/store/CartProiver.js";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)

  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }
  return (
    <CartProiver>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShwoCarts={showCartHandler} />
      <main>
        <Meals />
      </main>

    </CartProiver>
  );
}

export default App;

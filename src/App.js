import { Fragment, useState } from "react";
import Header from "./componet/Layout/Header.js";
import Meals from "./componet/Meals/Meals.js";
import Cart from './componet/Cart/Cart.js'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)

  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }
  return (
    <Fragment>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShwoCarts={showCartHandler} />
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;

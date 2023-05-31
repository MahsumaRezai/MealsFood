import { Fragment } from "react";
import Header from "./componet/Layout/Header.js";
import Meals from "./componet/Meals/Meals.js";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>

    </Fragment>
  );
}

export default App;

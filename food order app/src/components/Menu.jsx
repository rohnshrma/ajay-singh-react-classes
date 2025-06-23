import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Dish from "./Dish";

const Menu = () => {
  const { menu, dispatch } = useContext(CartContext);
  return (
    <div className="menu col-lg-8 col-sm-12">
      <div className="row align-items-center justify-content-between">
        {menu.map((item) => {
          return (
            <Dish
              dispatch={dispatch}
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              subCategory={item.subCategory}
              description={item.description}
              vegNonVeg={item.vegNonVeg}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

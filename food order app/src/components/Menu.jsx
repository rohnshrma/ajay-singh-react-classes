import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Dish from "./Dish";

const Menu = () => {
  const { menu, isLoading } = useContext(CartContext);

  if (isLoading) {
    return (
      <div className="menu col-lg-12 text-center">
        <h1>Menu Loading...</h1>
      </div>
    );
  }

  if (!menu || menu.length === 0) {
    return (
      <div className="menu col-lg-12 text-center">
        <h1>No Items in Menu</h1>
      </div>
    );
  }

  return (
    <div className="menu col-lg-12">
      <div className="row align-items-center justify-content-between">
        {menu.map((item) => {
          return (
            <Dish
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

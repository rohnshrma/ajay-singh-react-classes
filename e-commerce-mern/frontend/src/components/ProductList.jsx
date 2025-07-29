import { useSelector } from "react-redux";
import Product from "../components/Product";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="row justify-content-between">
      <div className="col-12 p-3 shadow-lg bg-light rounded border products-list justify-content-evenly">
        <h2 className="mb-3">Products</h2>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-3"
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

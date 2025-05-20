import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Product component to render a single product card
const Product = ({ product, addToCart }) => {
  return (
    <Card className="h-100 shadow-sm" style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="img-fluid"
        style={{
          height: "200px",
          objectFit: "cover",
          borderBottom: "1px solid #ccc",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6 text-truncate">{product.name}</Card.Title>
        <Card.Text className="text-muted mb-2">
          ${parseInt(product.price).toFixed(2)}
        </Card.Text>
        <Card.Text className="text-warning mb-3">
          {"★".repeat(Math.floor(product.rating))}
          {product.rating % 1 !== 0 && "☆"} ({product.numReviews} reviews)
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => addToCart(product)}
          disabled={product.countInStock === 0}
          className="mt-auto"
          aria-label={`Add ${product.name} to cart`}
        >
          {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;

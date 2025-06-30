import React from "react";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center py-5">
          <h1 className="display-4 fw-bold text-danger mb-4">
            Welcome to Tummy Food
          </h1>
          <p className="lead text-muted mb-4">
            Delicious food delivered right to your doorstep. Fresh ingredients,
            authentic flavors, and excellent service guaranteed.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg border-0 rounded-4">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
                  className="card-img-top rounded-top-4"
                  alt="Delicious Food"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body p-4">
                  <h3 className="card-title text-danger">
                    Why Choose Tummy Food?
                  </h3>
                  <div className="row text-start">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">🍽️ Fresh & Quality Ingredients</li>
                        <li className="mb-2">🚚 Fast & Reliable Delivery</li>
                        <li className="mb-2">👨‍🍳 Expert Chefs</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">💰 Affordable Prices</li>
                        <li className="mb-2">🌟 Customer Satisfaction</li>
                        <li className="mb-2">📱 Easy Online Ordering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

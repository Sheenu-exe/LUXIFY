import LabelBottomNavigation from "./components/navbar";
import "./App.css";
import Routed from "./routes";
import Navigate from "./components/navigate";
import data from "./data";
import { useState } from "react";

function App() {
  const { productItems } = data;
  const [cartItems, setcartItems] = useState([]);

 
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="body">
      <Navigate />
      <div className="nav">
        <LabelBottomNavigation />
      </div>
      <div className="main"></div>
      <Routed
        productItems={productItems}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
}

export default App;

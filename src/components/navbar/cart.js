import "./cart.css";
import { AddCircle ,RemoveCircle } from "@mui/icons-material";

export default function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
})

{
    const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price, 0)
    const totalBilling = cartItems.reduce((price,item)=>price + item.quantity * item.price +99 + Math.floor(18/100*18), 0)
  return (
    <div className="cart-items">
      <div className="cart-items-header">
        {" "}
        <h1 className="headtitle"> Cart Items </h1>
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-apply">
          
          <h2> No Items are added. </h2>
        </div>
      )}
      ,
      <div className="show-items">
        {cartItems.map((item) => (
          <><div key={item.id} className="listbox">
                <img className="prodimg" src={item.img} alt="" />
                <div className="infobox">
                    <h1 className="prodname">{item.name}</h1>
                    <h3 className="prodprice">₹{item.price}/-</h3>
                    <h5 className="prodquantity">Quantity: {item.quantity}</h5>
                    <h5 className="prodtotal">Total : ₹
                        {item.quantity * item.price}/-
                    </h5>
                    <div className="prodbtn">
                        <button
                            onClick={() => {
                                handleAddProduct(item);
                            } }
                        >
                            <AddCircle color="#0d0221" />
                        </button>
                        <button
                            onClick={() => {
                                handleRemoveProduct(item);
                            } }
                        >
                            <RemoveCircle color="#0d0221" />
                        </button>{" "}
                    </div>
                </div>
            </div>
            
                </>
        ))}
        <div className="totaldisplay">
                <ul className="billlist">
                    <li className="li">Total Price  ₹{totalPrice}/-</li>
                    <li className="li">Taxes  18%</li>
                    <li className="li">Delivery Charges ₹99/-</li>
                    <li className="li">Total Billing  ₹{totalBilling}/- </li>
                </ul>
            </div>
      </div>
      <div className="margin"></div>
    </div>
    
  );
}

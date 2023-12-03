import { Routes, Route} from "react-router-dom";
import Favourite from "./components/navbar/favourite";
import Cart from "./components/navbar/cart";
import Acc from "./components/navbar/acc";
import Home from "./components/page1";
import Search from "./components/navbar/search";
import Christmas from "./components/chirstmas";


export default function Routed({productItems,cartItems,handleAddProduct,handleRemoveProduct}){
    return(
        <><Routes>
            <Route path="favourite" element={<Favourite />} />
            <Route path="cart" element={<Cart cartItems={cartItems}  handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} />
            <Route path="acc" element={<Acc />} />
            <Route path="/" element={<Home productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
            <Route path="search" element={<Search />}></Route>
            <Route path="christmas" element={<Christmas/>}></Route>
        </Routes>
        </>
    )
}
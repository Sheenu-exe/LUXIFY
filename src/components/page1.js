import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FactCheck } from '@mui/icons-material';
import { Payments } from '@mui/icons-material';
import { LocalShipping } from '@mui/icons-material';
import { AddShoppingCart } from '@mui/icons-material';




const Home=({productItems,handleAddProduct})=>{

  return (
    <>
    <div className="carous">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carimg"
            src={require('./img/Red and Green Simple Christmas Sale Banner (Landscape).png')}
            alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carimg"
            src={require('./img/Gradient Seasonal Sale Banner.png')}
            alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carimg"
            src={require('./img/Black and Gold Minimalist Black Friday Big Sale Banner.png')}
            alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="carousl2">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 carimg"
              src={require('./img/phn1.png')}
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carimg"
              src={require('./img/phn2.png')}
              alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carimg"
              src={require('./img/phn3.png')}
              alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="feat">
        <div className="featsec"><FactCheck  style={{color:"#A6CFD5",width:"35px", height:"35px",marginLeft:"10px"}}/><p>WIDE SELECTIONS</p></div>
        <div className="featsec"><Payments style={{color:"#A6CFD5",width:"35px", height:"35px",marginLeft:"10px"}}/><p>PAY ON DELIVERY</p></div>
        <div className="featsec"><LocalShipping style={{color:"#A6CFD5",width:"35px", height:"35px",marginLeft:"10px"}}/><p>EASY RETURNS</p></div>
      </div>
      <h1 className="PIT"   >Product In Trend</h1>
        {productItems.map((productItem)=>(
           <div className="productslist"  >
          <div className="rowp" >
          <div   className="product">
            <img  src={productItem.img} alt="" />
            <h3 className="prodtitle" >{productItem.name}</h3>
            <p >₹{productItem.price}/-</p>
            <button  className="btnprd" onClick={()=>handleAddProduct(productItem)}><AddShoppingCart/>Add to Cart</button>
          </div>
          </div>
      </div>
        ))}
        <div className="margin"></div>
      </>
  );

}

export default Home;
import * as React from "react";
import "../App.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ShoppingBag } from '@mui/icons-material';
import { Park } from "@mui/icons-material";



export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navb"  style={{Width:"100%"}} >
      <BottomNavigation
        style={{ backgroundColor: "#0D0221",borderRadius:"10px 10px 0 0",zIndex:"1000",position:"relative`",Width:"100%"}}
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <div className="icon">
         <Link to="/">
         <BottomNavigationAction
            showlabel="Home"
            value="home"
            style={{ color: "#A6CFD5" }}
            icon={<HomeIcon />}
            
          />
          </Link>
          </div>
          <div className="icon">
         <Link to="christmas">
         <BottomNavigationAction
            showlabel="Christmas"
            value="christmas"
            style={{ color: "#A6CFD5" }}
            icon={<Park/>}
            
          />
         </Link>
        </div>
        <div className="icon">
          <Link to="search">
          <BottomNavigationAction
            showlabel="Search"
            value="search"
            style={{ color: "#A6CFD5" }}
            icon={<SearchIcon />}
          />
          </Link>
        </div>
        <div className="icon">
         <Link to="cart">
         <BottomNavigationAction
            showlabel="Home"
            value="cart"
            style={{ color: "#A6CFD5" }}
            icon={<ShoppingBag />}
            
          />
         </Link>
        </div>
        <div className="icon">
          <Link to="acc">
          <BottomNavigationAction
            showlabel="Account"
            value="nearby"
            style={{ color: "#A6CFD5" }}
            icon={<PersonIcon />}
          />
          </Link>
        </div>
        <div className="heroname">
         <Link style={{textDecoration: "none"}} to="/"><h2 className="luxify">LUXIFY</h2></Link>
        </div>
       
        <ul className="list">
          <li>
            <Link to="favourite">
            <BottomNavigationAction
              label="Search"
              value="search"
              style={{ color: "#A6CFD5" }}
              icon={<Favorite/>}
            />
            </Link>
          </li>
          <li>
            <Link to="cart">
            <BottomNavigationAction
              label="Cart"
              value="nearby"
              style={{ color: "#A6CFD5" }}
              icon={<ShoppingBag />}
            />
            </Link>
          </li>
          <li>
            <Link to="acc">
            <BottomNavigationAction
              label="Account"
              value="account"
              style={{ color: "#A6CFD5" }}
              icon={<PersonIcon />}
            /></Link>
          </li>
        </ul>
      </BottomNavigation>
    </div>
  );
}

import "./style.css";
import { useState } from "react";
import dogData from "./dog-data.json"
import DogItem from "./components/DogItem.js"

// code to make image work (from studio)
dogData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  //adding and removing items from the cart using state
  const [cart, setCart] = useState({});
  const [price, setPrice] = useState(0);
  const updateCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] += 1;
    } else {
      newCart[uid] = 1
    }
    setPrice(price + dogData[uid].price)
    setCart({...newCart})
  }

  const removeCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] -= 1;
      setPrice(price - dogData[uid].price)
      setCart({...newCart})
  }
}
 
//what the app returns
  return(
    <div>
      <h1>Dogs Available for Dogsitting!</h1>
      
      <div class="dogcards">
      {dogData.map((item, index) => 
        {return(
          <DogItem updateCart={updateCart} removeCart = {removeCart} item = {item} index = {index}/>
        )}
      )}
      </div>
      <h2>Cart</h2>
        {Object.keys(cart).map((key) => {
        return (
          dogData[key].name + ": " + cart[key] + " " 
        )
      }
      )}
      <div> Total Price: {price}</div>

    </div>
    
  )
}


function CartItems(props) {
  return (
    <div>
        <button onClick={() => props.updateCart(props.index)}> {props.item.name}</button>
        <button onClick={() => props.removeCart(props.index)}> {props.item.name}</button>
    </div>
  )
}

export default App;

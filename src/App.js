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

//filtering 

//filter by gender
  const [genderType, setGenderType] = useState("All");
  const selectGenderType = (uid) => {
    setGenderType(uid)
  }

  const matchesGenderFilterType = (uid) => {
    if(genderType === "All") { 
      return true
    } else if (genderType === uid.gender) {
      return true
    } else {
      return false
    }
  }

//filter by size of dog
  const [sizeType, setSizeType] = useState("All");
  const selectSizeType = (uid) => {
    setSizeType(uid)
  }

  const matchesSizeType = (uid) => {
    if(sizeType === "All") { 
      return true
    } else if (sizeType === uid.size) {
      return true
    } else {
      return false
    }
  }

  //sorting
  const [sortType, setSortType] = useState("None")
  const selectSortType = (uid) => {
    setSortType(uid)
  }



  //creating list of filtered data
  const filteredData1 = dogData.filter(dog => {
    return matchesGenderFilterType(dog)})

  const filteredData2 = filteredData1.filter(dog => {
    return matchesSizeType(dog)
  })


  let sortedFilteredData = filteredData2

  if(sortType==="None") {
    let sortedFilteredData = filteredData2;
  }
  else if(sortType==="Low to High") {
    let sortedFilteredData = filteredData2.sort((dog1, dog2) => dog1.price - dog2.price);
  }
  else if(sortType==="High to Low") {
    let sortedFilteredData = filteredData2.sort((dog1, dog2) => dog2.price - dog1.price);
  }

  const filterDisplay = (uid) => {
    if(uid === "All") {
      return ""
    }
    else {
      return uid
    }

  }

 
//what the app returns
  return(
    <div id = "body">
      <div id = "bodygrid">
        <div id="top">
          <h1>Dogs Available for Play!</h1>
          <div id = "header">
            <p> Don't have a dog but wish you had one? In the need for a quick boost of serotonin? If so, you've come to the right place. Here
              is an online marketplace for you to purchase play time with a dog! 
            </p>
          </div>
        </div>

        {// filters
        }
        <div id = "left">
          <div>
            <p>Current filters: {filterDisplay(genderType)} {filterDisplay(sizeType)}</p> 
            <p> Current sorting: {sortType}</p>
          </div>
            <h4>Filtering</h4>
            <button class="leftbutton" onClick={ event => {selectSizeType("All"); selectGenderType("All")} }>Reset All</button>
            <h5>Filter by Gender</h5>
            <button class="leftbutton" onClick={() => selectGenderType("Female")}>Female</button>
            <button class="leftbutton" onClick={() => selectGenderType("Male")}>Male</button>
            <h5>Filter by </h5>
            <button class="leftbutton" onClick={() => selectSizeType("Small")}>Small</button>
            <button class="leftbutton" onClick={() => selectSizeType("Medium")}>Medium</button>
            <button class="leftbutton" onClick={() => selectSizeType("Large")}>Large</button>
            <h4>Sorting</h4>
            <button class="leftbutton" onClick={() => selectSortType("Low to High")}>Low to High</button>
            <button class="leftbutton" onClick={() => selectSortType("High to Low")}>High to Low</button>
            <button class="leftbutton" onClick={() => selectSortType("None")}>Default Sort</button>
          
          <h2>Cart</h2>
            {Object.keys(cart).map((key) => {
            return (
              dogData[key].name + ": " + cart[key] + " " 
            )
            }
            )}
          <div> Total Price: {price}</div>

        </div>








        <div class="dogcards" id = "right">
          {sortedFilteredData.map((item, index) => 
            {return(
              <DogItem updateCart={updateCart} removeCart = {removeCart} item = {item} index = {index}/>
            )}
          )}
        </div>
      </div>
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

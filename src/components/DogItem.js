//component for each dog in the list
export default function DogItem(props) {
    return (
        <div class = "dogcontainer">
        <div class="dogItem">
        <div class="textwrap"> 
        <div class="dogtext" id="name">{props.item.name}</div>
        <div class="dogtext" id="breed">{props.item.breed}</div>
        <div class="dogtext" id="size">{props.item.size}</div>
        <div class="dogtext" id="gender">{props.item.gender}</div>
        <div class="dogtext" id="price"> Price: {props.item.price}</div>
        </div>  
        <img class="dogimage" src={props.item.image}></img>
        <button class="cartbutton" id="addcart" onClick={() => props.updateCart(props.index)}>Add to Cart</button>
        <button class="cartbutton" id="removecart" onClick={() => props.removeCart(props.index)}>Remove from Cart</button>
        </div>
        </div>
    )
}
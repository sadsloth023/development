export default function Cart(props) {
    return (
        <div>
        <div >Total Price: {props.price}</div>
        <div>{Object.keys(props.cart).map((key) => {
            return (
              props.dogData[key].name + ": " + props.cart[key] + " "
            )
            }
            )}
        </div>
        </div>
    )
}
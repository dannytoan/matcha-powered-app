import { useDispatch, useSelector } from "react-redux";
import { addOrderItem } from "../../store/orderItems";
import { useHistory } from "react-router-dom";

function PaymentForm() {
    const dispatch = useDispatch();
    const history = useHistory()
    const orderHistory = useSelector((state) => Object.values(state.orderHistory));


    const handleOrderItems = async (e) => {
        const shoppingBag = localStorage.getItem("shoppingBag");
        const parsedShoppingBag = JSON.parse(shoppingBag);
        // const newBag = []
        let orderHistoryId = orderHistory[orderHistory.length - 1].id;



        const orderItemsPayload = {
          shoppingBag: parsedShoppingBag,
          orderHistory: orderHistoryId,
        };

        let successfulOrderItems = await dispatch(addOrderItem(orderItemsPayload));

        if (successfulOrderItems) {
          // localStorage.setItem("shoppingBag", JSON.stringify(newBag))
          localStorage.clear()
          history.push("/order-history")
        }
      }

    return (
        <fieldset>
        <legend>Select Payment Type</legend>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                 checked/>
          <label for="huey">MatchaPay</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey"/>
          <label for="dewey">PayPal</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie"/>
          <label for="louie">Debit/Credit</label>
        </div>
        <button onClick={handleOrderItems}>Confirm Order</button>
    </fieldset>
    )

}

export default PaymentForm

import { useDispatch, useSelector } from "react-redux";
import { addOrderItem } from "../../store/orderHistory.js";
import { useHistory } from "react-router-dom";

function PaymentForm() {
    const dispatch = useDispatch();
    const history = useHistory()
    const currentOrderHistory = useSelector((state) => state.orderHistory);

    const handleOrderItems = async (e) => {
        const shoppingBag = localStorage.getItem("shoppingBag");
        const parsedShoppingBag = JSON.parse(shoppingBag);
        const newBag = []
        let orderHistoryId;

        for (let orderHistory in currentOrderHistory) {
          console.log("ORDER HISTORY", orderHistory);
          if (orderHistory !== undefined) {
            orderHistoryId = orderHistory;
            console.log("NEW ORDER HISTORY ID", orderHistoryId)
          }
        }

        const orderItemsPayload = {
          shoppingBag: parsedShoppingBag,
          orderHistory: orderHistoryId,
        };

        let successfulOrderItems = await dispatch(addOrderItem(orderItemsPayload));

        if (successfulOrderItems) {
          localStorage.setItem("shoppingBag", JSON.stringify(newBag))
          history.push("/")
        }
      }

    return (
        <fieldset>
        <legend>Select a maintenance drone</legend>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                 checked/>
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey"/>
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie"/>
          <label for="louie">Louie</label>
        </div>
        <button onClick={handleOrderItems}>Confirm Order</button>
    </fieldset>
    )

}

export default PaymentForm

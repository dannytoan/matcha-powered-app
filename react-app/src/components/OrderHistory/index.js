import { useSelector } from "react-redux";
import ProfileSideBar from "../ProfileSidebar";
import "./OrderHistory.css";

function OrderHistory() {
    const orderHistories = useSelector((state) => Object.values(state.orderHistory))
    console.log("ORDER HISTORIES", orderHistories)

return (
    <div id="profile-page-cntr">
        <ProfileSideBar />
        <h1>My Order History</h1>
        <div>
            {orderHistories?.map((orderHistory) => (
                <div>
                    {orderHistory.id}
                    {orderHistory?.order_items?.map((item) => (
                        <div>{item.product_name}</div>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

}

export default OrderHistory

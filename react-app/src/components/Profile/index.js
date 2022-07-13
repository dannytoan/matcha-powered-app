import { useSelector } from "react-redux"

function Profile() {

    const orderHistory = useSelector((state) => {
        return Object.values(state.orderHistory)})

    const sessionUserId = useSelector((state) => state.session.user.id)
    console.log("sessionUserId", sessionUserId)

    // console.log(orderHistory)
    const currentUserOrderHistories = orderHistory.filter((myOrder) => sessionUserId === myOrder.user_id)
    console.log("CURRENT USER ORDER HISTORIES", currentUserOrderHistories)


    return (
        <div>

        <h1>User Profile</h1>
        <h1>My Order History</h1>
        {/* {currentUserOrderHistories.map((order) => (
            <div>{order.}</div>
        ))} */}
        </div>
    )
}


export default Profile

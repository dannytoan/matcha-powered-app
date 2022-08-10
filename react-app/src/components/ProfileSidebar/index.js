import { useSelector } from "react-redux";
import "./ProfileSideBar.css";

function ProfileSideBar() {
  const currentUser = useSelector((state) => state.session.user);
  console.log("CURRENT USER", currentUser);

  return (
    <div id="profile-sidebar-cntr">
      <div id="profile-top-header">
        <img
          id="profile-img-user-overview"
          src={`https://ui-avatars.com/api/?name=${currentUser.first_name}&rounded=true&background=random&uppercase=false&size=40`}
          alt="profile"
        />
        <div id="profile-greeting-text" className="text">
          Hi, <br />{" "}
          <div id="profile-current-user-name" className="text">
            {currentUser.first_name}
          </div>
        </div>
      </div>
      <div>
        <li className="text profile-sidebar-category">Account Overview</li>
        <a href="/my-shop">
          <li className="text profile-sidebar-category">My Shop</li>
        </a>
        <li className="text profile-sidebar-category">
          <a href="/order-history" className="text">
            My Order History
          </a>
        </li>
      </div>
    </div>
  );
}

export default ProfileSideBar;

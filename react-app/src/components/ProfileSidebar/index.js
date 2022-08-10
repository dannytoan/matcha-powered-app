import { useSelector } from "react-redux";
import "./ProfileSideBar.css";

function ProfileSideBar() {
    const currentUser = useSelector((state) => state.session.user)
  return (
    <div id="profile-sidebar-cntr">
      <div id="profile-top-header">
        <img
          id="profile-img-user-overview"
          src={`https://ui-avatars.com/api/?name=${currentUser.first_name}&rounded=true&background=dbf4d7&uppercase=false&color=ffffff&size=40`}
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
        <a href="/my-shop" className="remove-link-dec">
          <li className="text profile-sidebar-category">My Shop</li>
        </a>
          <a href="/order-history" className="text remove-link-dec">
        <li className="text profile-sidebar-category">
            My Order History
        </li>
          </a>
      </div>
    </div>
  );
}

export default ProfileSideBar;

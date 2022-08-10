import ProfileSideBar from "../ProfileSidebar";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div id="profile-page-cntr">
      <ProfileSideBar />
      <div id="profile-overview-page-inner-cntr">
        <div className="profile-page-header">
          <h1 className="text">
            <i class="fa-solid fa-address-card"></i> Account Overview
          </h1>
        </div>
        <div id="account-details-ctnr">
          <div className="text account-details-label">Full Name:&nbsp;</div>
          <div className="text account-detail-text">
            {currentUser.first_name} {currentUser.last_name}
          </div>
          <div className="text account-details-label">Username:&nbsp;</div>
          <div className="text account-detail-text">{currentUser.username}</div>
          <div className="text account-details-label">Email Address:&nbsp;</div>
          <div className="text account-detail-text">{currentUser.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

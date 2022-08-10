import { Link } from 'react-router-dom'
import ProfileSideBar from '../ProfileSidebar';
import ProfilePageMyShop from '../ProfilePageMyShop';
import "./Profile.css"

function Profile() {
  return (
    <div id="profile-page-cntr">
      <ProfileSideBar />
    </div>
  );
}

export default Profile;

import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <li>
          <Link to="/order-history">
          Order History
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Profile;

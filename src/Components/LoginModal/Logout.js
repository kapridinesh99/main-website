import { Link } from 'react-router-dom';
import useAuth from '../../State/AuthProvider';

const LogoutCard = () => {
    const { logoutMutation } = useAuth();
    const { user } = {};
  
    function handleLogout() {
      logoutMutation.mutate({}, { onSettled: () => window.location.reload() });
    }
  
    return (
      <article className='logoutCard'>
        <header className='flex align-center gap-4xl'>
          <img className='userDP' src={user.profileUrl} alt={user.name} />
          <div className='flex column gap-l'>
            <span> {user.name} </span>
            <Link to='/user'>
              <u>View Profile</u>
            </Link>
          </div>
        </header>
        <hr />
        <button className='logout-button' onClick={handleLogout} type="submit">Log Out</button>
      </article>
    )
  };

  export default LogoutCard;
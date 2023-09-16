import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { authState } from '../../State/auth';
import { verifyAuth } from '../../Functions/auth';
import useAuth from '../../State/AuthProvider';
import '../LoginModal/Modal.css'
import Error from '../../Assets/Error';
import { getCredentials } from '../../Functions/util';
import { defaultProfileUrl } from '../../Functions/constants';

const LogoutCard = () => {
  const { logoutMutation } = useAuth();
  const { userID } = getCredentials();

  function handleLogout() {
    logoutMutation.mutate({}, { onSettled: () => window.location.reload() });
  }

  return (
    <article className='flex column space-between logoutCard'>
      <header className='flex align-center gap-4xl'>
        <img className='userDP' src={defaultProfileUrl} alt={userID} />
        <div className='flex column align-start gap-l'>
          <b> {userID} </b>
          <Link to='/user'>
            <div className='view-profile-btn'>
            <p>View Profile</p>
            </div>
          </Link>
        </div>
      </header>
      <button className='logout-button' onClick={handleLogout} type="submit">Log Out</button>
    </article>
  )
};

const LoginModal = () => {
  const { loginMutation } = useAuth();
  const { isLoading, error, isError } = loginMutation;
  const navigate = useNavigate();

  const { data: isLoggedIn = false } = useQuery(['authStatus'], {
    queryFn: () => {
      const { userToken } = getCredentials();
      if (!userToken) return false;
      return verifyAuth({ userToken });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElem = e.target;
    const formData = new FormData(formElem);
    const formObj = Object.fromEntries(formData.entries());
    loginMutation.mutate(({ payload: formObj }), {
      onSuccess: () => {
        navigate('/user');
      }
    });
  };

  const LoginForm = () => {
    return (
      <article className='form-box'>
        <form className="form" onSubmit={handleSubmit}>
          <div >

          {isError && (<div className='flex align-center justify-center gap-l error-message'> <Error /> {error?.response?.data?.message ?? 'Please check the entered details !'} </div>)}
                <br /> 
            <div className="group">
              <input 
              required 
              type="text" 
              id='userId' 
              name='userId' 
              placeholder="" />
              <label for="userId">User ID</label>
            </div>
            <div className="group">
              <input 
              required 
              id='password' 
              name='password'
              placeholder=""
              type="password" />
              <label for="password">Password</label>
            </div>
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="form-section">
          <p>Don't have an account? <Link to='/signup' alt=''>Create One</Link></p>
        </div>
      </article>
    )
  };

  return (

    <div className="flex justify-center align-center">
      { isLoggedIn 
        ? <LogoutCard />
        : <LoginForm /> }
    </div>
  );
};

export default LoginModal;
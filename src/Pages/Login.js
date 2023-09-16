import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Error from '../Assets/Error';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useAuth from '../State/AuthProvider';
import COVER_IMG from './assets/cover-img.svg';
import { verifyAuth } from '../Functions/auth';
import { getCredentials } from '../Functions/util';

function Login() {
  const { loginMutation } = useAuth();
  const { isLoading, isError, error } = loginMutation;
  const navigate = useNavigate();

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

  useQuery(['authStatus'], {
      queryFn: () => {
          const { userToken } = getCredentials();
          if (!userToken) return false;
          return verifyAuth({ userToken });
      },
      onSuccess: (data) => {
        if ( data )
          navigate('/user');
      }
  });

  return (
    <>
      <Header />
      <br /> <br />
      <div className='flex auth-page align-center justify-center'>
        <div className='auth-page-art relative w-1/2 h-full flex flex-col'>
          <img src={COVER_IMG} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='auth-form-wrapper bg-[#f5f5f5] justify-between '>
          <div className='flex column justify-center align-center'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl font-semibold mb-4'>Login</h3>
              <p className='text-base mb-2'>
                Welcome back! Please enter your details
              </p>
            </div>
            <form className='form' onSubmit={handleSubmit}>
              <div className='w-full flex flex-col'>
                {isError && (<div className='flex align-center justify-center gap-l error-message'> <Error /> {error?.response?.data?.message ?? 'Please check the entered details !'} </div>)}
                <br /> 
                <div className='group'>
                  <input
                    id='userId'
                    name='userId'
                    type='userId'
                    placeholder=''
                  />
                  <label for='userId'>User Id</label>
                </div>
                <div className='group'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    placeholder=''
                  />
                  <label for='password'>Password</label>
                </div>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center'>
                  <input id='rememberMe' name='rememberMe' type='checkbox' className='w-4 h-4 mr-2' />
                  <p className='text-sm'>Remember Me for 30 days</p>
                </div>
                {/* <p className='text-sm font-medium cursor-pointer underline underline-offset-2'>
                  Forget Password
                </p> */}
              </div>
              <div className='w-full flex flex-col'>
                <button type='submit' className='w-full bg-[#060606] text-stone-50 rounded-full py-4 p-4 text-center flex items-center justify-center'>
                  Login
                </button>
              </div>
            </form>
          </div>
          <br />
          <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-black'>
              Don't have an account?{' '}
              <a
                href='/signup'
                className='font-semibold underline underline-offset-2 cursor-pointer'>
                Sign Up </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
